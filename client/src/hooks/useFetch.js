import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(()=> {
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await axios.get(`https://booking-backend-4xe3.onrender.com${url}`)
                setData(res.data)
            } catch (error) {
                setError(error)
            }
            setLoading(false)
        }
        fetchData()
    }, [url])

    const reFetchData = async () => {
        try {
            setLoading(true);
            const res = await axios.get(url)
            setData(res.data)
        } catch (error) {
            setError(error)
        }
        setLoading(false)
    }
    
    return { data, loading, error, reFetchData }
}

export default useFetch
