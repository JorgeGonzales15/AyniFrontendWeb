import axios from "axios";

const http = axios.create({
    baseURL: 'https://my-json-server.typicode.com/JorgeGonzales15/AyniFakeApi'
})
export class ActivityApiService{
    endPoint = 'activities'
    getAll() {
        return http.get(`/${this.endPoint}`);
    }
}