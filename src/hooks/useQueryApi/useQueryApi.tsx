import { useEffect, useState } from 'react';
import { Product } from '../../types';

export type QueryApiResponse = {
    data?: Product[];
    error?: string;
    loading: Boolean;
};

export const useQueryApi = (url: string): QueryApiResponse => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | undefined>(undefined);
    const [data, setData] = useState<Product[] | undefined>(undefined);

    const queryData = async () => {
        const response = await fetch(url);
        const response_data: Product[] = await response.json();
        setData(response_data);
    };

    useEffect(() => {
        setLoading(true);
        queryData().catch((error) => {
            setError(error.message ? error.message : "Error querying API.");
        })
        setLoading(false);
    }, []);

    return {
        data,
        error,
        loading
    };
};