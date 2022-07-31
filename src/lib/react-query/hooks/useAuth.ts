import {
  createUserWithEmailAndPassword,
  updateProfile,
  User,
} from 'firebase/auth';
import { auth } from 'lib/firebase';
import { toast } from 'react-toastify';
import { IRegister } from 'types';

interface UseAuth {
  register: (user: IRegister) => Promise<User | undefined>;
}

function useAuth(): UseAuth {
  const SERVER_ERROR = 'There was an error contacting the server.';

  async function register(user: IRegister) {
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

  return {
    register,
  };
}

export default useAuth;
