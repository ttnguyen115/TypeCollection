import { useAuthSignInWithEmailAndPassword } from '@react-query-firebase/auth';
import { auth } from 'lib/firebase';
import React from 'react';
import { Link } from 'react-router-dom';
import { FormSubmit, InputChange } from 'types';

function LoginForm() {
  const initialState = { email: "", password: "" };
  const [userLogin, setUserLogin] = React.useState(initialState);
  const { email, password } = userLogin;
  const [remember, setRemember] = React.useState(false);
  const mutation = useAuthSignInWithEmailAndPassword(auth);

  const handleSetRemember = () => setRemember(!remember);

  const handleChangeInput = (e: InputChange) => {
    const { value, name } = e.target;
    setUserLogin({ ...userLogin, [name]: value });
  }

  const handleSubmit = (e: FormSubmit) => {
    e.preventDefault();
    const user = { email, password, remember };
    mutation.mutate(user);
  }

  return (
    <form onSubmit={handleSubmit}>
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

      <div className="flex items-center justify-between my-2">
        <div className="flex items-center">
          <input type="checkbox" id="rb-me" className='w-4 h-4' checked={remember} onChange={handleSetRemember} />
          <label htmlFor="rb-me" className='block ml-2 text-sm text-gray-900 cursor-pointer'>Remember me</label>
        </div>

        <Link to="/forgot_password" className='block ml-2 text-sm text-blue-500 cursor-pointer hover:underline'>
          Forgot your password
        </Link>
      </div>

      <button className="w-full p-3 my-2 font-semibold tracking-wider uppercase border-2 hover:bg-gray-200">Login</button>
    </form>
  )
}

export default LoginForm