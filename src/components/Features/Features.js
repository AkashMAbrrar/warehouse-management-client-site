import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Features = () => {
    const { featureId } = useParams();
    const [feature, setFeature] = useState();
    useEffect(() => {
        const url = `https://pure-depths-38991.herokuapp.com/inventory/${featureId}`;
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setFeature(data))
    }, [])
    return (
        <div>
            <h2>This is features:{featureId}</h2>
        </div>
    );
};

export default Features;