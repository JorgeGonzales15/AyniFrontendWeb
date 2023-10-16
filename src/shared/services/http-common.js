import axios from "axios";

export default axios.create({
    baseURL: "https://my-json-server.typicode.com/JorgeGonzales15/AyniPlaceholder5",
    headers: {'Content-Type': 'application/json'},
});