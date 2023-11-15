import axios from "axios";


const http = axios.create({
    baseURL: 'http://jorgegc-001-site1.btempurl.com/api/v1/users'
})

export class AuthService {
    static login(user) {
        return http.post('/sign-in', {
            username: user.username,
            email: user.email,
            password: user.password
        }).then(response => {
            if (response.data.token) {
                localStorage.setItem('user', JSON.stringify(response.data));
            }
            return response.data
        });
    }

    static logout() {
        localStorage.removeItem('user');
    }

    static register(user){
        return http.post('/sign-up', {
            username: user.username,
            email: user.email,
            password: user.password
        });
    }
}