import axios from "axios";

const http = axios.create({
    baseURL: 'http://localhost:3000/api/v1'
})
export class OrderDetailsApiService{
    endPoint = 'order_details'
    getAll() {
        return http.get(`/${this.endPoint}`);
    }
}