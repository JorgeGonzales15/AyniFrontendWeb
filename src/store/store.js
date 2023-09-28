import {createStore} from "vuex";
import {authentication} from "@/store/authentication.module";

const store = createStore({
    modules: {
        authentication
    }
});
export default store;
