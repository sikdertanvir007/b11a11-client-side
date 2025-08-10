import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';


import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';
import { FaShoppingCart } from "react-icons/fa";
import DarkModeToggle from '../DarkModeToggle';




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
    
      <div className="navbar bg-gradient-to-r from-orange-100 to-red-100 shadow-md p-0 px-3 md:px-8 lg:px-10 fixed top-0 left-0 w-full z-50  ">
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
              <NavLink className={({isActive})=>(isActive ? 'underline text-red-500 font-bold' : '')} to="/">Home</NavLink>
              <NavLink className={({isActive})=>(isActive ? 'underline text-red-500 font-bold' : '')} to="/all-categories">Categories</NavLink>
               {user && (
  <NavLink className={({isActive})=>(isActive ? 'underline text-red-500 font-bold' : '')} to="/all-products">
    All Products 
  </NavLink>
)}
              {user && (
  <NavLink className={({isActive})=>(isActive ? 'underline text-red-500 font-bold' : '')}  to="/add-product">
    Add Product 
  </NavLink>
)}
              {user && (
  <NavLink className={({isActive})=>(isActive ? 'underline text-red-500 font-bold' : '')} to={`/my-products?email=${user.email}`}>
    My Products
</NavLink>)}
 {user && (
  <NavLink className={({isActive})=>(isActive ? 'underline text-red-500 font-bold' : '')}  to={`/cart/${user.email}`}>
     <FaShoppingCart size={20} />
</NavLink>)}

            
             
            </ul>
          </div>
          
          <Link className='flex items-center' to="/">
          
          <img className='w-10 lg:w-15  ' src="/megamerx-logo.png.png" alt="" />
           <p className='font-bold text-xl lg:text-2xl text-red-500 italic'>Mega<span className='text-orange-500 italic'>Merx</span></p>
          </Link>
          
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-8">
            <NavLink  className={({isActive})=>(isActive ? 'btn bg-red-500 rounded-xl  text-white font-bold btn-sm ' : 'btn border border-red-500 text-red-500 font-bold rounded-xl btn-sm ')} to="/">Home</NavLink>
            <NavLink  className={({isActive})=>(isActive ? 'btn bg-red-500 rounded-xl  text-white font-bold btn-sm' : 'btn border border-red-500 text-red-500 font-bold rounded-xl btn-sm ')} to="/all-categories">Categories</NavLink>
            <NavLink  className={({isActive})=>(isActive ? 'btn bg-red-500 rounded-xl  text-white font-bold btn-sm' : 'btn border border-red-500 text-red-500 font-bold rounded-xl btn-sm ')} to="/about-us">About Us</NavLink>
            {user && (
  <NavLink  className={({isActive})=>(isActive ? 'btn bg-red-500 rounded-xl  text-white font-bold btn-sm' : 'btn border border-red-500 text-red-500 font-bold rounded-xl btn-sm ')} to="/all-products">
      All Products 
  </NavLink>
)}

{user && (
<NavLink  className={({isActive})=>(isActive ? 'btn bg-red-500 rounded-xl  text-white font-bold btn-sm' : 'btn border border-red-500 text-red-500 font-bold rounded-xl btn-sm ')} to="/add-product">
    Add Product
  </NavLink>
)}

          {user && (
  <NavLink
    to={`/my-products?email=${user.email}`}
   className={({isActive})=>(isActive ? 'btn bg-red-500 rounded-xl  text-white font-bold btn-sm' : 'btn border border-red-500 text-red-500 font-bold rounded-xl btn-sm  ')}
  >
    My Products
  </NavLink>


)}
{user && (
<NavLink
  to={`/cart/${user.email}`}
  className={({ isActive }) =>
    isActive
      ? 'btn bg-red-500 rounded-xl text-white font-bold btn-sm '
      : 'btn border border-red-500 text-red-500 font-bold rounded-xl btn-sm '
  }
>
  <FaShoppingCart size={20} />
</NavLink>

)}





          </ul>
        </div>

     <div className="navbar-end space-x-4 items-center">
      <DarkModeToggle></DarkModeToggle>
  {user ? (
    <>
      {/* Profile Picture + Dropdown for Small Devices */}
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button">
          <img
            src={user.photoURL}
            alt="User"
            className="w-10 h-10 rounded-full cursor-pointer"
            title={user.displayName}
          />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40"
        >
          <li>
            <button onClick={handleLogOut} className="text-red-500">
              Log Out
            </button>
          </li>
        </ul>
      </div>

  
     
    </>
  ) : (
    <>
      <Link
        to="/auth/login"
        className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white btn btn-xs sm:btn-sm md:btn-md lg:btn-lg "
      >
        Login
      </Link>

     
    </>
  )}
</div>


   
</div>

      
    
  );
};

export default Navbar;