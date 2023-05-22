import React from 'react';
import { useParams } from 'react-router-dom';
import BarGraph from '../components/BarGraph';
import useFetchData from '../hooks/useFetchData';
import LineGraph from '../components/LineGraph';
import RadarGraph from '../components/RadarGraph';
import PieGraph from '../components/PieGraph';
import Card from '../components/Card';
import Header from '../layout/Header';
import VerticalNav from '../components/VerticalNav';
import Analytics from '../components/Analytics';

const Home = () => {
    const { userId } = useParams();
    const { data, loading, error } = useFetchData(userId);

    return (
        <>
            <VerticalNav />
            <Header userId={userId} />

            {loading ? (
                <section className="loading">Loading...</section>
            ) : error ? (
                <section className="error">Erreur : {error.message}</section>
            ) : (
                data.user &&
                data.activity &&
                data.averageSessions &&
                data.performance && (
                    <main>
                        <section className="hero">
                            <h1>
                                Bonjour{' '}
                                <span>
                                    {data.user.data.userInfos.firstName}
                                </span>
                            </h1>
                            <p>
                                Félicitation ! Vous avez explosé vos objectifs
                                hier 👏
                            </p>
                        </section>

                        <Analytics data={data} />
                    </main>
                )
            )}
            {/* 
                {loading && <section className="loading">Loading...</section>}

                {error && (
                    <section className="error">
                        Erreur : {error.message}
                    </section>
                )}

                {!loading &&
                    !error &&
                    data.user &&
                    data.activity &&
                    data.averageSessions &&
                    data.performance && (
                        <>
                            <section className="hero">
                                <h1>
                                    Bonjour{' '}
                                    <span>
                                        {data.user.data.userInfos.firstName}
                                    </span>
                                </h1>
                                <p>
                                    Félicitation ! Vous avez explosé vos
                                    objectifs hier 👏
                                </p>
                            </section>

                            <section className="analytics">
                                <div className="stats">
                                    <BarGraph
                                        title="Activité quotidienne"
                                        legends={[
                                            'Poids (kg)',
                                            'Calories brûlées (kCal)',
                                        ]}
                                        activities={data.activity}
                                    />

                                    <LineGraph
                                        title="Durée moyenne des sessions"
                                        sessions={data.averageSessions}
                                    />

                                    <RadarGraph
                                        performances={data.performance}
                                    />

                                    <PieGraph score={data.user} />
                                </div>
                                <div className="nutrients">
                                    {Object.entries(data.user.data.keyData).map(
                                        ([key, value]) => (
                                            <Card
                                                key={key}
                                                nutrient={key}
                                                value={value}
                                            />
                                        )
                                    )}
                                </div>
                            </section>
                        </>
                    )} */}
        </>
    );
};

export default Home;
