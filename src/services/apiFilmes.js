import axios from "axios";

const apiFilmes = axios.create({
    baseURL : 'https://api.themoviedb.org/3/',
    headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZmRlY2UzOThjOGU1OGU0MzIwZjdiMGY4ZmExODJmMiIsInN1YiI6IjYyNTAzM2QxNWEwN2Y1MDA1MGY5M2UxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dOTpJRtcTSVacaO3xFyPnyZT-CBtC0bqEaxy1V5fzyA',
        'content-type': 'aplications/json;charset=utf-8'
    }
})

export default apiFilmes