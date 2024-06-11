const initialState = { 
    inforAuth: {
    },
}

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {

    case "INFOR_AUTH":
      state.inforAuth= action.inforAuth;
      return { ...state }

    default:
      return state
  }
}
