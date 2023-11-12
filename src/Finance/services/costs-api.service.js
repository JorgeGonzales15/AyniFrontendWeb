import axios from "axios";

const http = axios.create({
    baseURL: 'http://jorgegc-001-site1.btempurl.com/api/v1',
    headers: {
        'Content-Type': 'application/json'
    }
})
export class CostsApiService{
    endPoint = 'costs'
    getAllCosts() {
        return http.get(`/${this.endPoint}`);
    }
    createCost(data){
        return http.post(`/${this.endPoint}`, data);
    }
}