import axios from "axios";

const api = axios.create({
    baseURL: "https://collab-write-kappa.vercel.app/api/"
})

export default api;