import { GET_CHUYEN_XE} from "../constants/HomeConstants"

const initialState = {
    chuyenXe: {

    },
    chuyenXeStorage: {

    },
    VeXe: {

    }
}

export const HomeReducer= (state = initialState, action) => {
  switch (action.type) {

  case GET_CHUYEN_XE:
    // console.log(action.chuyenXe)
    state.chuyenXe= action.chuyenXe
    state.chuyenXeStorage= action.chuyenXeStorage
    return {...state}

  case "GET_VE_XE_BY_CHUYEN_XE":
    state.VeXe= action.VeXe;
    return {...state}

  default:
    return state
  }
}
