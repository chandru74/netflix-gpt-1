import React from 'react';
import Header from './Header';

const Login = () => {
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img className='w-fit' src="https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="banner-image" />
            </div>

            <form className='p-8 relative w-3/12 top-[30vh] left-[40vw] bg-black text-white bg-opacity-80'>
                <input type="text" placeholder='Email or Phone' className='my-4 p-2 w-full bg-gray-800'/>
                <input type="password" placeholder='Password' className='my-4 p-2 w-full bg-gray-800' />
                <button className='bg-red-700 my-4 p-2 w-full rounded-lg'>Submit</button>

                <p>New to Netflix? Sign up now</p>
            </form>
        </div>
    );
}

export default Login;
