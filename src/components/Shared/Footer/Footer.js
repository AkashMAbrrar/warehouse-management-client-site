import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='bg-dark text-white text-center p-5 '>
            <hr />
            <p><small>Copyright Reservation &copy; {year}</small></p>
        </footer>
    );
};

export default Footer;