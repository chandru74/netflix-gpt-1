import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true); 

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img className='w-fit' src="https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="banner-image" />
            </div>

            <form className='p-8 relative w-3/12 top-[30vh] left-[36vw] bg-black text-white bg-opacity-80'>
                <h1 className='tex-bold text-3xl'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input type="text" placeholder='Fullname' className='my-4 p-2 w-full bg-gray-800'/>}
                <input type="text" placeholder='Email or Phone' className='my-4 p-2 w-full bg-gray-800'/>
                <input type="password" placeholder='Password' className='my-4 p-2 w-full bg-gray-800' />
                <button className='bg-red-700 my-4 p-2 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>

                <p className='cursor-pointer' onClick={toggleSignInForm}>
                {isSignInForm ? "New to Netflix? Sign up now" : "Already registered? Sign In"}
                    </p>
            </form>
        </div>
    );
}

export default Login;
