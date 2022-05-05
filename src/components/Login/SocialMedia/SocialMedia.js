import React from 'react';
import google from '../../images/google-1.png';
import github from '../../images/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase_init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialMedia = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorOption;

    if (loading || loading1) {
        <Loading></Loading>
    }
    if (error || error1) {
        errorOption = <p className='text-danger'>Error: {error?.message}{error1?.message}</p>
    }
    if (user || user1) {
        navigate("/home");
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                <p className='mt-2 px-2'>Or</p>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>
            {errorOption}
            <div className=''>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info w-50 mb-5 d-block mx-auto'>
                    <img style={{ width: '35px' }} src={google} alt="" />
                    <span className='px-2'>Google SignIn</span>
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-info w-50 mb-5 d-block mx-auto'>
                    <img style={{ width: '35px' }} src={github} alt="" />
                    <span className='px-2'>Git Hub SigniIn</span>
                </button>
            </div>
        </div>
    );
};

export default SocialMedia;