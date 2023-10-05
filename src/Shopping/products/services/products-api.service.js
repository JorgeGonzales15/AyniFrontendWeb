import http from "../../../shared/services/http-common";

export class ProductsApiService {
    getAllProducts() { return http.get('/products'); }
    getProductById(id) { return http.get(`/products/${id}`); }
    createProduct(data) { return http.post('/products', data); }
    updateProduct(id, data) { return http.put(`/products/${id}`, data); }
    deleteProduct(id) { return http.delete(`/products/${id}`); }
    findProductByTitle(title) { return http.get(`/products?name=${title}`); }
}