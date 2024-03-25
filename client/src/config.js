import axios from "axios";

const api = axios.create({
    baseURL: "https://collab-write-backend.vercel.app/api/"
})

export default api;