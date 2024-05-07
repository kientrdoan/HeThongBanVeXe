import { GET_CHUYEN_XE} from "../constants/HomeConstants"

const initialState = {
    chuyenXe: {

    },
}

export const HomeReducer= (state = initialState, action) => {
  switch (action.type) {

  case GET_CHUYEN_XE:
    state.chuyenXe= action.chuyenXe
    return {...state}

  default:
    return state
  }
}
