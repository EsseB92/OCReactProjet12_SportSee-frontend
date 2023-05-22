import React, { useMemo } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="kilogram">{`${payload[0].value}kg`}</p>
                <p className="calories">{`${payload[1].value}kCal`}</p>
            </div>
        );
    }
    return null;
};

const BarGraph = ({ title, legends, activities }) => {
    const data = useMemo(
        () =>
            activities.data.sessions.map((activity, index) => ({
                day: index + 1,
                kilogram: activity.kilogram,
                calories: activity.calories,
            })),
        [activities]
    );

    return (
        <article className="activity">
            <header>
                <h2>{title}</h2>
                <div className="legend">
                    <span>{legends[0]}</span>
                    <span>{legends[1]}</span>
                </div>
            </header>
            <ResponsiveContainer>
                <BarChart
                    data={data}
                    barSize={7}
                    barGap={8}
                    margin={{
                        top: 40,
                        right: 10,
                        bottom: 20,
                        left: 20,
                    }}
                >
                    <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="#DEDEDE"
                        vertical={false}
                    />
                    <XAxis
                        dataKey="day"
                        scale="point"
                        axisLine={true}
                        tickLine={false}
                    />
                    <YAxis
                        dataKey="kilogram"
                        yAxisId="kilogram"
                        width={60}
                        height={0}
                        orientation="right"
                        type="number"
                        domain={['dataMin-1', 'dataMax+1']}
                        allowDecimals={false}
                        axisLine={false}
                        tickLine={false}
                        dx={40}
                    />
                    <YAxis
                        hide={true}
                        dataKey="calories"
                        yAxisId="calories"
                        domain={[0, 'dataMax+50']}
                    />
                    <Tooltip position={{ y: 30 }} content={<CustomTooltip />} />
                    <Bar
                        dataKey="kilogram"
                        yAxisId="kilogram"
                        fill="#282D30"
                        radius={[3.5, 3.5, 0, 0]}
                    />
                    <Bar
                        dataKey="calories"
                        yAxisId="calories"
                        fill="#E60000"
                        radius={[3.5, 3.5, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </article>
    );
};

export default BarGraph;
