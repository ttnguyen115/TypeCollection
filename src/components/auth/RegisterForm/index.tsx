import Errors from 'components/global/Errors';
import Loading from 'components/global/Loading';
import useAuth from 'lib/react-query/hooks/useAuth';
import React from 'react';
import { toast } from 'react-toastify';
import { FormSubmit, InputChange } from 'types';
import { validRegister } from 'utils/common/valid';

function RegisterForm() {
  const { register } = useAuth();
  const initialState = { name: "", email: "", password: "", cf_password: "" };
  const [userRegister, setUserRegister] = React.useState(initialState);
  const { name, email, password, cf_password } = userRegister;

  const handleChangeInput = (e: InputChange) => {
    const { value, name } = e.target;
    setUserRegister({ ...userRegister, [name]: value });
  }

  const handleSubmit = (e: FormSubmit) => {
    e.preventDefault();
    const user = { name, email, password, cf_password };
    const check = validRegister(user);
    if (check.errLength) return toast.error(() => <Errors errors={check.errMsg} />);
    register(user);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="my-3">
        <label htmlFor="name">Display Name</label>
        <input
          type="text"
          name="name"
          className="w-full p-3 border"
          value={name}
          onChange={handleChangeInput}
        />
      </div>

      <div className="my-3">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          className="w-full p-3 border"
          value={email}
          onChange={handleChangeInput}
        />
      </div>

      <div className="my-3">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          className="w-full p-3 border"
          value={password}
          onChange={handleChangeInput}
        />
      </div>

      <div className="my-3">
        <label htmlFor="cf_password">Confirm Password</label>
        <input
          type="password"
          name="cf_password"
          className="w-full p-3 border"
          value={cf_password}
          onChange={handleChangeInput}
        />
      </div>

      <button className="w-full p-3 my-2 font-semibold tracking-wider uppercase border-2 hover:bg-gray-200">Register</button>
    </form>
  )
}

export default RegisterForm