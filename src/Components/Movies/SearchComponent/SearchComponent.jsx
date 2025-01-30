import React, { useState, useEffect } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import { getDiscoverData } from '../../../Axios/apiData';
const SearchComponent = ({ value }) => {


    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        const fetchData = async () => {
            let results = [];
            for (let page = 1; page <= 1000; page++) {

                const data = await getDiscoverData(page);

                const matches = data?.results?.filter((item) => {

                    return item?.title?.toLowerCase().includes(value?.toLowerCase())
                 });

                results = [...results, matches.length ? matches  : null]

                if (value === null || value === undefined || results.length >= 100) break;
                
            }
            
            
            setResults(results)
            setLoading(false)

        };


        if (value) {
            fetchData()
        } else {
            setResults([])
            setLoading(false)
        }
        
    }, 
    
    [value]);

  


    const filteredResults =  results?.filter((item) => item !== null)
  console.log(filteredResults);

  
    const render = filteredResults?.map((item) => 
            item?.map((item) => <MovieCard {...item} key={item.id} size={'200px'} />))
 

    if (loading) {
        return <div>Loading...</div>
    }

    return render?.length ? render : <div>No results found</div>


}

export default SearchComponent;