import { ModalActions, ModalActionTypes, ModalState } from "../../types/modal"


const initialState: ModalState = {
    isModal: false
}

export const modalReducer = (state = initialState, action: ModalActions): ModalState => {
    switch (action.type) {
        case ModalActionTypes.MODAL_STATUS:
            return {
                isModal: action.payload
            }
        default:
            return state
    }
}