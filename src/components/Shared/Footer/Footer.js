import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='bg-dark text-white text-center p-5 footer-container'>
            <hr />
            <p><small>Copyright Reservation &copy; {year}</small></p>
        </footer>
    );
};

export default Footer;