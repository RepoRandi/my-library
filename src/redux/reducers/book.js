const initialState = {
  isLoading: false,
  isError: false,
  errorMsg: "",
  data: [],
};

const book = (state = initialState, action) => {
  switch (action.type) {
    case "GET_BOOK_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "GET_BOOK_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: action.payload.response.data,
        // errorMsg: action.payload.response.data.data
      };
    case "GET_BOOK_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
      };
    default:
      return state;
  }
};

export default book;
