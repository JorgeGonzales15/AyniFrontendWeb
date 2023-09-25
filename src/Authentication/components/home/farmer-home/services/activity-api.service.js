import axios from "axios";

const http = axios.create({
    baseURL: 'http://localhost:3000/api/v1'
})
export class ActivityApiService{
    endPoint = 'activities'
    getAll() {
        return http.get(`/${this.endPoint}`);
    }
}