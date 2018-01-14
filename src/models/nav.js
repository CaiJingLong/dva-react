export default {

    namespace: 'nav',

    state: {
        key: "post"
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },

    effects: {
        *fetch({ payload }, { call, put }) {  // eslint-disable-line
            yield put({ type: 'save' });
        },
    },

    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
        change(state, action) {
            return { ...state, ...action.payload, key: action.payload }
        },
    },

};
