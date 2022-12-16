import { InternalServerErrorException, Logger } from '@nestjs/common';
import { IExchangeService } from 'src/core/exchanges/types/exchange-service.interface';

export class DefaultExchangeService implements IExchangeService {
  private readonly logger = new Logger(DefaultExchangeService.name);

  throwDependencyError(): Promise<never> {
    const error = new Error(
      `The 'ExchangeService' dependency should be injected manually. This factory is needed only to avoid the DI error in Nest.js`,
    );

    this.logger.error(error.message);

    throw new InternalServerErrorException(error.message);
  }

  accountAssets = this.throwDependencyError;
  getLimitOrder = this.throwDependencyError;
  placeLimitOrder = this.throwDependencyError;
  cancelLimitOrder = this.throwDependencyError;
  getMarketPrice = this.throwDependencyError;
}