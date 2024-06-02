const initialState = { 
    inforTicket: {
        name: "",
        phone: "",
        email: "",
        tinhXuatPhat: "",
        tinhDen: "",
        ngayXuatPhat: "",
        gioXuatPhat: "",
    },
}

export const ConsultReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_INFOR_TICKET":
      state.inforTicket= action.inforTicket;
      return { ...state }

    default:
      return state
  }
}
