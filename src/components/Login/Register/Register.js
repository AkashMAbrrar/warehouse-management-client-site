import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase_init';
import SocialMedia from '../SocialMedia/SocialMedia';
import { async } from '@firebase/util';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login')
    }

    if (loading || updating) {
        <Loading></Loading>
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        alert("Profile Updated");
        navigate('/home');
    }

    return (
        <div className='register-form'>
            <h2 className='text-center p-3'>Please Register Here</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' />
                <input type="email" name="email" id="" placeholder='Enter Email' required />
                <input type="password" name="password" id="" placeholder='Enter Your Password' required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms and conditions" id="terms" />
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Terms & Conditions</label>
                <input
                    disabled={!agree}
                    className='w-50 mx-auto btn btn-dark mt-2'
                    type="submit"
                    value="Register" />
            </form>
            <p>Already Have An Account <Link to='/login' className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
            <SocialMedia></SocialMedia>
        </div>
    );
};

export default Register;