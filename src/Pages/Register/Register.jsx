
import { Link } from 'react-router-dom';
import Navbar from '../../Shared/Navbar';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
    const [success, setSuccess] = useState("")
    const [Error, setError] = useState("")
    const {createUser} = useContext(AuthContext)

    const handleRegister = e =>{
      e.preventDefault();
      const Form = new FormData(e.currentTarget);
      const email = Form.get("email");
      const password = Form.get("password");
      setSuccess("")
      setError("")
      createUser(email, password)
      .then((result)=>{
        console.log(result.user)
        setSuccess("User Created successfully")
      })
      .catch((error)=>{
        console.log(error.code)
        setError(error.code)

      })
    }
    return (
        <div className="grid items-center">
        <Navbar></Navbar>
        <h1 className="text-center text-5xl font-bold pb-6">Register your account</h1>
        <div className="card bg-base-100 w-full max-w-md mx-auto shrink-0 shadow-2xl">
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
          </div>
          <div className='flex gap-3 items-center'>
          <input type="checkbox" />
          <p className='text-base font-semibold'>Accept terms and conditions</p>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
          {
            success && <p className='font-semibold text-green-500'>{success}</p>
          }
          {
            Error && <p className='font-semibold text-red-500'>{Error}</p>
          }
        </form>
    </div>
    <p className="text-center text-2xl font-semibold">Already Have An Account ? <Link to="/login" className="text-green-600">Login</Link></p>
    </div>
    );
};

export default Register;