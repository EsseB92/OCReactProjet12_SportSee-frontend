import { useEffect, useState } from 'react';

const useFetchData = (userId) => {
    const [data, setData] = useState({
        user: null,
        activity: null,
        averageSessions: null,
        performance: null,
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const baseUrl = `http://localhost:3000/user/`;

    useEffect(() => {
        setLoading(true);

        Promise.all([
            fetch(`${baseUrl}${userId}`),
            fetch(`${baseUrl}${userId}/activity`),
            fetch(`${baseUrl}${userId}/average-sessions`),
            fetch(`${baseUrl}${userId}/performance`),
        ])
            .then((responses) =>
                Promise.all(
                    responses.map((response) => {
                        if (!response.ok) {
                            throw new Error(`Erreur HTTP: ${response.status}`);
                        }
                        return response.json();
                    })
                )
            )
            .then(([user, activity, averageSessions, performance]) => {
                setData({ user, activity, averageSessions, performance });
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [userId]);

    return { data, loading, error };
};

export default useFetchData;
