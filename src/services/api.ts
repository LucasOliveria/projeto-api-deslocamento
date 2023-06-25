import axios from "axios";

export default axios.create({
    baseURL: 'https://api-deslocamento.herokuapp.com/api/v1',
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' }
});