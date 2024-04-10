import Axios  from "axios";
import { API_ENDPOINT } from "../lib/constant";
export const api = Axios.create({
    baseURL : API_ENDPOINT
})