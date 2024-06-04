import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../Utils/Validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../Utils/userSlice';
import { BACKGROUND_IMAGE } from '../Utils/constants';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }

    const handleSignIn = () => {
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);
        if (message) return;

        if (!isSignInForm) {

            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value
                    }).then(() => {
                        const { uid, email, displayName } = user;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
                    }).catch((error) => {
                        // An error occurred
                        // ...
                    });

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage);
                });
        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(error)
                    setErrorMessage(errorMessage);
                });
        }
    }

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img className='h-screen md:w-screen object-cover ' src={BACKGROUND_IMAGE} alt="banner-image" />
            </div>

            <form onSubmit={(e) => e.preventDefault()} className='p-8 relative w-3/4 md:w-3/12 top-[15vh] left-[10vw] md:top-[30vh] md:left-[36vw] bg-black text-white bg-opacity-80'>
                <h1 className='tex-bold text-3xl'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input ref={name} type="text" placeholder='Fullname' className='my-4 p-2 w-full bg-gray-800' />}
                <input ref={email} type="text" placeholder='Email or Phone' className='my-4 p-2 w-full bg-gray-800' />
                <input ref={password} type="password" placeholder='Password' className='my-4 p-2 w-full bg-gray-800' />

                <p className='font-bold text-red-600 text-xl'>{errorMessage}</p>
                <button className='bg-red-700 my-4 p-2 w-full rounded-lg cursor-pointer'
                    onClick={handleSignIn}>{isSignInForm ? "Sign In" : "Sign Up"}</button>

                <p className='cursor-pointer' onClick={toggleSignInForm}>
                    {isSignInForm ? "New to Netflix? Sign up now" : "Already registered? Sign In"}
                </p>
            </form>
        </div>
    );
}

export default Login;
