import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

const ForgotPassword = () => {
    const location = useLocation();
    const navigate = useNavigate();
    
  const [email, setEmail] = useState(location.state?.email || '');

  const handleReset = (e) => {
    e.preventDefault();
    // Simulate password reset logic
    alert(`Password reset link sent to ${email}`);
    // Redirect to Gmail
    window.location.href = "https://mail.google.com";
  };
    return (
        <div>
            <div className='flex justify-center min-h-screen items-center'>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className='font-semibold text-2xl text-center'>Forgot Password</h2>
        <form onSubmit={handleReset} className="card-body space-y-5">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              placeholder="Enter your email"
              required
            />
            <button type='submit' className="btn btn-neutral mt-4">Reset Password</button>
          </fieldset>
        </form>
      </div>
    </div>
        </div>
    );
};

export default ForgotPassword;