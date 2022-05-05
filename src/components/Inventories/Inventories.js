import React, { useEffect, useState } from 'react';
import './Inventories.css';
import Inventory from '../Home/Inventory/Inventory';

const Inventories = () => {
    const [inventories, setInventory] = useState([]);

    useEffect(() => {
        fetch('https://pure-depths-38991.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [])
    return (
        <div className='container'>
            <h1 className='text-white text-center m-5 p-2'>Our Inventories All We Have In The Stocks</h1>
            <div className="inventories-container">
                {
                    inventories.map(inventory => <Inventory
                        key={inventory._id}
                        inventory={inventory}
                    ></Inventory>)
                }
            </div>
        </div>
    );
};

export default Inventories;