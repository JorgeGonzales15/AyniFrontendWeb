
const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
    ? { user }
    : { user: null };
export const data = {
    namespaced: true,
    state: initialState,
    actions: {
        saveUser({ commit }, user ){
            commit('saveUser', user);
        },
        updateUserRol({ commit }, rol){
            commit('updateUserRol', rol);
        }
    },
    mutations: {
        saveUser(state, user) {
            state.user = user;
        },
        updateUserRol(state, rol) {
            state.user.role = rol;
        }
    }
}