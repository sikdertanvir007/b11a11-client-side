import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';

import { FaUserXmark } from "react-icons/fa6";
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';




const Navbar = () => {
   
  const {user,logOut} = useContext(AuthContext);
  const handleLogOut = () =>{
   //console.log("user trying to logout")
    logOut().then(() => {
   Swal.fire({
                                   title: 'You Logged Out!',
                                   icon: 'info',
                                   confirmButtonColor: '#6366F1',
                                 });
    }).catch((error) => {
       toast.error(error.message || "LogOut failed. Try again.");
    });
  }

  return (
    
      <div className="navbar bg-base-100 shadow-md p-0 px-3 md:px-8 lg:px-10 fixed top-0 left-0 w-full z-50  ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="cursor-pointer mr-2 lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <NavLink className={({isActive})=>(isActive ? 'underline text-orange-500 font-bold' : '')} to="/">Home</NavLink>
              <NavLink className={({isActive})=>(isActive ? 'underline text-orange-500 font-bold' : '')} to="/all-recipes">Categories</NavLink>
               {user && (
  <NavLink className={({isActive})=>(isActive ? 'underline text-orange-500 font-bold' : '')} to="/add-recipe">
    All Products 
  </NavLink>
)}
              {user && (
  <NavLink className={({isActive})=>(isActive ? 'underline text-orange-500 font-bold' : '')} to="/add-recipe">
    Add Product 
  </NavLink>
)}
              {user && (
  <NavLink className={({isActive})=>(isActive ? 'underline text-orange-500 font-bold' : '')} to={`/my-recipes?email=${user.email}`}>
    My Products
</NavLink>)}
 {user && (
  <NavLink className={({isActive})=>(isActive ? 'underline text-orange-500 font-bold' : '')} to={`/my-recipes?email=${user.email}`}>
    Cart
</NavLink>)}

            
             
            </ul>
          </div>
          <Link to="/">
           <p className='font-bold text-3xl text-orange-500 italic'>foo<span className='text-yellow-400'>dish</span></p>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-8">
            <NavLink  className={({isActive})=>(isActive ? 'btn btn-outline  btn-sm underline text-orange-500 font-bold' : 'btn btn-outline btn-sm ')} to="/">Home</NavLink>
             <NavLink className={({isActive})=>(isActive ? 'btn btn-outline  btn-sm underline text-orange-500 font-bold' : 'btn btn-outline btn-sm ')} to="/all-recipes">Categories</NavLink>
            {user && (
  <NavLink className={({isActive})=>(isActive ? ' btn btn-outline  btn-sm underline text-orange-500 font-bold' : 'btn btn-outline btn-sm')} to="/add-recipe">
      All Products 
  </NavLink>
)}

{user && (
  <NavLink className={({isActive})=>(isActive ? ' btn btn-outline  btn-sm underline text-orange-500 font-bold' : 'btn btn-outline btn-sm')} to="/add-recipe">
    Add Product
  </NavLink>
)}

{user && (
  <NavLink className={({isActive})=>(isActive ? ' btn btn-outline  btn-sm underline text-orange-500 font-bold' : 'btn btn-outline btn-sm')} to="/add-recipe">
    My Products 
  </NavLink>
)}
              {user && (
  <NavLink
    to={`/my-recipes?email=${user.email}`}
    className={({ isActive }) =>
      isActive
        ? 'btn btn-outline btn-sm underline text-orange-500 font-bold'
        : 'btn btn-outline btn-sm'
    }
  >
    My Products
  </NavLink>
)}

{user && (
  <NavLink className={({isActive})=>(isActive ? 'underline text-orange-500 font-bold' : '')} to={`/my-recipes?email=${user.email}`}>
    Cart
</NavLink>)}






          </ul>
        </div>

        <div className="navbar-end space-x-4 items-center flex">
          
  {user ? (
    <img src={user.photoURL} alt="User" className="w-10 h-10 rounded-full" />
  ) : (
    <FaUserXmark size={32} />
  )}

  {user ? (
    <Link to="/" onClick={handleLogOut} className="btn border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white rounded transition duration-300">LogOut</Link>
  ) : (
    <Link to="/auth/login" className="btn border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white rounded transition duration-300">Login</Link>
  )}
</div>

      </div>
    
  );
};

export default Navbar;