import { IRegister } from 'types';

export const validRegister = (user: IRegister) => {
  const { name, email, password, cf_password } = user;
  const errors: Array<string> = [];

  if (!name.trim()) {
    errors.push('Please add your name.');
  } else if (name.length > 20) {
    errors.push('Your name is up to 20 characters long.');
  }

  if (!email.trim()) {
    errors.push('Please add your email.');
  } else if (!validateEmail(email)) {
    errors.push('Your email format is not correct.');
  }

  const msg = checkPassword(password, cf_password);
  if (msg) errors.push(msg);

  return {
    errMsg: errors,
    errLength: errors.length,
  }
};

function validateEmail(email: string) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export const checkPassword = (password: string, cf_password: string) => {
  if (password.length < 6) {
    return ("Password must be at least 6 characters.");
  } else if (password !== cf_password) {
    return ("Confirm password did not match.");
  }
}
