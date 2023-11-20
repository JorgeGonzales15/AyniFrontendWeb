import http from "../../../shared/services/http-common";

export class OrderApiService{
    endPoint = 'orders'
    getAll() {
        return http.get(`/${this.endPoint}`);
    }
    create(data) { return http.post(`/${this.endPoint}`, data); }
    delete(id) {
        { return http.delete(`/${this.endPoint}/${id}`); }
    }
}