const initialState = {
  userId: null,
  user: null,
  admin: null,
  restaurantId: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_AUTH":
      return {
        ...state,
        user: action.payload,
      };

    case "ADMIN_AUTH":
      return {
        ...state,
        admin: action.payload,
      };

    case "SET_RESTAURANT":
      return {
        ...state,
        restaurantId: action.payload,
      };

    case "LOGOUT":
      return {
        ...state,
        user: null,
        admin: null,
      };

    default:
      return state;
  }
};

export default reducer;
