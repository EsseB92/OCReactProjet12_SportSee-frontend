import React from 'react';
import { Cell, PieChart, Pie, Label } from 'recharts';

const PieGraph = ({ score }) => {
    const data = score.data.score
        ? [
              {
                  score: score.data.score,
              },
              {
                  score: 1 - score.data.score,
              },
          ]
        : [
              {
                  score: score.data.todayScore,
              },
              {
                  score: 1 - score.data.todayScore,
              },
          ];

    const noneData = [{ value: 100 }];

    const COLORS = ['#FF0000', '#FBFBFB'];

    return (
        <article className="score">
            <h2>Score</h2>
            <p>
                <span>{data[0].score * 100}%</span>
                de votre objectif
            </p>
            <PieChart width={260} height={260}>
                <Pie
                    data={noneData}
                    dataKey="value"
                    outerRadius={75}
                    stroke=""
                    fill="white"
                ></Pie>
                <Pie
                    data={data}
                    startAngle={180}
                    endAngle={-180}
                    innerRadius={75}
                    outerRadius={90}
                    fill="#FBFBFB"
                    stroke="#FBFBFB"
                    paddingAngle={0}
                    dataKey="score"
                    cornerRadius={25}
                    onClick={null}
                >
                    {data.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                        />
                    ))}
                </Pie>
            </PieChart>
        </article>
    );
};

export default PieGraph;
