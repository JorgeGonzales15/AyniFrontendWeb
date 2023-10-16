import axios from "axios";

const http = axios.create({
    baseURL: 'https://my-json-server.typicode.com/JorgeGonzales15/AyniFakeApi'
})
export class OrdersService{
    endPoint = 'order_details'
    getAll() {
        return http.get(`/${this.endPoint}`);
    }
}