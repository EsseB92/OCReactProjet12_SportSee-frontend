import React from 'react';
import apple from '../assets/apple.svg';
import flame from '../assets/flame.svg';
import cheeseburger from '../assets/cheeseburger.svg';
import chicken from '../assets/chicken.svg';

const nutrientData = {
    calorie: {
        icon: flame,
        unit: 'kCal',
        color: '#FF0000',
        text: 'Calories',
    },
    protein: {
        icon: chicken,
        unit: 'g',
        color: '#4AB8FF',
        text: 'Protéines',
    },
    carbohydrate: {
        icon: apple,
        unit: 'g',
        color: '#FDCC0C',
        text: 'Glucides',
    },
    lipid: {
        icon: cheeseburger,
        unit: 'g',
        color: '#FD5181',
        text: 'Lipides',
    },
};

const Card = ({ nutrient, value }) => {
    const nutrientType = nutrient.slice(0, -5);
    const { icon, color, text, unit } = nutrientData[nutrientType];

    const rgbColor = `${parseInt(color.slice(1, 3), 16)}, ${parseInt(
        color.slice(3, 5),
        16
    )}, ${parseInt(color.slice(5, 7), 16)}`;

    return (
        <article className={`nutrient`}>
            <div
                style={{
                    backgroundColor: `rgba(${rgbColor}, 0.07)`,
                }}
            >
                <img src={icon} alt="" />
            </div>
            <p>
                <span>
                    {value}
                    {unit}
                </span>
                {text}
            </p>
        </article>
    );
};

export default Card;
