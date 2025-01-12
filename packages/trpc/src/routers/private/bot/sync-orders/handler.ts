import {
  BotProcessing,
  SmartTradeSynchronizer,
  SmartTradeExecutor,
} from "@opentrader/processing";
import type { OrderEntity } from "@opentrader/db";
import { xprisma } from "@opentrader/db";
import type { IGetLimitOrderResponse } from "@opentrader/types";
import type { Context } from "../../../../utils/context.js";
import type { TSyncGridBotOrdersInputSchema } from "./schema.js";

type Options = {
  ctx: {
    user: NonNullable<Context["user"]>;
  };
  input: TSyncGridBotOrdersInputSchema;
};

/**
 * 1.a. Sync orders statuses: `exchange -> db`
 * 1.b. Run bot template if any order status changed
 * 2. Place pending SmartTrades
 * @param ctx - Context
 * @param input - Input
 */
// @todo rename to process?
export async function syncOrders({ input }: Options) {
  const { botId } = input;

  // 1.a. Sync order statuses: exchange -> db
  // 1.b. Run bot template
  //
  // Get SmartTrades that contain at least on Order with status "Placed"
  const smartTrades = await xprisma.smartTrade.findMany({
    where: {
      orders: {
        some: {
          status: "Placed",
        },
      },
      bot: {
        id: botId,
      },
    },
    include: {
      orders: true,
      exchangeAccount: true,
    },
  });

  const onFilled = async (
    order: OrderEntity,
    _exchangeOrder: IGetLimitOrderResponse,
  ) => {
    const bot = await BotProcessing.fromSmartTradeId(order.smartTradeId);
    await bot.process();
  };

  const onCanceled = async (
    _order: OrderEntity,
    _exchangeOrder: IGetLimitOrderResponse,
  ) => {
    // NOOP
  };

  for (const smartTrade of smartTrades) {
    const smartTradeSynchronizer = new SmartTradeSynchronizer(
      smartTrade,
      smartTrade.exchangeAccount,
    );

    await smartTradeSynchronizer.sync({
      onFilled,
      onCanceled,
    });
  }

  // 2. Place pending SmartTrades
  const pendingSmartTrades = await xprisma.smartTrade.findMany({
    where: {
      type: "Trade",
      orders: {
        some: {
          status: "Idle",
        },
      },
      bot: {
        id: botId,
      },
    },
    include: {
      orders: true,
      exchangeAccount: true,
    },
  });

  for (const smartTrade of pendingSmartTrades) {
    const processor = SmartTradeExecutor.create(
      smartTrade,
      smartTrade.exchangeAccount,
    );

    await processor.next();
  }

  return {
    ok: true,
  };
}
