const initialState = {
  userId: null,
  user: null,
  admin: null,
  restaurantId: null,
  loading: true,
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

    case "SET_IS_LOADING":
      return {
        ...state,
        loading: true
      }
    
    case "SET_LOADING_COMPLETE":
      return {
        ...state,
        loading: false
      }

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
