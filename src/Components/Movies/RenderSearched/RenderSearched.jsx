import React, { useEffect, useState } from 'react'
import {  useSelector } from 'react-redux'
import { getDiscoverData, getTvData } from '../../../Axios/apiData'
import MovieCard from '../MovieCard/MovieCard'
import Loader from '../../UI/Loader/Loader';


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
                        const page = i + 1;
                
                        try {
                            const [movieData, tvData] = await Promise.all([
                                getDiscoverData(page).catch(error => {
                                    console.log(`Fallo en películas`, error);
                                    return { results: [] };
                                }),
                                getTvData(page).catch(error => {
                                    console.log(`Fallo en series`, error);
                                    return { results: [] };
                                }),
                            ]);
                
                            return [
                                ...(movieData?.results || []),
                                ...(tvData?.results || [])
                            ];
                        } catch (error) {
                            console.error("Error al encontrar series y peliculas", error);
                            return [];
                        }
                    })
                );
 
                const filteredResults = responses.flat().filter(item => {
                    const titleOrName = item?.title || item?.name;
                    return titleOrName.toLowerCase().replace(/-/g, '').includes(value.toLowerCase());
                });
        
               
                const uniqueResults = filteredResults.reduce((acc, item) => {
                    if (!acc.some(existing => existing.id === item.id)) {
                        acc.push(item);
                    }
                    return acc;
                }, []);
        
                setResultsData(uniqueResults);
            } catch (error) {
                console.error("Error general al obtener los datos:", error);
            } finally {
                setLoading(false);
            }
        };
        
        searchData();
        

    }, [value]);

    const render = resultsData.map((item) => <MovieCard {...item} key={item?.id} size={'220px'} />)

    if (loading) {return <div className='d-flex flex-column gap-2 ms-3'>Buscando resultados... <Loader/></div>};

    if(resultsData.length) {return render}

     return <div className='ms-3'>No se han encontrado resultados...</div>;
};

export default RenderSearched;

