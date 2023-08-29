const initialState = {
  users: [],
  nutritionists: [],
  allNutritionists: [],
  quotes: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_NUTRITIONISTS":
      return {
        ...state,
        allNutritionists: action.payload,
        nutritionists: action.payload,
      };

    case "GET_NUTRITIONISTS_NAME":
      return {
        ...state,
        nutritionists: action.payload,
      };

    case "GET_DETAIL":
      return {
        ...state,
        nutritionists: action.payload,
      };

    case "POST_USER":
      return {
        ...state,
        users: action.payload,
      };

    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
      };
    case "GET_APPOINTMENTS":
      return {
        ...state,
        users: action.payload,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
