import React, { useState, useMemo } from 'react';
import {
    Line,
    LineChart,
    ReferenceArea,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

const day = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

const createSessionData = (sessions) => {
    return sessions.flatMap((session, index) => {
        const sessionData = {
            index: index + 1,
            day: day[index],
            duration: session.sessionLength,
        };

        const extraSession = {
            index: index + (index === 0 ? 0 : 2),
            day: '',
            duration: session.sessionLength,
        };

        if (index === 0 || sessions.length - 1) {
            return [sessionData, extraSession];
        }

        return sessionData;
    });
};

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length && payload[0].payload.day !== '') {
        return (
            <div className="custom-tooltip">
                <p className="duration">{`${payload[0].value} min`}</p>
            </div>
        );
    }
    return null;
};

const CustomDot = ({ cx, cy, value }) => {
    if (cx !== 0 && cx !== 260) {
        return (
            <svg
                x={cx - 8}
                y={cy - 8}
                width={16}
                height={16}
                viewBox="0 0 100 100"
            >
                <circle cx={50} cy={50} r="25" fill="white" opacity={1} />
                <circle cx={50} cy={50} r="50" fill="white" opacity={0.5} />
            </svg>
        );
    }
    return null;
};

const LineGraph = ({ title, sessions }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const data = useMemo(
        () => createSessionData(sessions.data.sessions),
        [sessions]
    );

    return (
        <article className="sessions">
            <h2>{title}</h2>

            <LineChart
                width={260}
                height={260}
                data={data}
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            >
                <XAxis
                    dataKey="day"
                    axisLine={false}
                    tickLine={false}
                    tickSize={0}
                    stroke="white"
                />
                <YAxis
                    hide
                    domain={['auto', 'dataMax+50']}
                    padding={{ bottom: 20 }}
                />
                <Tooltip
                    cursor={false}
                    content={({ active, payload }) => {
                        setActiveIndex(
                            active ? payload[0].payload.index : null
                        );
                        return (
                            <CustomTooltip active={active} payload={payload} />
                        );
                    }}
                />
                <Line
                    type="natural"
                    strokeLinecap="round"
                    dataKey="duration"
                    dot={false}
                    activeDot={<CustomDot />}
                    stroke="#ffffff"
                    strokeWidth={2}
                />
                {activeIndex !== null && (
                    <ReferenceArea
                        ifOverflow="visible"
                        x1={activeIndex}
                        x2={8}
                        y1={-40}
                        y2={260}
                        fill="black"
                        fillOpacity={0.1}
                    />
                )}
            </LineChart>
        </article>
    );
};

export default React.memo(LineGraph);
