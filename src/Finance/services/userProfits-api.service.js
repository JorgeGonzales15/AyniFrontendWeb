import axios from "axios";

const http = axios.create({
    baseURL: 'http://jorgegc-001-site1.btempurl.com/api/v1',
    headers: {
        'Content-Type': 'application/json'
    }
})
export class UserProfitsApiService{
    endPoint = 'users'
    getAllProfits(id) {
        return http.get(`${this.endPoint}/${id}/profits`);
    }
}