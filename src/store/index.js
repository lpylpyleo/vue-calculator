import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        expression: '0'
    },
    mutations: {
        append(state, str) {
            if (state.expression !== '0' ||isNaN(str) ) {
                state.expression += str;
            } else {
                state.expression = str;
            }
        },
        del(state) {
            let expression = state.expression;
            if (expression.length > 0) {
                if (expression.length > 1) {
                    state.expression = expression.substr(0, expression.length - 1);
                } else {
                    state.expression = '0';
                }
            }
        },
        clear(state) {
            state.expression = '0';
        }
    },
    actions: {},
    modules: {}
})
