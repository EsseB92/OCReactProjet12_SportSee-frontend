import React from 'react';
import Activity from './Activity';
import yoga from '../assets/yoga.png';
import swimming from '../assets/swimming.png';
import cycling from '../assets/cycling.png';
import workout from '../assets/workout.png';

const VerticalNav = () => {
    return (
        <div className="vertical-nav">
            <Activity image={yoga} />
            <Activity image={swimming} />
            <Activity image={cycling} />
            <Activity image={workout} />

            <p>Copyright, SportSee 2020</p>
        </div>
    );
};

export default VerticalNav;
