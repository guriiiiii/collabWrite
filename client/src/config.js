import axios from "axios";

const api = axios.create({
    baseURL: "http://collab-write-puce.vercel.app/api/"
})

export default api;