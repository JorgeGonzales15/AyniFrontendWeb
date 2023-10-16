import axios from "axios";

const http = axios.create({
    baseURL: 'https://my-json-server.typicode.com/JorgeGonzales15/AyniPlaceholder6'
})

export class ActivityApiService{
    endPoint = 'activities'
    getAll() {
        return http.get(`/${this.endPoint}`);
    }
}