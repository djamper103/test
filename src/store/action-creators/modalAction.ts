import {Dispatch} from "redux"
import {ModalActions, ModalActionTypes} from "../../types/modal"


export const modalActionCreator = (payload: boolean) => {
    return async (dispatch: Dispatch<ModalActions>) => {
        try {
            dispatch({
                type: ModalActionTypes.MODAL_STATUS,
                payload: payload
            })
        } catch (e) {
        }
    }
}
