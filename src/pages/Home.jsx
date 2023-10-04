import React from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import Header from "../layout/Header";
import VerticalNav from "../components/VerticalNav";
import Analytics from "../components/Analytics";
import Hero from "../components/Hero";
import LoadingSpinner from "../components/LoadingSpinner";

const Home = () => {
  const { userId } = useParams();
  const { data, loading, error } = useFetchData(userId, true);

  return (
    <>
      <VerticalNav />
      <Header userId={userId} />
      <main>
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <section className="error">Erreur : {error.message}</section>
        ) : (
          data.user &&
          data.activity &&
          data.averageSessions &&
          data.performance && (
            <>
              <Hero user={data.user} />

              <Analytics data={data} />
            </>
          )
        )}
      </main>
    </>
  );
};

export default Home;
