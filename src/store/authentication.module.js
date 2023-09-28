import {User} from "@/Authentication/model/user.entity";

const user = new User();
const initialState = user
    ? { status: { loggedIn: true }, user }
    : { status: { loggedIn: false }, user: null };

export const authentication = {
    namespaced: true,
    state: initialState,
    actions: {
        registerUser({ commit }, user) {
            commit('registerSuccess', user);
        },
        updateRol({ commit }, rol) {
            commit('updateRol', rol);
        }
    },
    mutations: {
        updateRol(state, rol){
            state.user.rol = rol;
        },
        registerSuccess(state, user) {
            state.status.loggedIn = true;
            state.user = user;
        },
        registerFailure(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
    },
    getters: {
        getUserRol(state){
            return state.user.rol;
        }
    }
}