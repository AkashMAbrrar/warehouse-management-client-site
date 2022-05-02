import React from 'react';
import Inventories from '../Inventories/Inventories';
import banner from '../images/banner-1.jpg';
import Managment from './Managment/Managment';

const Home = () => {
    return (
        <div className='bg-dark text-white'>
            <img className='w-100' src={banner} alt="" />
            <Inventories></Inventories>
            <Managment></Managment>
        </div>
    );
};

export default Home;