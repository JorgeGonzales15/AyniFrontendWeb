import http from "../../../../../shared/services/http-common";

export class ProductApiService{
    endPoint = 'products'
    getAll() {
        return http.get(`/${this.endPoint}`);
    }
}