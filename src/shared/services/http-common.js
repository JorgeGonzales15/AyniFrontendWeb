import axios from "axios";

export default axios.create({
    baseURL: 'https://ayniweb.azurewebsites.net/api/v1',
    headers: {'Content-Type': 'application/json'},
});