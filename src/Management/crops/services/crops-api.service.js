import http from "../../shared/services/http-common";

export class CropsApiService{
    getAll() { return http.get('/crops'); }
    getById(id) { return http.get(`/crops/${id}`); }
    create(data) { return http.post('/crops', data); }
    update(id, data) { return http.put(`/crops/${id}`, data); }
    delete(id) { return http.delete(`/crops/${id}`); }
    findByTitle(title) { return http.get(`/crops?name=${title}`); }
}