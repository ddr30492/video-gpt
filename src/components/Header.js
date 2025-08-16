import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";


const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate('/')
        }).catch((error) => {
            navigate('/error')
        });
    }
    return (
        <>
            <div className='absolute px-8 py-3 bg-gradient-to-b from-black z-20'>
                <img className='w-44' src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Logo" />
            </div>
            {user && 
            <div className='absolute p-3 bg-gradient-to-b from-black right-0 top-4'>
                <a href='javascript:void(0)' onClick={handleSignOut} className='bg-red-500 py-3 px-4 text-white rounded-md hover:bg-red-600'>Sign Out</a>
            </div>
            }
        </>
    )
}

export default Header