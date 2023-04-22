import React from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signOut,
  signInWithPopup,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/bazaarSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.bazaar.userInfo);

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        dispatch(
          addUser({
            _id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );
        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth).then(() => {
      toast.success("Log Out Successfully");
      dispatch(removeUser());
    });
  };

  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 py-20">
      <div className="w-full flex flex-col my-20 items-center justify-center gap-6">
        {!userInfo ? (
          <div
            onClick={handleGoogleLogin}
            className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300"
          >
            <img
              className="w-8"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png"
              alt="google"
            />
            <span className="text-sm text-gray-900">Sign in with Google</span>
          </div>
        ) : (
          <button
            onClick={handleSignOut}
            className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-900 duration-300"
          >
            Sign Out
          </button>
        )}
      </div>

      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default Login;
