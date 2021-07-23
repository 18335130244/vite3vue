import { createStore } from "vuex";

// Instantiate our Vuex store
const store = createStore({

    // "State" 组件的应用程序数据

    state () {
        return {
            myValue: 0
        };
    }
});
