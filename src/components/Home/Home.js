import React from 'react';
import Inventories from '../Inventories/Inventories';
import banner from '../images/banner-1.jpg';

const Home = () => {
    return (
        <div className=''>
            <img className='w-100' src={banner} alt="" />
            <Inventories></Inventories>
        </div>
    );
};

export default Home;