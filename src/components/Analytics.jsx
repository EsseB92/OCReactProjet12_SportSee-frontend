import React from 'react';
import BarGraph from '../components/BarGraph';
import LineGraph from '../components/LineGraph';
import RadarGraph from '../components/RadarGraph';
import PieGraph from '../components/PieGraph';
import Card from '../components/Card';

const Analytics = ({ data }) => {
    return (
        <section className="analytics">
            <div className="stats">
                <BarGraph
                    title="Activité quotidienne"
                    legends={['Poids (kg)', 'Calories brûlées (kCal)']}
                    activities={data.activity}
                />

                <LineGraph
                    title="Durée moyenne des sessions"
                    sessions={data.averageSessions}
                />

                <RadarGraph performances={data.performance} />

                <PieGraph score={data.user} />
            </div>
            <div className="nutrients">
                {Object.entries(data.user.data.keyData).map(([key, value]) => (
                    <Card key={key} nutrient={key} value={value} />
                ))}
            </div>
        </section>
    );
};

export default Analytics;
