import React from 'react';
import notFound from '../images/notfound-1.jpg'

const NotFound = () => {
    return (
        <div className='container text-center'>
            <h2>Page Not Found 404</h2>
            <img className='w-50 p-2' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;