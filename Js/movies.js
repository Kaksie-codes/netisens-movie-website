const api_key = "a3ec5cef31325905723a0ad860da9c7e";

const requests = {
    fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${api_key}&language=en-US`,
    fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&with_network=213`,
    fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US`,
    fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=28`,
    fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=35`,
    fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=27`,
    fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=10749`,
    fetchDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=99`
};

// const base_url = "https://api.themoviedb.org/3";

// Function to fetch and log movies for each category
// async function fetchMovies(url, category) {
//     try {
//         // const response = await fetch(`${base_url}${url}`);
//         const response = await fetch(`${url}`);
//         const data = await response.json();
//         // console.log(`${category}:`, data.results);
//         return await data.results;
//     } catch (error) {
//         console.error(`Error fetching ${category}:`, error);
//     }
// }
async function fetchTrendingMovies(url, category) {
    try {
        
        const response = await fetch(`${url}`);
        const data = await response.json();
        console.log(`${category}:`, data.results);
        const trendingMoviesWrapper = document.getElementById('trending-movies');

        const movies = data.results;        
        const baseUrl = "https://image.tmdb.org/t/p/original/";
        movies.forEach((movie) => {
            const {overview, backdrop_path, vote_average, name, original_title
,title            } = movie;

            trendingMoviesWrapper.innerHTML+=`
            <div class="movie-card">
                <div class="img-wrap">
                    <img src=${baseUrl}${backdrop_path} alt="">
                </div>
                
                <div>
                    <h3>Title:${name || original_title || title} </h3>
                    <p>Description:${overview} </p>
                    <span>Rating:${vote_average.toFixed(1)} </span>
                </div>
            </div>
            `
        })
       
        
    } catch (error) {
        console.error(`Error fetching ${category}:`, error);
    }
}
async function fetchActionMovies(url, category) {
    try {
        
        const response = await fetch(`${url}`);
        const data = await response.json();
        console.log(`${category}:`, data.results);
        const actionMoviesWrapper = document.getElementById('action-movies');

        const movies = data.results;        
        const baseUrl = "https://image.tmdb.org/t/p/original/";
        movies.forEach((movie) => {
            const {overview, backdrop_path, vote_average, name, original_title
,title            } = movie;

actionMoviesWrapper.innerHTML+=`
            <div class="movie-card">
                <div class="img-wrap">
                    <img src=${baseUrl}${backdrop_path} alt="">
                </div>
                
                <div>
                    <h3>Title:${name || original_title || title} </h3>
                    <p>Description:${overview} </p>
                    <span>Rating:${vote_average.toFixed(1)} </span>
                </div>
            </div>
            `
        })
       
        
    } catch (error) {
        console.error(`Error fetching ${category}:`, error);
    }
}

// Fetch and display movies
fetchTrendingMovies(requests.fetchTrending, 'Trending Movies');
// fetchMovies(requests.fetchTopRated, 'Top Rated Movies');
fetchActionMovies(requests.fetchActionMovies, 'Action Movies');
// fetchMovies(requests.fetchComedyMovies, 'Comedy Movies');
// fetchMovies(requests.fetchHorrorMovies, 'Horror Movies');
// fetchMovies(requests.fetchRomanceMovies, 'Romance Movies');
// fetchMovies(requests.fetchDocumentaries, 'Documentaries');

// console.log(trendingMovies)
