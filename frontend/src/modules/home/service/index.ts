import Service from 'core/service';
import { ResponseMsg } from 'store/types';

export class HomeServices extends Service {
  public get78winPromoCenter(): Promise<ResponseMsg> {
    return this.post('/PromoCenter/Get78winPromoCenter', { PlatFormCode: '78win' });
  }
}
