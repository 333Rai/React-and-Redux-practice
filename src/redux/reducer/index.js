const initialState = {
   list: [],
};
export const reducer = (state = initialState, action) => {
   switch (action.type) {
      case "GET_PRODUCT":
         return { ...state, list: action.payload };

      default:
         return state;
   }
};
