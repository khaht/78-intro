import Service from 'core/service';
import { ResponseMsg } from 'store/types';
import { IUserBonusByPage } from '../store/types';

export class ProfileServices extends Service {
  public getUserBonusByPage(input: IUserBonusByPage): Promise<ResponseMsg> {
    return this.post('/UserBonusSearch/SearchUserBonusByPage', input);
  }
}
