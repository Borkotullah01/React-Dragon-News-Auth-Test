import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Shared/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const LogIn = () => {
  const { signIn } = useContext(AuthContext)
  const [success, setSuccess] = useState("");
  const [Error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation()

  const handleLogin = e =>{
    e.preventDefault();
    const Form = new FormData(e.currentTarget);
    const email = Form.get("email");
    const password = Form.get("password");

    setSuccess("")
    setError("")

    signIn(email, password)
    .then((result)=>{
      console.log(result.user);
      setSuccess("User signed in successfully")
      navigate(location?.state ? location.state : "/")
    })
    .catch((error)=>{
      console.log(error.code);
      setError(error.code)
    })
  }


  return (
  <div className="grid items-center space-y-6">
      <Navbar></Navbar>
      <h1 className="text-center text-5xl font-bold">Login your account</h1>
      <div className="card bg-base-100 w-full max-w-md mx-auto shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <div>
          {success && <p className="text-green-500 font-semibold">{success}</p>}
          {Error && <p>{Error}</p>}
        </div>
      </form>
  </div>
  <p className="text-center text-2xl font-semibold">Dont’t Have An Account ? <Link to="/register" className="text-green-600">Register</Link></p>
  </div>
  );
};

export default LogIn;