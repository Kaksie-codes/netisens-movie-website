const api_key = "a3ec5cef31325905723a0ad860da9c7e";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${api_key}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${api_key}&with_network=213`,
    fetchTopRated: `/movie/top_rated?api_key=${api_key}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${api_key}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${api_key}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${api_key}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${api_key}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${api_key}&with_genres=99`
};

const base_url = "https://api.themoviedb.org/3";

// Function to fetch and log movies for each category
async function fetchMovies(url, category) {
    try {
        const response = await fetch(`${base_url}${url}`);
        const data = await response.json();
        console.log(`${category}:`, data.results);
    } catch (error) {
        console.error(`Error fetching ${category}:`, error);
    }
}

// Fetch and display movies
fetchMovies(requests.fetchTrending, 'Trending Movies');
fetchMovies(requests.fetchTopRated, 'Top Rated Movies');
fetchMovies(requests.fetchActionMovies, 'Action Movies');
fetchMovies(requests.fetchComedyMovies, 'Comedy Movies');
fetchMovies(requests.fetchHorrorMovies, 'Horror Movies');
fetchMovies(requests.fetchRomanceMovies, 'Romance Movies');
fetchMovies(requests.fetchDocumentaries, 'Documentaries');

