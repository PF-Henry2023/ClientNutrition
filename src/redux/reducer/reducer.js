const initialState = {
  users: [],
  nutritionists: [],
  allNutritionists: [],
  quotes: [],
  appointments: [],
  schedules: {}
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

    const filtered = action.payload.filter((e) => e.role === "user" )
      return {
        ...state,
        users: filtered,
      };
    case "GET_APPOINTMENTS":
      return {
        ...state,
        appointments: action.payload,
      };
    case "GET_SCHEDULES":
      return {
        ...state,
        schedules: action.payload
      }

    default:
      return { ...state };
  }
};

export default rootReducer;
