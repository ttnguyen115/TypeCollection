import RegisterForm from "components/auth/RegisterForm"
import { Link } from "react-router-dom"

const Register = () => {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-6rem)]">
      <div className="container max-w-md p-5 shadow">
        <h2 className="my-3 text-2xl font-semibold tracking-widest text-center uppercase">
          TypeCollection
        </h2>
        <RegisterForm />
        <div>You already have an account?{' '}
          <Link to="/login" className="text-red-500">
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Register