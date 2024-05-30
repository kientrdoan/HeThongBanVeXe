const initialState = { 
    inforPayment: {
        name: "",
        phone: "",
        email: "",
        tinhXuatPhat: "",
        tinhDen: "",
        ngayXuatPhat: "",
        gioXuatPhat: "",
        gia: 0,
    },
    listIdVe: [],
}

export const BookTicketReducer = (state = initialState, action) => {
  switch (action.type) {

    case "LIST_ID_VE":
      state.listIdVe= action.listIdVe;
      return { ...state }

    case "HANDLE_INFOR_PAYMENT":
        state.inforPayment= action.inforPayment
        return {...state}
    default:
      return state
  }
}
