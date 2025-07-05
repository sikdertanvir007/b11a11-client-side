import { use, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import Swal from 'sweetalert2';
import { toast, ToastContainer } from 'react-toastify';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';


const Register = () => {
  const { createUser, setUser, updateUser, handleGoogleSignIn } = use(AuthContext);
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const saveUserToDatabase = async (name, email, photo) => {
    try {
      const res = await fetch("https://b11a10-server-side-zeta.vercel.app/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, photo })
      });

      if (res.status === 409) {
        toast.warning("User with this email already exists.");
        return false;
      }

      if (res.ok) {
        toast.success("User saved to database!");
        return true;
      }

      toast.error("Failed to save user.");
      return false;

    } catch (error) {
      console.error("Error saving user to database:", error);
      toast.error("Server error while saving user.");
      return false;
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const photo = form.photo.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;

    // Name validation
    if (name.length < 5) {
      setNameError("Name should be at least 5 characters");
      return;
    } else {
      setNameError("");
    }

    // Password validation
    const uppercaseCheck = /[A-Z]/.test(password);
    const lowercaseCheck = /[a-z]/.test(password);
    const lengthCheck = password.length >= 6;

    if (!uppercaseCheck || !lowercaseCheck || !lengthCheck) {
      let errorMsg = "Password must have at least:";
      if (!uppercaseCheck) errorMsg += " one uppercase letter,";
      if (!lowercaseCheck) errorMsg += " one lowercase letter,";
      if (!lengthCheck) errorMsg += " six characters.";
      setPasswordError(errorMsg);
      return;
    } else {
      setPasswordError("");
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });

            saveUserToDatabase(name, email, photo).then((saved) => {
              if (saved) {
                Swal.fire({
                  title: 'Registration Successful!',
                  text: 'Welcome to MovieBox!',
                  icon: 'success',
                  confirmButtonColor: '#6366F1',
                });
                navigate(location.state ? location.state : "/");
              }
            });

          })
          .catch((error) => {
            toast.error("Failed to update profile");
            setUser(user); // fallback
          });
      })
      .catch((error) => {
        toast.error(error.message || "Registration failed");
      });
  };

  const handleGoogleRegister = () => {
    handleGoogleSignIn()
      .then((result) => {
        const user = result.user;
        const name = user.displayName;
        const email = user.email;
        const photo = user.photoURL;

        saveUserToDatabase(name, email, photo).then((saved) => {
          if (saved) {
            Swal.fire({
              title: 'Registration Successful!',
              text: 'Welcome to MegaMerx!',
              icon: 'success',
              confirmButtonColor: '#6366F1',
            });
            navigate(location.state ? location.state : "/");
          }
        });
      })
      .catch((error) => {
        toast.error(error.message || "Google Sign-In failed. Try again.");
      });
  };

  return (
    <div className='flex justify-center min-h-screen items-center'>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className='font-semibold text-2xl text-center'>Register your account!</h2>
        <form onSubmit={handleRegister} className="card-body space-y-5">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input name='name' type="text" className="input" placeholder="Your Name" required />
            {nameError && <p className='text-xs text-error'>{nameError}</p>}

            <label className="label">Photo URL</label>
            <input name='photo' type="text" className="input" placeholder="Photo URL" required />

            <label className="label">Email</label>
            <input name='email' type="email" className="input" placeholder="Email" required />

            <label className="label">Password</label>
            <input name='password' type="password" className="input" placeholder="Password" required />
            {passwordError && <p className='text-xs text-error'>{passwordError}</p>}

            <button type='submit' className="btn btn-neutral mt-4 rounded-full">Register</button>

            <p className='font-semibold text-center pt-2'>
              Already Have An Account? <Link className='text-secondary' to="/auth/login">Login</Link>
            </p>
          </fieldset>

          <div>
            <button
              type="button"
              onClick={handleGoogleRegister}
              className='btn btn-outline btn-secondary w-full rounded-full'
            >
              <FcGoogle size={20} /> Register With Google
            </button>
            <ToastContainer/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;