import http from "../../../shared/services/http-common";

export class CropsApiService {
    getAll() { return http.get('/crops'); }
    create(data) { return http.post('/crops', data); }
    update(id, data) { return http.put(`/crops/${id}`, data); }
    delete(id) { return http.delete(`/crops/${id}`); }

}