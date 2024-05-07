import { React } from "react";

const stateDefault = {
    title: "",
    positionLeft: "",
    Component: <p>Noi dung mac dinh</p>,
    origin: {
        id: -1,
        tenTinh: "Chọn điểm đi"
    },
    destination: {
        id: -1,
        tenTinh: "Chọn điểm đến"
    },
}

export const ModalReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case "OPEN_FORM_DI":
            state.title = action.title;
            state.positonLeft = action.positionLeft;
            state.Component = action.Component;
            console.log(state)
            return { ...state };
        case "OPEN_FORM_DEN":
            state.title = action.title;
            state.positonLeft = action.positionLeft;
            state.Component = action.Component;
            console.log(state)
            return { ...state };
        case "ORIGIN_LOCALTION":
            state.title = action.title;
            state.Component = action.Component;
            state.origin = action.origin;
            console.log(state)
            return { ...state };
        case "DESTINATION_LOCALTION":
            const newState= {...state, destination: action.destination}
            console.log(state)
            return { ...newState };
        default:
            return { ...state }
    }
}