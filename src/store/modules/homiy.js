export default {
    state: {
        singleHomiy: {},
        singleTalaba: {}
    },
    getters: {},
    mutations: {
        GetSingleHomiy(state, payload) {
            state.singleHomiy = payload
            console.log(payload);
        },
        GetSinleTalaba(state, payload) {
            state.singleTalaba = payload
            console.log(payload);
        }
    },
    actions: {}
}