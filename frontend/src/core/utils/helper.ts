const emailValidator = (rule: any, value: string, callback: any) => {
  const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const check = regex.test(value);
  if (!check) {
    callback(new Error('Invalid email format'));
  } else {
    callback();
  }
};

const emptyValidator = (rule: any, value: string, callback: any) => {
  if (value.trim() === '') {
    callback(new Error('This field must not be empty'));
  } else {
    callback();
  }
};
const emptyMultiSelectValidator = (rule: any, value: Array<number>, callback: any) => {
  if (value.length <= 0) {
    callback(new Error('This field must not be empty'));
  } else {
    callback();
  }
};
const usrNmValidator = (rule: any, value: string, callback: any) => {
  if (!value) {
    callback(new Error('Please input your username'));
  }
  if (value.length < 3) {
    callback(new Error('Username is too short (minium is 3 characters)'));
  }
  if (value.length > 30) {
    callback(new Error('Username is too long (maximum is 30 characters).'));
  }
  callback();
};

const passwordValidator = (rule: any, value: string, callback: any) => {
  const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  const check = regex.test(value);
  if (!check) {
    callback(
      new Error(
        'Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character',
      ),
    );
  } else {
    callback();
  }
};

const dateRangeValidator = (rule: any, value: any, callback: any) => {
  let check = true;
  // console.log(rule, value, value.length, typeof value);
  if (!value || (!value.start && !value.end)) {
    if (value && value.toString().length > 25) {
      check = true;
    } else {
      check = false;
    }
  }

  if (!check) {
    callback(new Error('Please select date'));
  } else {
    callback();
  }
};

const phoneValidator = (rule: any, value: string, callback: any) => {
  const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  const check = regex.test(value);
  if (!check) {
    callback(new Error(' '));
  } else {
    callback();
  }
};

const skillNotEmptyValidator = (rule: any, value: any[], callback: any) => {
  const check = value.length ? true : false;
  if (!check) {
    callback(new Error('Please input skill'));
  } else {
    callback();
  }
};
const fstNmValidator = (rule: any, value: string, callback: any) => {
  if (!value) {
    callback(new Error('Please input your fist name'));
  }
  if (value.length > 30) {
    callback(new Error('Fist name is too long (maximum is 30 characters).'));
  }
  callback();
};
const lstNmValidator = (rule: any, value: string, callback: any) => {
  if (!value) {
    callback(new Error('Please input your last name'));
  }
  if (value.length > 30) {
    callback(new Error('Last name is too long (maximum is 30 characters).'));
  }
  callback();
};
export {
  emptyMultiSelectValidator,
  emptyValidator,
  emailValidator,
  dateRangeValidator,
  phoneValidator,
  skillNotEmptyValidator,
  passwordValidator,
  usrNmValidator,
  fstNmValidator,
  lstNmValidator,
};
