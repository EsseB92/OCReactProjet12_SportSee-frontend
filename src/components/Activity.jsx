import React from 'react';

const Activity = ({ image }) => {
    return (
        <div className="nav-activity">
            <img src={image} alt="activité" />
        </div>
    );
};

export default Activity;
