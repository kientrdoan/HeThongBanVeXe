import { GET_PROVINCE_API } from "../constants/ModalAddressConstant"

const initialState = {
    provinceList: [],
}

export const ModalAddressReducer= (state = initialState, action) => {
  switch (action.type) {
  case GET_PROVINCE_API:
    state.provinceList= action.provinceList;
    return {...state}
  default:
    return {...state}
  }
}
