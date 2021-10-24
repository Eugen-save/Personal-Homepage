import axios from "axios";

const gitAPIURL = "https://api.github.com/users/"
export const username = "Eugen-save";

export const getAPI = () =>
  axios.get(`${gitAPIURL}${username}/repos`)
    .then(response => response.data);
