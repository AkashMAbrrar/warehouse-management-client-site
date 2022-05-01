import React, { useEffect, useState } from 'react';
import Inventory from '../Home/Inventory/Inventory';

const Inventories = () => {
    const [inventories, setInventory] = useState([]);

    useEffect(() => {
        fetch('infoDb.json')
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [])
    return (
        <div>
            <h1>Our Inventories All We Have In The Stocks</h1>
            {
                inventories.map(inventory => <Inventory
                    key={inventory.id}
                    inventory={inventory}
                ></Inventory>)
            }
        </div>
    );
};

export default Inventories;