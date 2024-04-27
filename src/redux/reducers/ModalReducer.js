import { React } from "react";
import { provice } from "../../asserts/province";

const stateDefault = {
    title: "",
    positionLeft: "",
    Component: <p>Noi dung mac dinh</p>,
    provice: provice,
    origin: "Chọn điểm đi",
    destination: "Chọn điểm đến",
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