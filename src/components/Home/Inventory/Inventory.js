import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Inventory.css';

const Inventory = ({ inventory }) => {
    const { _id, name, img, description, suplierName, price, quantity } = inventory;
    const navigate = useNavigate();
    const directionToFeature = id => {
        navigate(`/feature/${_id}`);
    }
    return (
        <div className='inventory'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price:{price}</p>
            <p>Quantity:{quantity}</p>
            <p>Suplier-Name:{suplierName}</p>
            <p><small>{description}</small></p>
            <Link to={`/feature/${_id}`}>
                <button onClick={() => directionToFeature(_id)} className='btn btn-info'>Update</button>
            </Link>
        </div>
    );
};

export default Inventory;