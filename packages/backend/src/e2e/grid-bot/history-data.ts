import { buy, sell } from 'src/e2e/grid-bot/orders/action-orders';
import {
  buyFilled,
  buyPlaced,
  sellFilled,
  sellPlaced,
} from 'src/e2e/grid-bot/orders/limit-orders';
import { GridBotE2EHistoryData } from './types';
import { buyId, dealId, sellId } from './utils/ids';
import { dealBuyPlaced, dealSellPlaced } from './deals/deals';

let gridBotE2EHistoryDataRaw: GridBotE2EHistoryData[] = [
  {
    time: '2019-04-01',
    price: 15.2,
    limitOrders: [
      // sell
      sellPlaced(sellId(10), 19, 20),
      sellPlaced(sellId(9), 18, 19),
      sellPlaced(sellId(8), 17, 18),
      sellPlaced(sellId(7), 16, 17),
      sellPlaced(sellId(6), 15, 16), // wait

      // buy
      buyPlaced(buyId(5), 14, 15),
      buyPlaced(buyId(4), 13, 14),
      buyPlaced(buyId(3), 12, 13),
      buyPlaced(buyId(2), 11, 12),
      buyPlaced(buyId(1), 10, 11),
    ],
    deals: [
      // sell
      dealSellPlaced(dealId(10), 19, 20),
      dealSellPlaced(dealId(9), 18, 19),
      dealSellPlaced(dealId(8), 17, 18),
      dealSellPlaced(dealId(7), 16, 17),
      dealSellPlaced(dealId(6), 15, 16), // wait

      // buy
      dealBuyPlaced(dealId(5), 14, 15),
      dealBuyPlaced(dealId(4), 13, 14),
      dealBuyPlaced(dealId(3), 12, 13),
      dealBuyPlaced(dealId(2), 11, 12),
      dealBuyPlaced(dealId(1), 10, 11),
    ],
    orders: [],
  },
  {
    time: '2019-04-02',
    price: 14.9,
    limitOrders: [
      // sell
      sellPlaced(sellId(10), 19, 20),
      sellPlaced(sellId(9), 18, 19),
      sellPlaced(sellId(8), 17, 18),
      sellPlaced(sellId(7), 16, 17),
      sellPlaced(sellId(6), 15, 16), // wait

      // buy
      buyPlaced(buyId(5), 14, 15),
      buyPlaced(buyId(4), 13, 14),
      buyPlaced(buyId(3), 12, 13),
      buyPlaced(buyId(2), 11, 12),
      buyPlaced(buyId(1), 10, 11),
    ],
    deals: [],
    orders: [],
  },
  {
    time: '2019-04-03',
    price: 15.6,
    limitOrders: [
      // sell
      sellPlaced(sellId(10), 19, 20),
      sellPlaced(sellId(9), 18, 19),
      sellPlaced(sellId(8), 17, 18),
      sellPlaced(sellId(7), 16, 17),
      sellPlaced(sellId(6), 15, 16), // wait

      // buy
      buyPlaced(buyId(5), 14, 15),
      buyPlaced(buyId(4), 13, 14),
      buyPlaced(buyId(3), 12, 13),
      buyPlaced(buyId(2), 11, 12),
      buyPlaced(buyId(1), 10, 11),
    ],
    deals: [],
    orders: [],
  },
  {
    time: '2019-04-04',
    price: 15.2,
    limitOrders: [
      // sell
      sellPlaced(sellId(10), 19, 20),
      sellPlaced(sellId(9), 18, 19),
      sellPlaced(sellId(8), 17, 18),
      sellPlaced(sellId(7), 16, 17),
      sellPlaced(sellId(6), 15, 16), // wait

      // buy
      buyPlaced(buyId(5), 14, 15),
      buyPlaced(buyId(4), 13, 14),
      buyPlaced(buyId(3), 12, 13),
      buyPlaced(buyId(2), 11, 12),
      buyPlaced(buyId(1), 10, 11),
    ],
    deals: [],
    orders: [],
  },
  {
    time: '2019-04-05',
    price: 15.3,
    limitOrders: [
      // sell
      sellPlaced(sellId(10), 19, 20),
      sellPlaced(sellId(9), 18, 19),
      sellPlaced(sellId(8), 17, 18),
      sellPlaced(sellId(7), 16, 17),
      sellPlaced(sellId(6), 15, 16), // wait

      // buy
      buyPlaced(buyId(5), 14, 15),
      buyPlaced(buyId(4), 13, 14),
      buyPlaced(buyId(3), 12, 13),
      buyPlaced(buyId(2), 11, 12),
      buyPlaced(buyId(1), 10, 11),
    ],
    deals: [],
    orders: [],
  },
  {
    time: '2019-04-06',
    price: 13.5,
    limitOrders: [
      // sell
      sellPlaced(sellId(10), 19, 20),
      sellPlaced(sellId(9), 18, 19),
      sellPlaced(sellId(8), 17, 18),
      sellPlaced(sellId(7), 16, 17),
      sellPlaced(sellId(6), 15, 16), // wait

      // buy
      buyFilled(buyId(5), 14, 15),
      buyPlaced(buyId(4), 13, 14),
      buyPlaced(buyId(3), 12, 13),
      buyPlaced(buyId(2), 11, 12),
      buyPlaced(buyId(1), 10, 11),
    ],
    deals: [
      dealSellPlaced(dealId(10), 19, 20),
      dealSellPlaced(dealId(9), 18, 19),
      dealSellPlaced(dealId(8), 17, 18),
      dealSellPlaced(dealId(7), 16, 17),
      dealSellPlaced(dealId(6), 15, 16),

      dealSellPlaced(dealId(5), 14, 15),
      dealBuyPlaced(dealId(4), 13, 14),
      dealBuyPlaced(dealId(3), 12, 13),
      dealBuyPlaced(dealId(2), 11, 12),
      dealBuyPlaced(dealId(1), 10, 11),
    ],
    orders: [buy(14)],
  },
  {
    time: '2019-04-07',
    price: 13.45,
    limitOrders: [
      // sell
      sellPlaced(sellId(10), 19, 20),
      sellPlaced(sellId(9), 18, 19),
      sellPlaced(sellId(8), 17, 18),
      sellPlaced(sellId(7), 16, 17),
      sellPlaced(sellId(6), 15, 16), // wait

      // buy
      sellPlaced(sellId(5), 14, 15),
      buyPlaced(buyId(4), 13, 14),
      buyPlaced(buyId(3), 12, 13),
      buyPlaced(buyId(2), 11, 12),
      buyPlaced(buyId(1), 10, 11),
    ],
    deals: [],
    orders: [],
  },
  {
    time: '2019-04-08',
    price: 13.9,
    limitOrders: [
      // sell
      sellPlaced(sellId(10), 19, 20),
      sellPlaced(sellId(9), 18, 19),
      sellPlaced(sellId(8), 17, 18),
      sellPlaced(sellId(7), 16, 17),
      sellPlaced(sellId(6), 15, 16), // wait

      // buy
      sellPlaced(sellId(5), 14, 15),
      buyPlaced(buyId(4), 13, 14),
      buyPlaced(buyId(3), 12, 13),
      buyPlaced(buyId(2), 11, 12),
      buyPlaced(buyId(1), 10, 11),
    ],
    deals: [],
    orders: [],
  },
  {
    time: '2019-04-09',
    price: 13.1,
    limitOrders: [
      // sell
      sellPlaced(sellId(10), 19, 20),
      sellPlaced(sellId(9), 18, 19),
      sellPlaced(sellId(8), 17, 18),
      sellPlaced(sellId(7), 16, 17),
      sellPlaced(sellId(6), 15, 16), // wait

      // buy
      sellPlaced(sellId(5), 14, 15),
      buyPlaced(buyId(4), 13, 14),
      buyPlaced(buyId(3), 12, 13),
      buyPlaced(buyId(2), 11, 12),
      buyPlaced(buyId(1), 10, 11),
    ],
    deals: [],
    orders: [],
  },
  {
    time: '2019-04-10',
    price: 12.8,
    limitOrders: [
      // sell
      sellPlaced(sellId(10), 19, 20),
      sellPlaced(sellId(9), 18, 19),
      sellPlaced(sellId(8), 17, 18),
      sellPlaced(sellId(7), 16, 17),
      sellPlaced(sellId(6), 15, 16), // wait

      // buy
      sellPlaced(sellId(5), 14, 15),
      buyFilled(buyId(4), 13, 14),
      buyPlaced(buyId(3), 12, 13),
      buyPlaced(buyId(2), 11, 12),
      buyPlaced(buyId(1), 10, 11),
    ],
    deals: [
      dealSellPlaced(dealId(10), 19, 20),
      dealSellPlaced(dealId(9), 18, 19),
      dealSellPlaced(dealId(8), 17, 18),
      dealSellPlaced(dealId(7), 16, 17),
      dealSellPlaced(dealId(6), 15, 16),

      dealSellPlaced(dealId(5), 14, 15),
      dealSellPlaced(dealId(4), 13, 14),
      dealBuyPlaced(dealId(3), 12, 13),
      dealBuyPlaced(dealId(2), 11, 12),
      dealBuyPlaced(dealId(1), 10, 11),
    ],
    orders: [buy(13)],
  },
  {
    time: '2019-04-11',
    price: 13.45,
    limitOrders: [
      // sell
      sellPlaced(sellId(10), 19, 20),
      sellPlaced(sellId(9), 18, 19),
      sellPlaced(sellId(8), 17, 18),
      sellPlaced(sellId(7), 16, 17),
      sellPlaced(sellId(6), 15, 16), // wait

      // buy
      sellPlaced(sellId(5), 14, 15),
      sellPlaced(sellId(4), 13, 14),
      buyPlaced(buyId(3), 12, 13),
      buyPlaced(buyId(2), 11, 12),
      buyPlaced(buyId(1), 10, 11),
    ],
    deals: [],
    orders: [],
  },
  {
    time: '2019-04-12',
    price: 15.6,
    limitOrders: [
      sellPlaced(sellId(10), 19, 20),
      sellPlaced(sellId(9), 18, 19),
      sellPlaced(sellId(8), 17, 18),
      sellPlaced(sellId(7), 16, 17),
      sellPlaced(sellId(6), 15, 16),

      sellFilled(sellId(5), 14, 15),
      sellFilled(sellId(4), 13, 14),
      buyPlaced(buyId(3), 12, 13),
      buyPlaced(buyId(2), 11, 12),
      buyPlaced(buyId(1), 10, 11),
    ],
    deals: [
      dealSellPlaced(dealId(10), 19, 20),
      dealSellPlaced(dealId(9), 18, 19),
      dealSellPlaced(dealId(8), 17, 18),
      dealSellPlaced(dealId(7), 16, 17),
      dealSellPlaced(dealId(6), 15, 16),

      dealBuyPlaced(dealId(5), 14, 15),
      dealBuyPlaced(dealId(4), 13, 14),
      dealBuyPlaced(dealId(3), 12, 13),
      dealBuyPlaced(dealId(2), 11, 12),
      dealBuyPlaced(dealId(1), 10, 11),
    ],
    orders: [sell(14), sell(15)],
  },
  {
    time: '2019-04-13',
    price: 16.5,
    limitOrders: [
      sellPlaced(sellId(10), 19, 20),
      sellPlaced(sellId(9), 18, 19),
      sellPlaced(sellId(8), 17, 18),
      sellPlaced(sellId(7), 16, 17),
      sellFilled(sellId(6), 15, 16),

      buyPlaced(buyId(5), 14, 15),
      buyPlaced(buyId(4), 13, 14),
      buyPlaced(buyId(3), 12, 13),
      buyPlaced(buyId(2), 11, 12),
      buyPlaced(buyId(1), 10, 11),
    ],
    deals: [
      dealSellPlaced(dealId(10), 19, 20),
      dealSellPlaced(dealId(9), 18, 19),
      dealSellPlaced(dealId(8), 17, 18),
      dealSellPlaced(dealId(7), 16, 17),
      dealBuyPlaced(dealId(6), 15, 16),

      dealBuyPlaced(dealId(5), 14, 15),
      dealBuyPlaced(dealId(4), 13, 14),
      dealBuyPlaced(dealId(3), 12, 13),
      dealBuyPlaced(dealId(2), 11, 12),
      dealBuyPlaced(dealId(1), 10, 11),
    ],
    orders: [sell(16)],
  },
  {
    time: '2019-04-14',
    price: 16.9,
    limitOrders: [
      sellPlaced(sellId(10), 19, 20),
      sellPlaced(sellId(9), 18, 19),
      sellPlaced(sellId(8), 17, 18),
      sellPlaced(sellId(7), 16, 17),
      buyPlaced(buyId(6), 15, 16),

      buyPlaced(buyId(5), 14, 15),
      buyPlaced(buyId(4), 13, 14),
      buyPlaced(buyId(3), 12, 13),
      buyPlaced(buyId(2), 11, 12),
      buyPlaced(buyId(1), 10, 11),
    ],
    deals: [],
    orders: [],
  },
  {
    time: '2019-04-15',
    price: 16.3,
    limitOrders: [
      sellPlaced(sellId(10), 19, 20),
      sellPlaced(sellId(9), 18, 19),
      sellPlaced(sellId(8), 17, 18),
      sellPlaced(sellId(7), 16, 17),
      buyPlaced(buyId(6), 15, 16),

      buyPlaced(buyId(5), 14, 15),
      buyPlaced(buyId(4), 13, 14),
      buyPlaced(buyId(3), 12, 13),
      buyPlaced(buyId(2), 11, 12),
      buyPlaced(buyId(1), 10, 11),
    ],
    deals: [],
    orders: [],
  },
  {
    time: '2019-04-16',
    price: 15.25,
    limitOrders: [
      sellPlaced(sellId(10), 19, 20),
      sellPlaced(sellId(9), 18, 19),
      sellPlaced(sellId(8), 17, 18),
      sellPlaced(sellId(7), 16, 17),
      buyPlaced(buyId(6), 15, 16),

      buyPlaced(buyId(5), 14, 15),
      buyPlaced(buyId(4), 13, 14),
      buyPlaced(buyId(3), 12, 13),
      buyPlaced(buyId(2), 11, 12),
      buyPlaced(buyId(1), 10, 11),
    ],
    deals: [],
    orders: [],
  },
  {
    time: '2019-04-17',
    price: 14.9,
    limitOrders: [
      sellPlaced(sellId(10), 19, 20),
      sellPlaced(sellId(9), 18, 19),
      sellPlaced(sellId(8), 17, 18),
      sellPlaced(sellId(7), 16, 17),
      buyFilled(buyId(6), 15, 16),

      buyPlaced(buyId(5), 14, 15),
      buyPlaced(buyId(4), 13, 14),
      buyPlaced(buyId(3), 12, 13),
      buyPlaced(buyId(2), 11, 12),
      buyPlaced(buyId(1), 10, 11),
    ],
    deals: [
      dealSellPlaced(dealId(10), 19, 20),
      dealSellPlaced(dealId(9), 18, 19),
      dealSellPlaced(dealId(8), 17, 18),
      dealSellPlaced(dealId(7), 16, 17),
      dealSellPlaced(dealId(6), 15, 16),

      dealBuyPlaced(dealId(5), 14, 15),
      dealBuyPlaced(dealId(4), 13, 14),
      dealBuyPlaced(dealId(3), 12, 13),
      dealBuyPlaced(dealId(2), 11, 12),
      dealBuyPlaced(dealId(1), 10, 11),
    ],
    orders: [buy(15)],
  },
  {
    time: '2019-04-18',
    price: 13.3,
    limitOrders: [
      sellPlaced(sellId(10), 19, 20),
      sellPlaced(sellId(9), 18, 19),
      sellPlaced(sellId(8), 17, 18),
      sellPlaced(sellId(7), 16, 17),
      sellPlaced(sellId(6), 15, 16),

      buyFilled(buyId(5), 14, 15),
      buyPlaced(buyId(4), 13, 14),
      buyPlaced(buyId(3), 12, 13),
      buyPlaced(buyId(2), 11, 12),
      buyPlaced(buyId(1), 10, 11),
    ],
    deals: [
      dealSellPlaced(dealId(10), 19, 20),
      dealSellPlaced(dealId(9), 18, 19),
      dealSellPlaced(dealId(8), 17, 18),
      dealSellPlaced(dealId(7), 16, 17),
      dealSellPlaced(dealId(6), 15, 16),

      dealSellPlaced(dealId(5), 14, 15),
      dealBuyPlaced(dealId(4), 13, 14),
      dealBuyPlaced(dealId(3), 12, 13),
      dealBuyPlaced(dealId(2), 11, 12),
      dealBuyPlaced(dealId(1), 10, 11),
    ],
    orders: [buy(14)],
  },
  {
    time: '2019-04-19',
    price: 12.5,
    limitOrders: [
      sellPlaced(sellId(10), 19, 20),
      sellPlaced(sellId(9), 18, 19),
      sellPlaced(sellId(8), 17, 18),
      sellPlaced(sellId(7), 16, 17),
      sellPlaced(sellId(6), 15, 16),

      sellPlaced(sellId(5), 14, 15),
      buyFilled(buyId(4), 13, 14),
      buyPlaced(buyId(3), 12, 13),
      buyPlaced(buyId(2), 11, 12),
      buyPlaced(buyId(1), 10, 11),
    ],
    deals: [
      dealSellPlaced(dealId(10), 19, 20),
      dealSellPlaced(dealId(9), 18, 19),
      dealSellPlaced(dealId(8), 17, 18),
      dealSellPlaced(dealId(7), 16, 17),
      dealSellPlaced(dealId(6), 15, 16),

      dealSellPlaced(dealId(5), 14, 15),
      dealSellPlaced(dealId(4), 13, 14),
      dealBuyPlaced(dealId(3), 12, 13),
      dealBuyPlaced(dealId(2), 11, 12),
      dealBuyPlaced(dealId(1), 10, 11),
    ],
    orders: [buy(13)],
  },
  {
    time: '2019-04-20',
    price: 10.2,
    limitOrders: [
      sellPlaced(sellId(10), 19, 20),
      sellPlaced(sellId(9), 18, 19),
      sellPlaced(sellId(8), 17, 18),
      sellPlaced(sellId(7), 16, 17),
      sellPlaced(sellId(6), 15, 16),

      sellPlaced(sellId(5), 14, 15),
      sellPlaced(sellId(4), 13, 14),
      buyFilled(buyId(3), 12, 13),
      buyFilled(buyId(2), 11, 12),
      buyPlaced(buyId(1), 10, 11),
    ],
    deals: [
      dealSellPlaced(dealId(10), 19, 20),
      dealSellPlaced(dealId(9), 18, 19),
      dealSellPlaced(dealId(8), 17, 18),
      dealSellPlaced(dealId(7), 16, 17),
      dealSellPlaced(dealId(6), 15, 16),

      dealSellPlaced(dealId(5), 14, 15),
      dealSellPlaced(dealId(4), 13, 14),
      dealSellPlaced(dealId(3), 12, 13),
      dealSellPlaced(dealId(2), 11, 12),
      dealBuyPlaced(dealId(1), 10, 11),
    ],
    orders: [buy(12), buy(11)],
  },
  {
    time: '2019-04-21',
    price: 10.1,
    limitOrders: [
      sellPlaced(sellId(10), 19, 20),
      sellPlaced(sellId(9), 18, 19),
      sellPlaced(sellId(8), 17, 18),
      sellPlaced(sellId(7), 16, 17),
      sellPlaced(sellId(6), 15, 16),

      sellPlaced(sellId(5), 14, 15),
      sellPlaced(sellId(4), 13, 14),
      sellPlaced(sellId(3), 12, 13),
      sellPlaced(sellId(2), 11, 12),
      buyPlaced(buyId(1), 10, 11),
    ],
    deals: [],
    orders: [],
  },
  {
    time: '2019-04-22',
    price: 9.5,
    limitOrders: [
      sellPlaced(sellId(10), 19, 20),
      sellPlaced(sellId(9), 18, 19),
      sellPlaced(sellId(8), 17, 18),
      sellPlaced(sellId(7), 16, 17),
      sellPlaced(sellId(6), 15, 16),

      sellPlaced(sellId(5), 14, 15),
      sellPlaced(sellId(4), 13, 14),
      sellPlaced(sellId(3), 12, 13),
      sellPlaced(sellId(2), 11, 12),
      buyFilled(buyId(1), 10, 11),
    ],
    deals: [
      dealSellPlaced(dealId(10), 19, 20),
      dealSellPlaced(dealId(9), 18, 19),
      dealSellPlaced(dealId(8), 17, 18),
      dealSellPlaced(dealId(7), 16, 17),
      dealSellPlaced(dealId(6), 15, 16),

      dealSellPlaced(dealId(5), 14, 15),
      dealSellPlaced(dealId(4), 13, 14),
      dealSellPlaced(dealId(3), 12, 13),
      dealSellPlaced(dealId(2), 11, 12),
      dealSellPlaced(dealId(1), 10, 11),
    ],
    orders: [buy(10)],
  },
  {
    time: '2019-04-23',
    price: 9.2,
    limitOrders: [
      sellPlaced(sellId(10), 19, 20),
      sellPlaced(sellId(9), 18, 19),
      sellPlaced(sellId(8), 17, 18),
      sellPlaced(sellId(7), 16, 17),
      sellPlaced(sellId(6), 15, 16),

      sellPlaced(sellId(5), 14, 15),
      sellPlaced(sellId(4), 13, 14),
      sellPlaced(sellId(3), 12, 13),
      sellPlaced(sellId(2), 11, 12),
      sellPlaced(sellId(1), 10, 11),
    ],
    deals: [],
    orders: [],
  },
  {
    time: '2019-04-24',
    price: 9.5,
    limitOrders: [
      sellPlaced(sellId(10), 19, 20),
      sellPlaced(sellId(9), 18, 19),
      sellPlaced(sellId(8), 17, 18),
      sellPlaced(sellId(7), 16, 17),
      sellPlaced(sellId(6), 15, 16),

      sellPlaced(sellId(5), 14, 15),
      sellPlaced(sellId(4), 13, 14),
      sellPlaced(sellId(3), 12, 13),
      sellPlaced(sellId(2), 11, 12),
      sellPlaced(sellId(1), 10, 11),
    ],
    deals: [],
    orders: [],
  },
  {
    time: '2019-04-25',
    price: 10.3,
    limitOrders: [
      sellPlaced(sellId(10), 19, 20),
      sellPlaced(sellId(9), 18, 19),
      sellPlaced(sellId(8), 17, 18),
      sellPlaced(sellId(7), 16, 17),
      sellPlaced(sellId(6), 15, 16),

      sellPlaced(sellId(5), 14, 15),
      sellPlaced(sellId(4), 13, 14),
      sellPlaced(sellId(3), 12, 13),
      sellPlaced(sellId(2), 11, 12),
      sellPlaced(sellId(1), 10, 11),
    ],
    deals: [],
    orders: [],
  },
  {
    time: '2019-04-26',
    price: 10.2,
    limitOrders: [
      sellPlaced(sellId(10), 19, 20),
      sellPlaced(sellId(9), 18, 19),
      sellPlaced(sellId(8), 17, 18),
      sellPlaced(sellId(7), 16, 17),
      sellPlaced(sellId(6), 15, 16),

      sellPlaced(sellId(5), 14, 15),
      sellPlaced(sellId(4), 13, 14),
      sellPlaced(sellId(3), 12, 13),
      sellPlaced(sellId(2), 11, 12),
      sellPlaced(sellId(1), 10, 11),
    ],
    deals: [],
    orders: [],
  },
  {
    time: '2019-04-27',
    price: 10.8,
    limitOrders: [
      sellPlaced(sellId(10), 19, 20),
      sellPlaced(sellId(9), 18, 19),
      sellPlaced(sellId(8), 17, 18),
      sellPlaced(sellId(7), 16, 17),
      sellPlaced(sellId(6), 15, 16),

      sellPlaced(sellId(5), 14, 15),
      sellPlaced(sellId(4), 13, 14),
      sellPlaced(sellId(3), 12, 13),
      sellPlaced(sellId(2), 11, 12),
      sellPlaced(sellId(1), 10, 11),
    ],
    deals: [],
    orders: [],
  },
  {
    time: '2019-04-28',
    price: 11.1,
    limitOrders: [
      sellPlaced(sellId(10), 19, 20),
      sellPlaced(sellId(9), 18, 19),
      sellPlaced(sellId(8), 17, 18),
      sellPlaced(sellId(7), 16, 17),
      sellPlaced(sellId(6), 15, 16),

      sellPlaced(sellId(5), 14, 15),
      sellPlaced(sellId(4), 13, 14),
      sellPlaced(sellId(3), 12, 13),
      sellPlaced(sellId(2), 11, 12),
      sellFilled(sellId(1), 10, 11),
    ],
    deals: [
      dealSellPlaced(dealId(10), 19, 20),
      dealSellPlaced(dealId(9), 18, 19),
      dealSellPlaced(dealId(8), 17, 18),
      dealSellPlaced(dealId(7), 16, 17),
      dealSellPlaced(dealId(6), 15, 16),

      dealSellPlaced(dealId(5), 14, 15),
      dealSellPlaced(dealId(4), 13, 14),
      dealSellPlaced(dealId(3), 12, 13),
      dealSellPlaced(dealId(2), 11, 12),
      dealBuyPlaced(dealId(1), 10, 11),
    ],
    orders: [sell(11)],
  },
  {
    time: '2019-04-29',
    price: 12.5,
    limitOrders: [
      sellPlaced(sellId(10), 19, 20),
      sellPlaced(sellId(9), 18, 19),
      sellPlaced(sellId(8), 17, 18),
      sellPlaced(sellId(7), 16, 17),
      sellPlaced(sellId(6), 15, 16),

      sellPlaced(sellId(5), 14, 15),
      sellPlaced(sellId(4), 13, 14),
      sellPlaced(sellId(3), 12, 13),
      sellFilled(sellId(2), 11, 12),
      buyPlaced(buyId(1), 10, 11),
    ],
    deals: [
      dealSellPlaced(dealId(10), 19, 20),
      dealSellPlaced(dealId(9), 18, 19),
      dealSellPlaced(dealId(8), 17, 18),
      dealSellPlaced(dealId(7), 16, 17),
      dealSellPlaced(dealId(6), 15, 16),

      dealSellPlaced(dealId(5), 14, 15),
      dealSellPlaced(dealId(4), 13, 14),
      dealSellPlaced(dealId(3), 12, 13),
      dealBuyPlaced(dealId(2), 11, 12),
      dealBuyPlaced(dealId(1), 10, 11),
    ],
    orders: [sell(12)],
  },
  {
    time: '2019-04-30',
    price: 12.2,
    limitOrders: [
      sellPlaced(sellId(10), 19, 20),
      sellPlaced(sellId(9), 18, 19),
      sellPlaced(sellId(8), 17, 18),
      sellPlaced(sellId(7), 16, 17),
      sellPlaced(sellId(6), 15, 16),

      sellPlaced(sellId(5), 14, 15),
      sellPlaced(sellId(4), 13, 14),
      sellPlaced(sellId(3), 12, 13),
      buyPlaced(buyId(2), 11, 12),
      buyPlaced(buyId(1), 10, 11),
    ],
    deals: [],
    orders: [],
  },
  {
    time: '2019-05-01',
    price: 13.4,
    limitOrders: [
      sellPlaced(sellId(10), 19, 20),
      sellPlaced(sellId(9), 18, 19),
      sellPlaced(sellId(8), 17, 18),
      sellPlaced(sellId(7), 16, 17),
      sellPlaced(sellId(6), 15, 16),

      sellPlaced(sellId(5), 14, 15),
      sellPlaced(sellId(4), 13, 14),
      sellFilled(sellId(3), 12, 13),
      buyPlaced(buyId(2), 11, 12),
      buyPlaced(buyId(1), 10, 11),
    ],
    deals: [
      dealSellPlaced(dealId(10), 19, 20),
      dealSellPlaced(dealId(9), 18, 19),
      dealSellPlaced(dealId(8), 17, 18),
      dealSellPlaced(dealId(7), 16, 17),
      dealSellPlaced(dealId(6), 15, 16),

      dealSellPlaced(dealId(5), 14, 15),
      dealSellPlaced(dealId(4), 13, 14),
      dealBuyPlaced(dealId(3), 12, 13),
      dealBuyPlaced(dealId(2), 11, 12),
      dealBuyPlaced(dealId(1), 10, 11),
    ],
    orders: [sell(13)],
  },
  {
    time: '2019-05-02',
    price: 11.1,
    limitOrders: [
      sellPlaced(sellId(10), 19, 20),
      sellPlaced(sellId(9), 18, 19),
      sellPlaced(sellId(8), 17, 18),
      sellPlaced(sellId(7), 16, 17),
      sellPlaced(sellId(6), 15, 16),

      sellPlaced(sellId(5), 14, 15),
      sellPlaced(sellId(4), 13, 14),
      buyFilled(buyId(3), 12, 13),
      buyPlaced(buyId(2), 11, 12),
      buyPlaced(buyId(1), 10, 11),
    ],
    deals: [
      dealSellPlaced(dealId(10), 19, 20),
      dealSellPlaced(dealId(9), 18, 19),
      dealSellPlaced(dealId(8), 17, 18),
      dealSellPlaced(dealId(7), 16, 17),
      dealSellPlaced(dealId(6), 15, 16),

      dealSellPlaced(dealId(5), 14, 15),
      dealSellPlaced(dealId(4), 13, 14),
      dealSellPlaced(dealId(3), 12, 13),
      dealBuyPlaced(dealId(2), 11, 12),
      dealBuyPlaced(dealId(1), 10, 11),
    ],
    orders: [buy(12)],
  },
  {
    time: '2019-05-03',
    price: 12.5,
    limitOrders: [
      sellPlaced(sellId(10), 19, 20),
      sellPlaced(sellId(9), 18, 19),
      sellPlaced(sellId(8), 17, 18),
      sellPlaced(sellId(7), 16, 17),
      sellPlaced(sellId(6), 15, 16),

      sellPlaced(sellId(5), 14, 15),
      sellPlaced(sellId(4), 13, 14),
      sellPlaced(sellId(3), 12, 13),
      buyPlaced(buyId(2), 11, 12),
      buyPlaced(buyId(1), 10, 11),
    ],
    deals: [],
    orders: [],
  },
  {
    time: '2019-05-04',
    price: 10.3,
    limitOrders: [
      sellPlaced(sellId(10), 19, 20),
      sellPlaced(sellId(9), 18, 19),
      sellPlaced(sellId(8), 17, 18),
      sellPlaced(sellId(7), 16, 17),
      sellPlaced(sellId(6), 15, 16),

      sellPlaced(sellId(5), 14, 15),
      sellPlaced(sellId(4), 13, 14),
      sellPlaced(sellId(3), 12, 13),
      buyFilled(buyId(2), 11, 12),
      buyPlaced(buyId(1), 10, 11),
    ],
    deals: [
      dealSellPlaced(dealId(10), 19, 20),
      dealSellPlaced(dealId(9), 18, 19),
      dealSellPlaced(dealId(8), 17, 18),
      dealSellPlaced(dealId(7), 16, 17),
      dealSellPlaced(dealId(6), 15, 16),

      dealSellPlaced(dealId(5), 14, 15),
      dealSellPlaced(dealId(4), 13, 14),
      dealSellPlaced(dealId(3), 12, 13),
      dealSellPlaced(dealId(2), 11, 12),
      dealBuyPlaced(dealId(1), 10, 11),
    ],
    orders: [buy(11)],
  },
  {
    time: '2019-05-05',
    price: 12.1,
    limitOrders: [
      sellPlaced(sellId(10), 19, 20),
      sellPlaced(sellId(9), 18, 19),
      sellPlaced(sellId(8), 17, 18),
      sellPlaced(sellId(7), 16, 17),
      sellPlaced(sellId(6), 15, 16),

      sellPlaced(sellId(5), 14, 15),
      sellPlaced(sellId(4), 13, 14),
      sellPlaced(sellId(3), 12, 13),
      buyFilled(sellId(2), 11, 12),
      // Важно отметить, почему тут не sellFilled.
      // Так как за промежуток одного синка цена пересекла buy и sell гриды одновременно
      // следовательно buy заполнился но sell нет, так как ордер еще не был выставлен
      // sell будет выставлен в след. синке и заполнится мгновенно.
      buyPlaced(buyId(1), 10, 11),
    ],
    deals: [
      dealSellPlaced(dealId(10), 19, 20),
      dealSellPlaced(dealId(9), 18, 19),
      dealSellPlaced(dealId(8), 17, 18),
      dealSellPlaced(dealId(7), 16, 17),
      dealSellPlaced(dealId(6), 15, 16),

      dealSellPlaced(dealId(5), 14, 15),
      dealSellPlaced(dealId(4), 13, 14),
      dealSellPlaced(dealId(3), 12, 13),
      dealSellPlaced(dealId(2), 11, 12), // по логике должен быть dealSellFilled, но нет, смотри коммент выше
      dealBuyPlaced(dealId(1), 10, 11),
    ],
    orders: [sell(12)],
  },
  {
    time: '2019-05-06',
    price: 12.5,
    limitOrders: [
      sellPlaced(sellId(10), 19, 20),
      sellPlaced(sellId(9), 18, 19),
      sellPlaced(sellId(8), 17, 18),
      sellPlaced(sellId(7), 16, 17),
      sellPlaced(sellId(6), 15, 16),

      sellPlaced(sellId(5), 14, 15),
      sellPlaced(sellId(4), 13, 14),
      sellPlaced(sellId(3), 12, 13),
      sellFilled(sellId(2), 11, 12),
      buyPlaced(buyId(1), 10, 11),
    ],
    deals: [
      dealSellPlaced(dealId(10), 19, 20),
      dealSellPlaced(dealId(9), 18, 19),
      dealSellPlaced(dealId(8), 17, 18),
      dealSellPlaced(dealId(7), 16, 17),
      dealSellPlaced(dealId(6), 15, 16),

      dealSellPlaced(dealId(5), 14, 15),
      dealSellPlaced(dealId(4), 13, 14),
      dealSellPlaced(dealId(3), 12, 13),
      dealBuyPlaced(dealId(2), 11, 12),
      dealBuyPlaced(dealId(1), 10, 11),
    ],
    orders: [],
    // ордеров тут нет, однако заполнился sellFilled под номером 2, смотри коммент выше
  },
  {
    time: '2019-05-07',
    price: 16.2,
    limitOrders: [
      sellPlaced(sellId(10), 19, 20),
      sellPlaced(sellId(9), 18, 19),
      sellPlaced(sellId(8), 17, 18),
      sellPlaced(sellId(7), 16, 17),
      sellFilled(sellId(6), 15, 16),

      sellFilled(sellId(5), 14, 15),
      sellFilled(sellId(4), 13, 14),
      sellFilled(sellId(3), 12, 13),
      buyPlaced(buyId(2), 11, 12),
      buyPlaced(buyId(1), 10, 11),
    ],
    deals: [
      dealSellPlaced(dealId(10), 19, 20),
      dealSellPlaced(dealId(9), 18, 19),
      dealSellPlaced(dealId(8), 17, 18),
      dealSellPlaced(dealId(7), 16, 17),
      dealBuyPlaced(dealId(6), 15, 16),

      dealBuyPlaced(dealId(5), 14, 15),
      dealBuyPlaced(dealId(4), 13, 14),
      dealBuyPlaced(dealId(3), 12, 13),
      dealBuyPlaced(dealId(2), 11, 12),
      dealBuyPlaced(dealId(1), 10, 11),
    ],
    orders: [sell(13), sell(14), sell(15), sell(16)],
  },
  {
    time: '2019-05-08',
    price: 15.8,
    limitOrders: [
      sellPlaced(sellId(10), 19, 20),
      sellPlaced(sellId(9), 18, 19),
      sellPlaced(sellId(8), 17, 18),
      sellPlaced(sellId(7), 16, 17),
      buyPlaced(buyId(6), 15, 16),

      buyPlaced(buyId(5), 14, 15),
      buyPlaced(buyId(4), 13, 14),
      buyPlaced(buyId(3), 12, 13),
      buyPlaced(buyId(2), 11, 12),
      buyPlaced(buyId(1), 10, 11),
    ],
    deals: [],
    orders: [],
  },
  {
    time: '2019-05-09',
    price: 16.6,
    limitOrders: [
      sellPlaced(sellId(10), 19, 20),
      sellPlaced(sellId(9), 18, 19),
      sellPlaced(sellId(8), 17, 18),
      sellPlaced(sellId(7), 16, 17),
      buyPlaced(buyId(6), 15, 16),

      buyPlaced(buyId(5), 14, 15),
      buyPlaced(buyId(4), 13, 14),
      buyPlaced(buyId(3), 12, 13),
      buyPlaced(buyId(2), 11, 12),
      buyPlaced(buyId(1), 10, 11),
    ],
    deals: [],
    orders: [],
  },
  {
    time: '2019-05-10',
    price: 14.5,
    limitOrders: [
      sellPlaced(sellId(10), 19, 20),
      sellPlaced(sellId(9), 18, 19),
      sellPlaced(sellId(8), 17, 18),
      sellPlaced(sellId(7), 16, 17),
      buyFilled(buyId(6), 15, 16),

      buyPlaced(buyId(5), 14, 15),
      buyPlaced(buyId(4), 13, 14),
      buyPlaced(buyId(3), 12, 13),
      buyPlaced(buyId(2), 11, 12),
      buyPlaced(buyId(1), 10, 11),
    ],
    deals: [
      dealSellPlaced(dealId(10), 19, 20),
      dealSellPlaced(dealId(9), 18, 19),
      dealSellPlaced(dealId(8), 17, 18),
      dealSellPlaced(dealId(7), 16, 17),
      dealSellPlaced(dealId(6), 15, 16),

      dealBuyPlaced(dealId(5), 14, 15),
      dealBuyPlaced(dealId(4), 13, 14),
      dealBuyPlaced(dealId(3), 12, 13),
      dealBuyPlaced(dealId(2), 11, 12),
      dealBuyPlaced(dealId(1), 10, 11),
    ],
    orders: [buy(15)],
  },
  {
    time: '2019-05-11',
    price: 15.2,
    limitOrders: [
      sellPlaced(sellId(10), 19, 20),
      sellPlaced(sellId(9), 18, 19),
      sellPlaced(sellId(8), 17, 18),
      sellPlaced(sellId(7), 16, 17),
      sellPlaced(sellId(6), 15, 16),

      buyPlaced(buyId(5), 14, 15),
      buyPlaced(buyId(4), 13, 14),
      buyPlaced(buyId(3), 12, 13),
      buyPlaced(buyId(2), 11, 12),
      buyPlaced(buyId(1), 10, 11),
    ],
    deals: [],
    orders: [],
  },
  {
    time: '2019-05-12',
    price: 15.3,
    limitOrders: [
      sellPlaced(sellId(10), 19, 20),
      sellPlaced(sellId(9), 18, 19),
      sellPlaced(sellId(8), 17, 18),
      sellPlaced(sellId(7), 16, 17),
      sellPlaced(sellId(6), 15, 16),

      buyPlaced(buyId(5), 14, 15),
      buyPlaced(buyId(4), 13, 14),
      buyPlaced(buyId(3), 12, 13),
      buyPlaced(buyId(2), 11, 12),
      buyPlaced(buyId(1), 10, 11),
    ],
    deals: [],
    orders: [],
  },
  {
    time: '2019-05-13',
    price: 15.9,
    limitOrders: [
      sellPlaced(sellId(10), 19, 20),
      sellPlaced(sellId(9), 18, 19),
      sellPlaced(sellId(8), 17, 18),
      sellPlaced(sellId(7), 16, 17),
      sellPlaced(sellId(6), 15, 16),

      buyPlaced(buyId(5), 14, 15),
      buyPlaced(buyId(4), 13, 14),
      buyPlaced(buyId(3), 12, 13),
      buyPlaced(buyId(2), 11, 12),
      buyPlaced(buyId(1), 10, 11),
    ],
    deals: [],
    orders: [],
  },
  {
    time: '2019-05-14',
    price: 16.1,
    limitOrders: [
      sellPlaced(sellId(10), 19, 20),
      sellPlaced(sellId(9), 18, 19),
      sellPlaced(sellId(8), 17, 18),
      sellPlaced(sellId(7), 16, 17),
      sellFilled(sellId(6), 15, 16),

      buyPlaced(buyId(5), 14, 15),
      buyPlaced(buyId(4), 13, 14),
      buyPlaced(buyId(3), 12, 13),
      buyPlaced(buyId(2), 11, 12),
      buyPlaced(buyId(1), 10, 11),
    ],
    deals: [
      dealSellPlaced(dealId(10), 19, 20),
      dealSellPlaced(dealId(9), 18, 19),
      dealSellPlaced(dealId(8), 17, 18),
      dealSellPlaced(dealId(7), 16, 17),
      dealBuyPlaced(dealId(6), 15, 16),

      dealBuyPlaced(dealId(5), 14, 15),
      dealBuyPlaced(dealId(4), 13, 14),
      dealBuyPlaced(dealId(3), 12, 13),
      dealBuyPlaced(dealId(2), 11, 12),
      dealBuyPlaced(dealId(1), 10, 11),
    ],
    orders: [sell(16)],
  },
  {
    time: '2019-05-15',
    price: 15.3,
    limitOrders: [
      sellPlaced(sellId(10), 19, 20),
      sellPlaced(sellId(9), 18, 19),
      sellPlaced(sellId(8), 17, 18),
      sellPlaced(sellId(7), 16, 17),
      buyPlaced(buyId(6), 15, 16),

      buyPlaced(buyId(5), 14, 15),
      buyPlaced(buyId(4), 13, 14),
      buyPlaced(buyId(3), 12, 13),
      buyPlaced(buyId(2), 11, 12),
      buyPlaced(buyId(1), 10, 11),
    ],
    deals: [],
    orders: [],
  },
  {
    time: '2019-05-16',
    price: 16.5,
    limitOrders: [
      sellPlaced(sellId(10), 19, 20),
      sellPlaced(sellId(9), 18, 19),
      sellPlaced(sellId(8), 17, 18),
      sellPlaced(sellId(7), 16, 17),
      buyPlaced(buyId(6), 15, 16),

      buyPlaced(buyId(5), 14, 15),
      buyPlaced(buyId(4), 13, 14),
      buyPlaced(buyId(3), 12, 13),
      buyPlaced(buyId(2), 11, 12),
      buyPlaced(buyId(1), 10, 11),
    ],
    deals: [],
    orders: [],
  },
  {
    time: '2019-05-17',
    price: 16.2,
    limitOrders: [
      sellPlaced(sellId(10), 19, 20),
      sellPlaced(sellId(9), 18, 19),
      sellPlaced(sellId(8), 17, 18),
      sellPlaced(sellId(7), 16, 17),
      buyPlaced(buyId(6), 15, 16),

      buyPlaced(buyId(5), 14, 15),
      buyPlaced(buyId(4), 13, 14),
      buyPlaced(buyId(3), 12, 13),
      buyPlaced(buyId(2), 11, 12),
      buyPlaced(buyId(1), 10, 11),
    ],
    deals: [],
    orders: [],
  },
  {
    time: '2019-05-18',
    price: 17.6,
    limitOrders: [
      sellPlaced(sellId(10), 19, 20),
      sellPlaced(sellId(9), 18, 19),
      sellPlaced(sellId(8), 17, 18),
      sellFilled(sellId(7), 16, 17),
      buyPlaced(buyId(6), 15, 16),

      buyPlaced(buyId(5), 14, 15),
      buyPlaced(buyId(4), 13, 14),
      buyPlaced(buyId(3), 12, 13),
      buyPlaced(buyId(2), 11, 12),
      buyPlaced(buyId(1), 10, 11),
    ],
    deals: [
      dealSellPlaced(dealId(10), 19, 20),
      dealSellPlaced(dealId(9), 18, 19),
      dealSellPlaced(dealId(8), 17, 18),
      dealBuyPlaced(dealId(7), 16, 17),
      dealBuyPlaced(dealId(6), 15, 16),

      dealBuyPlaced(dealId(5), 14, 15),
      dealBuyPlaced(dealId(4), 13, 14),
      dealBuyPlaced(dealId(3), 12, 13),
      dealBuyPlaced(dealId(2), 11, 12),
      dealBuyPlaced(dealId(1), 10, 11),
    ],
    orders: [sell(17)],
  },
  {
    time: '2019-05-19',
    price: 18.3,
    limitOrders: [
      sellPlaced(sellId(10), 19, 20),
      sellPlaced(sellId(9), 18, 19),
      sellFilled(sellId(8), 17, 18),
      buyPlaced(buyId(7), 16, 17),
      buyPlaced(buyId(6), 15, 16),

      buyPlaced(buyId(5), 14, 15),
      buyPlaced(buyId(4), 13, 14),
      buyPlaced(buyId(3), 12, 13),
      buyPlaced(buyId(2), 11, 12),
      buyPlaced(buyId(1), 10, 11),
    ],
    deals: [
      dealSellPlaced(dealId(10), 19, 20),
      dealSellPlaced(dealId(9), 18, 19),
      dealBuyPlaced(dealId(8), 17, 18),
      dealBuyPlaced(dealId(7), 16, 17),
      dealBuyPlaced(dealId(6), 15, 16),

      dealBuyPlaced(dealId(5), 14, 15),
      dealBuyPlaced(dealId(4), 13, 14),
      dealBuyPlaced(dealId(3), 12, 13),
      dealBuyPlaced(dealId(2), 11, 12),
      dealBuyPlaced(dealId(1), 10, 11),
    ],
    orders: [sell(18)],
  },
  {
    time: '2019-05-20',
    price: 18.6,
    limitOrders: [
      sellPlaced(sellId(10), 19, 20),
      sellPlaced(sellId(9), 18, 19),
      buyPlaced(buyId(8), 17, 18),
      buyPlaced(buyId(7), 16, 17),
      buyPlaced(buyId(6), 15, 16),

      buyPlaced(buyId(5), 14, 15),
      buyPlaced(buyId(4), 13, 14),
      buyPlaced(buyId(3), 12, 13),
      buyPlaced(buyId(2), 11, 12),
      buyPlaced(buyId(1), 10, 11),
    ],
    deals: [],
    orders: [],
  },
  {
    time: '2019-05-21',
    price: 17.3,
    limitOrders: [
      sellPlaced(sellId(10), 19, 20),
      sellPlaced(sellId(9), 18, 19),
      buyPlaced(buyId(8), 17, 18),
      buyPlaced(buyId(7), 16, 17),
      buyPlaced(buyId(6), 15, 16),

      buyPlaced(buyId(5), 14, 15),
      buyPlaced(buyId(4), 13, 14),
      buyPlaced(buyId(3), 12, 13),
      buyPlaced(buyId(2), 11, 12),
      buyPlaced(buyId(1), 10, 11),
    ],
    deals: [],
    orders: [],
  },
  {
    time: '2019-05-22',
    price: 16.8,
    limitOrders: [
      sellPlaced(sellId(10), 19, 20),
      sellPlaced(sellId(9), 18, 19),
      buyFilled(buyId(8), 17, 18),
      buyPlaced(buyId(7), 16, 17),
      buyPlaced(buyId(6), 15, 16),

      buyPlaced(buyId(5), 14, 15),
      buyPlaced(buyId(4), 13, 14),
      buyPlaced(buyId(3), 12, 13),
      buyPlaced(buyId(2), 11, 12),
      buyPlaced(buyId(1), 10, 11),
    ],
    deals: [
      dealSellPlaced(dealId(10), 19, 20),
      dealSellPlaced(dealId(9), 18, 19),
      dealSellPlaced(dealId(8), 17, 18),
      dealBuyPlaced(dealId(7), 16, 17),
      dealBuyPlaced(dealId(6), 15, 16),

      dealBuyPlaced(dealId(5), 14, 15),
      dealBuyPlaced(dealId(4), 13, 14),
      dealBuyPlaced(dealId(3), 12, 13),
      dealBuyPlaced(dealId(2), 11, 12),
      dealBuyPlaced(dealId(1), 10, 11),
    ],
    orders: [buy(17)],
  },
  {
    time: '2019-05-23',
    price: 17.2,
    limitOrders: [
      sellPlaced(sellId(10), 19, 20),
      sellPlaced(sellId(9), 18, 19),
      sellPlaced(sellId(8), 17, 18),
      buyPlaced(buyId(7), 16, 17),
      buyPlaced(buyId(6), 15, 16),

      buyPlaced(buyId(5), 14, 15),
      buyPlaced(buyId(4), 13, 14),
      buyPlaced(buyId(3), 12, 13),
      buyPlaced(buyId(2), 11, 12),
      buyPlaced(buyId(1), 10, 11),
    ],
    deals: [],
    orders: [],
  },
  {
    time: '2019-05-24',
    price: 18.25,
    limitOrders: [
      sellPlaced(sellId(10), 19, 20),
      sellPlaced(sellId(9), 18, 19),
      sellFilled(sellId(8), 17, 18),
      buyPlaced(buyId(7), 16, 17),
      buyPlaced(buyId(6), 15, 16),

      buyPlaced(buyId(5), 14, 15),
      buyPlaced(buyId(4), 13, 14),
      buyPlaced(buyId(3), 12, 13),
      buyPlaced(buyId(2), 11, 12),
      buyPlaced(buyId(1), 10, 11),
    ],
    deals: [
      dealSellPlaced(dealId(10), 19, 20),
      dealSellPlaced(dealId(9), 18, 19),
      dealBuyPlaced(dealId(8), 17, 18),
      dealBuyPlaced(dealId(7), 16, 17),
      dealBuyPlaced(dealId(6), 15, 16),

      dealBuyPlaced(dealId(5), 14, 15),
      dealBuyPlaced(dealId(4), 13, 14),
      dealBuyPlaced(dealId(3), 12, 13),
      dealBuyPlaced(dealId(2), 11, 12),
      dealBuyPlaced(dealId(1), 10, 11),
    ],
    orders: [sell(18)],
  },
  {
    time: '2019-05-25',
    price: 20.5,
    limitOrders: [
      sellFilled(sellId(10), 19, 20),
      sellFilled(sellId(9), 18, 19),
      buyPlaced(buyId(8), 17, 18),
      buyPlaced(buyId(7), 16, 17),
      buyPlaced(buyId(6), 15, 16),

      buyPlaced(buyId(5), 14, 15),
      buyPlaced(buyId(4), 13, 14),
      buyPlaced(buyId(3), 12, 13),
      buyPlaced(buyId(2), 11, 12),
      buyPlaced(buyId(1), 10, 11),
    ],
    deals: [
      dealBuyPlaced(dealId(10), 19, 20),
      dealBuyPlaced(dealId(9), 18, 19),
      dealBuyPlaced(dealId(8), 17, 18),
      dealBuyPlaced(dealId(7), 16, 17),
      dealBuyPlaced(dealId(6), 15, 16),

      dealBuyPlaced(dealId(5), 14, 15),
      dealBuyPlaced(dealId(4), 13, 14),
      dealBuyPlaced(dealId(3), 12, 13),
      dealBuyPlaced(dealId(2), 11, 12),
      dealBuyPlaced(dealId(1), 10, 11),
    ],
    orders: [sell(19), sell(20)],
  },
];

// Fill days without deals with data from prev day
export const gridBotE2EHistoryData = gridBotE2EHistoryDataRaw.reduce(
  (acc, curr, i) => {
    if (curr.deals.length === 0 && i > 0) {
      acc[i] = {
        ...acc[i],
        deals: [...acc[i - 1].deals],
      };
    }

    return acc;
  },
  [...gridBotE2EHistoryDataRaw],
);