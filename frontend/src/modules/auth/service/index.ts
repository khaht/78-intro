import Service from 'core/service';
import { ResponseMsg } from 'store/types';
import { ILogin } from '../store/types';

export class AuthServices extends Service {
  public login(data: ILogin): Promise<ResponseMsg> {
    return this.post('/LoginVerifyPhoneNum', data);
  }
  public get78winPromoCenter(): Promise<ResponseMsg> {
    return this.post('/PromoCenter/Get78winPromoCenter', { PlatFormCode: '78win' });
  }
}
