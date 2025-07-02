import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
             <div className='px-3 md:px-15 lg:px-25 xl:px-30'>
             <div className='min-h-screen flex flex-col items-center justify-center text-center gap-y-6 '>
                <img className='w-100 rounded-xl shadow-xl' src="https://cdn.dribbble.com/userupload/6038198/file/original-827b370e4e255882d5f00013565a2cc6.png?resize=1024x768&vertical=center" alt="" />
                <p className='text-red-500 font-bold text-3xl'>404- Page Not Found</p>
                <p className='text-xl'>Oops! The page you're looking for doesn't exist</p>
                <Link to="/"><button  className='btn bg-green-500 hover:bg-green-700 text-white '>Go Back Home</button> </Link>
            </div>
        </div>
        </div>
    );
};

export default ErrorPage;