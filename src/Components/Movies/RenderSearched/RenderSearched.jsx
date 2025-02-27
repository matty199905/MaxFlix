import React, { useEffect, useState } from 'react'
import {  useSelector } from 'react-redux'
import { getDiscoverData, getTvData } from '../../../Axios/apiData'
import MovieCard from '../MovieCard/MovieCard'


const RenderSearched = () => {
    const { value } = useSelector(state => state.searchValue);
    const [resultsData, setResultsData] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        if (!value) {
            setResultsData([]);
            setLoading(false);
            return;
        }

        const searchData = async () => {
            try {
                setLoading(true);
                const maxPages = 100;
        
                const responses = await Promise.all(
                    Array.from({ length: maxPages }, async (_, i) => {
                        try {
                            const data = await getDiscoverData(i + 1);
                            return data?.results || [];
                        } catch (error) {
                            console.error(`Error en la página ${i + 1}:`, error);
                            return [];
                        }
                    })
                ) || await Promise.all( Array.from({ length: maxPages }, async (_, i) => {
                    try {
                        const data = await getTvData(i + 1);
                        return data?.results || [];
                    } catch (error) {
                        console.error(`Error en la página ${i + 1}:`, error);
                        return [];
                    }
                }))
        
                const results = responses.flat().filter(item => item?.title?.toLowerCase().replace(/-/g, '').includes(value.toLowerCase()));
        
                const uniqueResults = results.reduce((acc, item) => {
                    if (!acc.some(movie => movie.id === item.id)) {
                        acc.push(item);
                    }
                    return acc;
                }, []);
        
                setResultsData(uniqueResults);

            } catch (error) {
                console.error("Error al obtener datos:", error);
            } finally {
                setLoading(false);
            }
        };
        
        searchData();

    }, [value]);

    const render = resultsData.map((item) => <MovieCard {...item} key={item?.id} size={'220px'} />)

    if (loading) {return <div>Buscando resultados...</div>};

    if(resultsData.length) {return render}

     return <div>No se han encontrado resultados...</div>;
};

export default RenderSearched;

