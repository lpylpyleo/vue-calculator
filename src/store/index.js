import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        expression: '0'
    },
    mutations: {
        append(state, str) {
            if (state.expression.length < 16) {
                if (state.expression !== '0' || isNaN(str)) {
                    //如果最后一位是符号且追加字符串也是符号，则替换最后一位；否则，追加
                    if (isNaN(state.expression.substr(state.expression.length - 1, 1)) && isNaN(str)) {
                        state.expression = state.expression.substring(0, state.expression.length - 1) + str;
                    } else {
                        state.expression += str;
                    }
                } else {
                    state.expression = str;
                }
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
