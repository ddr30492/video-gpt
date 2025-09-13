import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';


const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const handleSignOut = () => {
        signOut(auth).then(() => {})
        .catch((error) => {
            navigate('/error')
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const {uid, email, displayName} = user;
                dispatch(addUser({uid: uid, email: email, displayName: displayName}));
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });
        
        // unsubscribe when component unmount
        return () => unsubscribe();
    },[])

    return (
        <>
            <div className='absolute px-8 py-3 bg-gradient-to-b from-black z-20'>
                <img className='w-44' src={LOGO} alt="Logo" />
            </div>
            {user && 
            <div className='absolute p-3 from-black right-0 top-4 z-20'>
                <a href='javascript:void(0)' onClick={handleSignOut} className='bg-red-500 py-3 px-4 text-white rounded-md hover:bg-red-600'>Sign Out</a>
            </div>
            }
        </>
    )
}

export default Header