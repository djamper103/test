export enum ModalActionTypes {
    MODAL_STATUS = "MODAL_STATUS",
}

interface ModalAction {
    type: ModalActionTypes.MODAL_STATUS;
    payload: boolean;
}

export type ModalActions = ModalAction

export interface ModalState {
    isModal: boolean
}