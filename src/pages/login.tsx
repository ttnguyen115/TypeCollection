import LoginForm from "components/auth/LoginForm"
import SocialLogin from "components/auth/SocialLogin"
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-6rem)]">
      <div className="container max-w-md p-5 shadow">
        <h2 className="my-3 text-2xl font-semibold tracking-widest text-center uppercase">
          TypeCollection
        </h2>
        
        <LoginForm />
        <div className="text-center">Or</div>
        <SocialLogin />

        <div>Are you have an account?{' '}
          <Link to="/register" className="text-red-500">
            Register
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login