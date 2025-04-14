import axios from 'axios'


export const getDiscoverData = async (numberPage) => {

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGZhNDczNzZmN2UwMjRjYTdkNjA4OGJiZDJhMDZlNCIsIm5iZiI6MTcxNTcxMDQ3My41MDg5OTk4LCJzdWIiOiI2NjQzYWEwOWQxNjc0ZGI4NDc2OTQ3YmMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.V7BOstJud_ROkkbLkz_TQTF6Ute8c673ICMZJnmgDEw'
    }
  };

  try {
    const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&page=${numberPage}&language=en-US&sort_by=popularity.desc`, options);

    return response.data
  }
  catch (err) { console.log(err) }


}



export const getTvData = async (numberPage) => {

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGZhNDczNzZmN2UwMjRjYTdkNjA4OGJiZDJhMDZlNCIsIm5iZiI6MTcxNTcxMDQ3My41MDg5OTk4LCJzdWIiOiI2NjQzYWEwOWQxNjc0ZGI4NDc2OTQ3YmMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.V7BOstJud_ROkkbLkz_TQTF6Ute8c673ICMZJnmgDEw'
    }
  };

  try {
    const response = await axios.get(`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${numberPage}&sort_by=popularity.desc`, options);

    return response.data

  }
  catch (err) { console.log(err) }

}





export const getUpComing = async () => {

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGZhNDczNzZmN2UwMjRjYTdkNjA4OGJiZDJhMDZlNCIsIm5iZiI6MTcxNTcxMDQ3My41MDg5OTk4LCJzdWIiOiI2NjQzYWEwOWQxNjc0ZGI4NDc2OTQ3YmMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.V7BOstJud_ROkkbLkz_TQTF6Ute8c673ICMZJnmgDEw'
    }
  };

  try {
    const response = await axios.get('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options);

    return response.data
  }
  catch (err) { console.log(err) }


}


export const getPopular = async () => {

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGZhNDczNzZmN2UwMjRjYTdkNjA4OGJiZDJhMDZlNCIsIm5iZiI6MTcxNTcxMDQ3My41MDg5OTk4LCJzdWIiOiI2NjQzYWEwOWQxNjc0ZGI4NDc2OTQ3YmMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.V7BOstJud_ROkkbLkz_TQTF6Ute8c673ICMZJnmgDEw'
    }
  };

  try {
    const response = await axios.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);

    return response.data
  }
  catch (err) { console.log(err) }


}



export const getMoviesGenres = async () => {

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGZhNDczNzZmN2UwMjRjYTdkNjA4OGJiZDJhMDZlNCIsIm5iZiI6MTcxNTcxMDQ3My41MDg5OTk4LCJzdWIiOiI2NjQzYWEwOWQxNjc0ZGI4NDc2OTQ3YmMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.V7BOstJud_ROkkbLkz_TQTF6Ute8c673ICMZJnmgDEw'
    }
  };

  try {
    const response = await axios.get('https://api.themoviedb.org/3/genre/movie/list?language=en', options);

    return response.data
  }
  catch (err) { console.log(err) }


}




export const getSeriesGenres = async () => {

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGZhNDczNzZmN2UwMjRjYTdkNjA4OGJiZDJhMDZlNCIsIm5iZiI6MTcxNTcxMDQ3My41MDg5OTk4LCJzdWIiOiI2NjQzYWEwOWQxNjc0ZGI4NDc2OTQ3YmMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.V7BOstJud_ROkkbLkz_TQTF6Ute8c673ICMZJnmgDEw'
    }
  };

  try {
    const response = await axios.get('https://api.themoviedb.org/3/genre/tv/list?language=en', options);

    return response.data
  }
  catch (err) { console.log(err) }


}


export const getVideos = async (id) => {


  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGZhNDczNzZmN2UwMjRjYTdkNjA4OGJiZDJhMDZlNCIsIm5iZiI6MTcxNTcxMDQ3My41MDg5OTk4LCJzdWIiOiI2NjQzYWEwOWQxNjc0ZGI4NDc2OTQ3YmMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.V7BOstJud_ROkkbLkz_TQTF6Ute8c673ICMZJnmgDEw'
    }
  };


  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options);

    return response.data.results
  }
  catch (err) { console.log(err) }


}





// Esta función obtiene los proveedores de streaming desde TMDb
// TMDb obtiene parte de esta información de JustWatch
// Atribución requerida: https://www.justwatch.com

export const getWatchProviders = async (type, id) => {
  const options = {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGZhNDczNzZmN2UwMjRjYTdkNjA4OGJiZDJhMDZlNCIsIm5iZiI6MTcxNTcxMDQ3My41MDg5OTk4LCJzdWIiOiI2NjQzYWEwOWQxNjc0ZGI4NDc2OTQ3YmMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.V7BOstJud_ROkkbLkz_TQTF6Ute8c673ICMZJnmgDEw'
    }
  };

  try {
    const response = await axios.get(`https://api.themoviedb.org/3/${type}/${id}/watch/providers`, options);
    return response.data.results;
  } catch (err) {
    console.log(err);
  }
};










