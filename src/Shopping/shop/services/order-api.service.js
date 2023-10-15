import http from "../../../shared/services/http-common";

export class OrderApiService{
    endPoint = 'orders'
    getAll() {
        return http.get(`/${this.endPoint}`);
    }
}