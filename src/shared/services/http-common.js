import axios from "axios";

export default axios.create({
    baseURL: "https://github.com/upc-2023-GreatMinds-SW51-Web/AyniFrontendWeb.git",
    headers: {'Content-Type': 'application/json'},
});