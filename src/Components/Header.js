import { signOut } from 'firebase/auth';
import React from 'react';
import { auth } from '../Utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(store => store.user);
    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/")
          }).catch((error) => {
            // An error happened.
          });
    }
    return (
        <div className='w-full absolute bg-gradient-to-b from-black z-50 flex justify-between'>
            <div>
                <img className='w-40 mx-16 my-5 ' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
            </div>
           {user && <div className='w-56 m-4 p-4 flex'>
                <img src="https://occ-0-1492-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXYofKdCJceEP7pdxcEZ9wt80GsxEyXIbnG_QM8znksNz3JexvRbDLr0_AcNKr2SJtT-MLr1eCOA-e7xlDHsx4Jmmsi5HL8.png?r=1d4" alt="profile icon" />
                <button className='mx-2 font-bold text-white' onClick={handleSignOut}>(Sign out)</button>
            </div>}
        
        </div>
    );
}

export default Header;
