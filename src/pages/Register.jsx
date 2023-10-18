import { Link, useNavigate } from "react-router-dom";

import { useContext, useState } from "react";

import Navbar from "../sections/Navbar";
import { AuthContext } from "../provider/AuthProvider";


const Register = () => {

    const {createUSer } = useContext(AuthContext);
    const navigate = useNavigate();

    const [registerSuccess,setRegisterSuccess] = useState('');
     const [registerError,setRegisterError] =useState('');

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, email, password);

        setRegisterSuccess('');
        setRegisterError('');

        if(password.length < 6){
            setRegisterError('password should be 6 character or longer');
            return;
        }
        else if(!/[A-Z]/.test(password)){
            setRegisterError('your password should have at least one uppercase characters');
            return;
        }

        else if (!/[a-zA-Z0-9]*[!#$%&?][a-zA-Z0-9]*/.test(password)) {
            setRegisterError('Your password should have at least one special character (!, #, $, %, &, or ?)');
            return;
        }
       

        createUSer(email, password,name)
        .then(result => {
          console.log(result.user);
          setRegisterSuccess('user created successfully')
          e.target.reset();
          navigate('/');
        })
        .catch(error => {
        console.error(error);
        setRegisterError(error.message);
      })
    }    
    return (
        <div>
            <Navbar></Navbar>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Register now!</h1>
    </div>
    <div className=" flex-shrink-0 w-full max-w-sm shadow-2xl  bg-sky-500">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="write your name" className="input input-bordered" required />
        </div>
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
          <button className="btn btn-primary">Register</button>
        </div>
    </form>
    {
        registerError && <p className="text-red-700">{registerError}</p>
    }

    {
        registerSuccess && <p className="text-green-600">{registerSuccess}</p>
    }
        <p>Already have an account? please <Link className="text-white text-3xl" to="/Login">Login</Link></p>
    </div>
  </div>
</div>
      </div>
      
    );
};

export default Register;