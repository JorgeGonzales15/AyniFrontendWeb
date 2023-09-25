import axios from "axios";

const http = axios.create({
    baseURL: 'http://localhost:3000/api/v1'
})
export class OrderPaymentApiService{
    endPoint = '/order_payment'
    getAll() {
        return http.get(`${this.endPoint}`);
    }
}