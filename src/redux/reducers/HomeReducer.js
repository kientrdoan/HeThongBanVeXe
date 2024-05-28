import { GET_CHUYEN_XE } from "../constants/HomeConstants"

const initialState = { 
  listChuyenXe: [], 
  listChuyenXeStorage: [], 
  chuyenXe: {
    listMaGhe: [],
    tinhXuatPhat: "",
    tinhDen: "",
    ngayXuatPhat: "",
    gioXuatPhat: "",
    gia: 0,
  },
  selectSeat: [] 
}

export const HomeReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_CHUYEN_XE:
      console.log("chuyênxe:", action.listChuyenXe)
      state.listChuyenXe = action.listChuyenXe
      state.listChuyenXeStorage = action.listChuyenXeStorage
      return { ...state }

    case "GET_VE_XE_BY_CHUYEN_XE":
      // console.log(action.chuyenXe)
      state.chuyenXe = action.chuyenXe;
      return { ...state }
    case "CHANGE_SELECT_SEAT":
      state.selectSeat= action.selectSeat;
      return {...state}

    default:
      return state
  }
}
