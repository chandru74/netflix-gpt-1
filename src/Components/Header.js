import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { auth } from '../Utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice';
import { LOGO, PROFILE_AVATAR } from '../Utils/constants';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/")
        }).catch((error) => {
            // An error happened.
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
                navigate("/browse")
            } else {
                // User is signed out
                dispatch(removeUser());
                navigate("/");
            }
        });
        return () => unsubscribe();
    }, [])
    return (
        <div className='w-full absolute bg-gradient-to-b from-black z-50 flex justify-between'>
            <div>
                <img className='w-40 mx-16 my-5 ' src={LOGO} alt="logo" />
            </div>
            {user && <div className='w-56 m-4 p-4 flex'>
                <img src={PROFILE_AVATAR} alt="profile icon" />
                <button className='mx-2 font-bold text-white' onClick={handleSignOut}>(Sign out)</button>
            </div>}

        </div>
    );
}

export default Header;
