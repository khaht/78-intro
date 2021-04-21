export interface ResponseMessage {
  code: string;
  success: boolean;
  msg: string;
  data: any;
}
export interface CheckUserInfoInput {
  accountName?: string;
  signa?: string;
  bankNum?: string;
  name?: string;
  lastLogin?: string;
  phoneCode?: string;
  phoneNumber?: string;
}

export interface SendMsgInput {
  accountName?: string;
  signa?: string;
  phoneNumber?: string;
}

export interface BindingUserInfoInput {
  accountName?: string;
  signa?: string;
  phoneCode?: string;
  zalo?: string;
  email?: string;
  phoneNumber?: string;
}

export interface EditUserInfoInput {
  accountName?: string;
  signa?: string;
  zalo?: string;
  email?: string;
  phoneCode?: string;
  phoneNumber?: string;
}

export interface ChangePwdInput {
  accountName?: string;
  signa?: string;
  pwd?: string;
  phoneCode?: string;
  phoneNumber?: string;
}
