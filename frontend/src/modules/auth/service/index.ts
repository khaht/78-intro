import Service from 'core/service';
import { ResponseMessage } from 'models';
import { ILogin } from '../store/types';

export class ConstraintInfServices extends Service {
  public login(data: ILogin): Promise<ResponseMessage> {
    return this.post('/LoginVerifyPhoneNum', data);
  }
}
