import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='bg-dark text-white text-center p-5 footer-container'>
            <hr />
            <p><small>Copyright Reservation &copy; {year}</small></p>
            <div className='text-container container'>
                <div>
                    <small>This is a huge warehoue production and we deliver our product all over the world.there is many way to contribution our inventory.specialy we providing sports equiepments and gadgets</small>
                </div>
                <div>
                    <small>This website is not for sell and buying this is for import and expots inventories.this is not a commerceial website.we providing our products all over the world</small>
                </div>
                <div>
                    <small>This website is not for sell and buying this is for import and expots inventories.this is not a commerceial website.we providing our products all over the world</small>
                </div>
            </div>
        </footer>
    );
};

export default Footer;