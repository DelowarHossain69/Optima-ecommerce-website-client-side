import React from 'react';
import {useSignInWithFacebook, useSignInWithGoogle} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../shared/Loading/Loading';
import auth from './../../../firebase.init';
import useToken from './../../../hooks/useToken';

const SocialMediaSignin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);
    const [token] = useToken(googleUser || facebookUser);
    const navigate = useNavigate();
    const location = useLocation();
    const form = location?.state?.form?.pathname || '/';


    if(token){
        navigate(form, {replace : true});
    }

    if(googleLoading || facebookLoading){
        return <Loading />
    }

    return (
        <div className='flex justify-center'>
            <button className='btn mr-3 bg-[#E34133]' onClick={()=> signInWithGoogle()}>
                <img src="https://i.ibb.co/5xfQpxz/google.png" className='w-5 mr-2' alt="" />
                Google
            </button>
            <button className='btn bg-[#4064AC]' onClick={()=> signInWithFacebook()}>
                <img src="https://i.ibb.co/JyFbkD2/facebook.png" className='w-5 mr-1' alt="" />
                Facebook
            </button>
        </div>
    );
};

export default SocialMediaSignin;