import React, { use, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router';

import { FiEye, FiEyeOff } from 'react-icons/fi';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const [error, setError] = useState("");
    const { signIn , handleGoogleSignIn } = use(AuthContext) ;
    const location = useLocation();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then((result) => {
                const user = result.user;
               // console.log(user);
                navigate(location.state ? location.state : "/");
            })
            .catch(() => {
                setError("Invalid Password. Enter the correct password");
            });
    };

    const handlePasswordChange = () => {
        if (error) {
            setError(""); // Clear error as user starts typing
        }
    };

    return (
        <div className='flex justify-center min-h-screen items-center'>
          
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-2xl text-center'>Login your account!</h2>
                <form onSubmit={handleLogin} className="card-body space-y-5">
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" required  value={email}
  onChange={(e) => setEmail(e.target.value)}/>

<label className="label">Password</label>
<div className="relative">
  <input
    name="password"
    type={showPassword ? "text" : "password"}
    className="input w-full pr-10"
    placeholder="Password"
    required
    value={password}
    onChange={(e) => {
      handlePasswordChange();
      setPassword(e.target.value);
    }}
  />
  <button
    type="button"
    onClick={() => setShowPassword(!showPassword)}
    className="absolute inset-y-0 right-3 flex items-center text-xl text-gray-600"
    tabIndex={-1}
  >
    {showPassword ? <FiEyeOff /> : <FiEye />}
  </button>
</div>
                        {error && <p className='text-xs text-error'>{error}</p>}

                        <div><Link to="/auth/forgot-password"  state={{ email }}  className="link link-hover">Forgot password?</Link></div>

                        <button type='submit' className="btn btn-neutral mt-4 rounded-full">Login</button>

                        <p className='font-semibold text-center pt-2'>
                            Don't Have An Account? <Link className='text-secondary' to="/auth/register">Register</Link>
                        </p>
                    </fieldset>

                    <div>
                        <button  onClick={() => {
    handleGoogleSignIn()
      .then(() => {
        Swal.fire({
                     title: 'LogIn Successful!',
                     text: 'Welcome to foodish!',
                     icon: 'success',
                     confirmButtonColor: '#6366F1',
                   });
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.message || "Google Sign-In failed. Try again.");
      });
  }} className='btn btn-outline btn-secondary w-full rounded-full'>
                            <FcGoogle size={20} /> Login With Google
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;