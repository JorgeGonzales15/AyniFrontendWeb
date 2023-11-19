import {createStore} from "vuex";
import {auth} from "@/store/auth.module";
import {data} from "@/store/data.module";

const store = createStore({
    modules: {
        auth,
        data
    }
});
export default store;
