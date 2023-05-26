import { useEffect, useState } from 'react';

const useFetchData = (userId, useMock = false) => {
    const [data, setData] = useState({
        user: null,
        activity: null,
        averageSessions: null,
        performance: null,
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const baseUrl = useMock
        ? `${process.env.PUBLIC_URL}/_mock/user/`
        : `http://localhost:3000/user/`;
    const extensionUrl = useMock ? '.json' : '';

    useEffect(() => {
        setLoading(true);

        Promise.all([
            fetch(`${baseUrl}${userId}${extensionUrl}`),
            fetch(`${baseUrl}${userId}/activity${extensionUrl}`),
            fetch(`${baseUrl}${userId}/average-sessions${extensionUrl}`),
            fetch(`${baseUrl}${userId}/performance${extensionUrl}`),
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
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            });
    }, [baseUrl, extensionUrl, userId]);

    return { data, loading, error };
};

export default useFetchData;
