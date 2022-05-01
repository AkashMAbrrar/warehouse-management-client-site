import React from 'react';

const Inventory = ({ inventory }) => {
    const { name, img, description, suplierName, price } = inventory;
    return (
        <div>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price:{price}</p>
            <p>Suplier-Name:{suplierName}</p>
            <p><small>{description}</small></p>
            <button>Update</button>
        </div>
    );
};

export default Inventory;