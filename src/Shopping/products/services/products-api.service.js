import http from "../../../shared/services/http-common";
import authHeader from "@/Authentication/services/auth-header";

export class ProductsApiService {
    getAllProducts() { return http.get('/products', { headers: authHeader() }); }
    getProductById(id) { return http.get(`/products/${id}`); }
    createProduct(data) { return http.post('/products', data); }
    updateProduct(id, data) { return http.put(`/products/${id}`, data); }
    deleteProduct(id) { return http.delete(`/products/${id}`); }
    findProductByTitle(title) { return http.get(`/products?name=${title}`); }
}