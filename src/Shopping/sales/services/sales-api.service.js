import http from "../../../shared/services/http-common";

export class SalesApiService {
    getAll() { return http.get('/sales'); }
    getById(id) { return http.get(`/sales/${id}`); }
    create(data) { return http.post('/sales', data); }
    update(id, data) { return http.put(`/sales/${id}`, data); }
    delete(id) { return http.delete(`/sales/${id}`); }
    findByTitle(title) { return http.get(`/sales?name=${title}`); }
}