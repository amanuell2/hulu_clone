const API_KEY = process.env.API_KEY;

export default {
    fetchTrending: {
        title: "Trending",
        url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    },
    fetchTopRated: {
        title: "Top Rated",
        url: `movie/top_rated?api_key${API_KEY}&language-en-us`,
    },
    fetchActionMovies: {
        title: "Action",
        url: `/discover/movie?api_key${API_KEY}&language-en-us`,
    }
    ,
    fetchComedy: {
        title: "Comedy",
        url: `/discover/movie/week?api_key${API_KEY}&language-en-us`,
    }
    , fetchHorrorMovies: {
        title: "Horror",
        url: `/discover/movie/week?api_key${API_KEY}&language-en-us`,
    }
    , fetchRomanceMovies: {
        title: "Romance",
        url: `/discover/movie/week?api_key${API_KEY}&language-en-us`,
    }
    , fetchMystery: {
        title: "Mystery",
        url: `/discover/movie/week?api_key${API_KEY}&language-en-us`,
    }
    , fetchSciFi: {
        title: "Sci-Fi",
        url: `/discover/movie/week?api_key${API_KEY}&language-en-us`,
    },
    fetchWestern: {
        title: "Western",
        url: `/discover/movie/week?api_key${API_KEY}&language-en-us`,
    }
    , fetchAnimation: {
        title: "Animation",
        url: `/discover/movie/week?api_key${API_KEY}&language-en-us`,
    },
    fetchTV: {
        title: "Tv Movie",
        url: `/discover/movie/week?api_key${API_KEY}&language-en-us`,
    }
}