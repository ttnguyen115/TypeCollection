import {
  browserLocalPersistence,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  setPersistence,
  signInWithEmailAndPassword,
  updateProfile,
  User,
} from 'firebase/auth';
import { auth } from 'lib/firebase';
import { toast } from 'react-toastify';
import { ILogin, IRegister } from 'types';

interface UseAuth {
  register: (user: IRegister) => Promise<User | undefined>;
  login: (user: ILogin) => Promise<User | undefined>;
}

function useAuth(): UseAuth {
  const SERVER_ERROR = 'There was an error contacting the server.';

  async function register(user: IRegister): Promise<User | undefined> {
    try {
      const { email, password } = user;
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(res.user, {
        displayName: user.name,
      });
      return res.user;
    } catch (err: any) {
      toast.error(err.message || SERVER_ERROR);
    }
  }

  async function login(user: ILogin): Promise<User | undefined> {
    try {
      const { email, password, remember } = user;
      await setPersistence(
        auth,
        remember ? browserLocalPersistence : browserSessionPersistence
      );
      const res = await signInWithEmailAndPassword(auth, email, password);
      return res.user;
    } catch (err: any) {
      toast.error(err.message || SERVER_ERROR);
    }
  }
  
  return {
    register,
    login,
  };
}

export default useAuth;
