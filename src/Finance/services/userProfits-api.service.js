import axios from "axios";

const http = axios.create({
    baseURL: 'https://ayniweb.azurewebsites.net/api/v1',
    headers: {
        'Content-Type': 'application/json'
    }
})
export class UserProfitsApiService{
    endPoint = 'users'
    getAllProfits(id) {
        console.log("getting all profits from id")
        return http.get(`${this.endPoint}/${id}/profits`);
    }
}