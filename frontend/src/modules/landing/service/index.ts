import Service from 'core/service';
import { ResponseMessage, CheckUserInfoInput, SendMsgInput, BindingUserInfoInput } from 'models';

export class ConstraintInfServices extends Service {
  public checkUserAccount(usrNm: string): Promise<ResponseMessage> {
    return this.get('/CheckUserAccount', { accountName: usrNm });
  }
  public checkUserInfo(input: CheckUserInfoInput): Promise<ResponseMessage> {
    return this.post('/CheckUserInfo', { ...input });
  }
  public sendMsg(input: SendMsgInput): Promise<ResponseMessage> {
    return this.post('/SendMsg', { ...input });
  }
  public bindingUserInfo(input: BindingUserInfoInput): Promise<ResponseMessage> {
    return this.post('/BindingUserInfo', { ...input });
  }
}
