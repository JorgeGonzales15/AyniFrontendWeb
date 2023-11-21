import axios from "axios";

const http = axios.create({
    baseURL: 'https://ayniweb.azurewebsites.net/api/v1',
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