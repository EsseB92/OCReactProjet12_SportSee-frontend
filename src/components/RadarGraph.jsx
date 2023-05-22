import React from 'react';
import {
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis,
    Radar,
    RadarChart,
} from 'recharts';

// prettier-ignore
const translation = {
    'energy': 'Energie',
    'cardio': 'Cardio',
    'endurance': 'Endurance',
    'strength': 'Force',
    'speed': 'Vitesse',
    'intensity': 'Intensité',
};

const sortPriority = [
    'Intensité',
    'Vitesse',
    'Force',
    'Endurance',
    'Energie',
    'Cardio',
];

const RadarGraph = ({ performances }) => {
    const data = performances.data.data.map((performance) => {
        const performanceData = {
            kind: translation[performances.data.kind[performance.kind]],
            value: performance.value,
        };
        return performanceData;
    });

    data.sort(
        (a, b) => sortPriority.indexOf(a.kind) - sortPriority.indexOf(b.kind)
    );

    return (
        <article
            className="performance"
            style={{
                background: '#282D30',
                width: 'fit-content',
                borderRadius: '5px',
            }}
        >
            <h2 style={{ display: 'none' }}>Performance</h2>
            <RadarChart
                outerRadius="80%"
                innerRadius="10%"
                width={260}
                height={260}
                data={data}
                padding={'5px'}
            >
                <PolarGrid gridType="polygon" radialLines={false} />
                <PolarAngleAxis
                    dataKey="kind"
                    tick={{ fill: 'white', fontSize: 12 }}
                />
                <PolarRadiusAxis tick={false} axisLine={false} />
                <Radar dataKey="value" fill="#E60000" fillOpacity={0.7} />
            </RadarChart>
        </article>
    );
};

export default RadarGraph;
