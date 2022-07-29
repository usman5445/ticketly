import axios from "axios";
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

//get all movies body{}
export async function getAllMovies() {
  return await axios.get(`${BACKEND_URL}/mba/api/v1/movies`);
}

//get sigle movie body{name}
export async function getMovie(name) {
  return await axios.get(`${BACKEND_URL}/mba/api/v1/movies/${name}`);
}

//ceate new movie body{name,description,casts,director,trailerUrl,posterUrl,language,releaseDate,releaseSatus}
export async function newMovie(data) {
  return await axios.post(`${BACKEND_URL}/mba/api/v1/movies`, data, {
    headers: {
      "x-access-token": JSON.parse(localStorage.getItem("user")).accessToken,
    },
    userId: JSON.parse(localStorage.getItem("user")).userId,
  });
}

//update the movie body{name,description,casts,director,trailerUrl,posterUrl,language,releaseDate,releaseSatus}
export async function updateMovie(data) {
  return await axios.put(
    `${BACKEND_URL}/mba/api/v1/movies/${data.name}`,
    data,
    {
      headers: {
        "x-access-token": JSON.parse(localStorage.getItem("user")).accessToken,
      },
      userId: JSON.parse(localStorage.getItem("user")).userId,
    }
  );
}

export async function deleteMovie(data) {
  return await axios.delete(`${BACKEND_URL}/mba/api/v1/movies/${data.name}`, {
    headers: {
      "x-access-token": JSON.parse(localStorage.getItem("user")).accessToken,
    },
    userId: JSON.parse(localStorage.getItem("user")).userId,
  });
}
