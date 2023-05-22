import React from 'react';

const Hero = ({ user }) => {
    return (
        <section className="hero">
            <h1>
                Bonjour <span>{user.data.userInfos.firstName}</span>
            </h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </section>
    );
};

export default Hero;
