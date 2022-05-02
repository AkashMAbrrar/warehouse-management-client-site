import React from 'react';
import './Delivery.css';
import deliver from '../../images/stock-1.jpg'

const Delivery = () => {
    return (
        <div>
            <h1 className='text-center m-5'>This is delivery service</h1>
            <div className='container delivery-container'>
                <div>
                    <img className='rounded w-100' src={deliver} alt="" />
                </div>
                <div>
                    <p>The term, delivery system, describes the method of supply of a specialty-cut product. Maximize assembly efficiency, repeatability, and return on piece price by selecting the delivery system best suited for your application and assembly process.we are providing our product world widly.there are many way to send these product from this warehouse.ship,cargo,biman etc.</p>
                </div>
            </div>
        </div>
    );
};

export default Delivery;