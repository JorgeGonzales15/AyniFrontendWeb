import http from "../../../../../shared/services/http-common";

export class ActivityApiService{
    endPoint = 'activities'
    getAll() {
        return http.get(`/${this.endPoint}`);
    }
}