import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidation } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_LOGO } from '../utils/constants';


export const Login = () => {
    const dispatch = useDispatch();
    const emailRef = useRef(null);
    const nameRef = useRef(null);
    const passwordRef = useRef(null);
    const [isSignInText, setIsSignInText] = useState('Sign In');
    const [error, setError] = useState('');

    const handClick = () => {
        setIsSignInText(!isSignInText);
    }

    const handleSignin = (e) => {
        e.preventDefault();
        const message = checkValidation(emailRef.current.value, passwordRef.current.value);
        setError(message);

        if(message) return;

        //sign in and signup logic
        if(!isSignInText){
            //signup logic
            createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: nameRef.current.value, 
                }).then(() => {
                    const {uid, email, displayName} = auth.currentUser;
                    dispatch(addUser({uid: uid, email: email, displayName: displayName}));
                }).catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setError(errorCode + '-' + errorMessage);
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorCode + '-' + errorMessage);
            })

        }else{
            //signin logic
            signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorCode + '-' + errorMessage);
            });
        }
    }

    return (
        <div>
            <Header />
            <div className="relative w-full h-screen ">
                {/* Background overlay */}
                <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

                {/* Background image */}
                <img src={BG_LOGO} alt='Bgimg' className="w-full h-full object-cover"
                />

                {/* Form content */}
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-20">
                    <div className="bg-black bg-opacity-75 text-white p-10 rounded-md w-full max-w-md">
                        <h2 className="text-3xl font-bold mb-6">{isSignInText ? 'Sign in' : 'Sign up'}</h2>
                        <form className="flex flex-col gap-4">
                            {!isSignInText && <input
                                ref={nameRef}
                                type="text"
                                placeholder="Full name"
                                className="bg-[#333] text-white px-4 py-3 rounded focus:outline-none"
                            />}
                            <input
                                ref={emailRef}
                                type="email"
                                placeholder="Email or mobile number"
                                className="bg-[#333] text-white px-4 py-3 rounded focus:outline-none"
                            />
                            <input 
                                ref={passwordRef}
                                type="password"
                                placeholder="Password"
                                className="bg-[#333] text-white px-4 py-3 rounded focus:outline-none"
                            />
                            <span className='text-red-600'>{error}</span>
                            <button
                                type="submit"
                                className="bg-[#e50914] hover:bg-[#f6121d] py-3 rounded text-white font-semibold"
                                onClick={handleSignin}
                            >
                                {isSignInText ? 'Sign in' : 'Sign up'}
                            </button>

                            <div className="flex justify-between items-center text-sm text-gray-400 mt-2">
                                <label className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    Remember me
                                </label>
                                <a href="#" className="hover:underline">
                                    Forgot password?
                                </a>
                            </div>
                        </form>

                        <p className="text-gray-500 text-sm mt-6">
                            New to Netflix?{' '}
                            <a href="#" onClick={handClick} className="text-white hover:underline font-medium">
                                {isSignInText ? 'Sign up now' : 'Sign in now'}
                            </a>
                        </p>

                        <p className="text-xs text-gray-500 mt-4">
                            This page is protected by Google reCAPTCHA to ensure you're not a bot.{' '}
                            <a href="#" className="text-blue-500 hover:underline">
                                Learn more.
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
