import axios from "axios";

const api = axios.create({
    baseURL: "https://collab-write-two.vercel.app/api/"
})

export default api;