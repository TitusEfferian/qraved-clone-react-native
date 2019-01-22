import { REQUEST_MODAL } from "../actions/modalActived";


const INITIAL_STATE = {
    modalVisible: false
}

export function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case REQUEST_MODAL:
            return state.modalVisible ? { ...state, modalVisible: false } : { ...state, modalVisible: true }
        default:
            return state
    }
}