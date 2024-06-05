import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../Utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { LOGO, PROFILE_AVATAR } from "../Utils/constants";
import { toggleGPTSearch } from "../Utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGPTClick = () => {
    dispatch(toggleGPTSearch());
  };

  return (
    <div className="w-full absolute bg-gradient-to-b from-black z-50 flex justify-between">
      <div>
        <img className="w-32 md:w-40 md:mx-16 my-4" src={LOGO} alt="logo" />
      </div>

      {user && (
        <div className="m-4 md:p-4 flex">
          <button
            className="md:px-4 bg-red-800  md:mx-2  text-white rounded-lg md:w-36 w-24 my-2 md:my-0"
            onClick={handleGPTClick}
          >
            {showGPTSearch ? "Home" : "GPT Search"}
          </button>
          <img
            className="hidden md:block"
            src={PROFILE_AVATAR}
            alt="profile icon"
          />
          <button
            className="mx-2 font-bold text-white w-20"
            onClick={handleSignOut}
          >
            (Sign out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
