import React from 'react';
import manage from '../../images/contribution-1.jpg';
import './Management.css';

const Managment = () => {
    return (
        <div className='container m-5 manager-conainer'>
            <div>
                <p>Product Management has such a broad definition and set of responsibilities within a company that it can be difficult to assess which activities are truly delivering value. It can also be difficult to determine how to measure product management since their actions may not directly affect the core business metrics of revenue, costs and profits. This article presents a high level means of assessing whether your product management team is delivering all of the value it could, some reasons why it may not be, and some suggested steps to take towards maximizing your team’s contribution.</p>
            </div>
            <div>
                <img className='rounded' src={manage} alt="" />
            </div>
        </div>
    );
};

export default Managment;