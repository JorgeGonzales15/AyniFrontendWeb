import http from "../../../../../shared/services/http-common";

export class PaymentsApiService{
    endPoint = 'payments'
    getAll() {
        return http.get(`/${this.endPoint}`);
    }
}