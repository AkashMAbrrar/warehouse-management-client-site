import React from 'react';
import { useParams } from 'react-router-dom';

const Features = () => {
    const { featureId } = useParams();
    return (
        <div>
            <h2>This is features:{featureId}</h2>
        </div>
    );
};

export default Features;