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
    case "GET_DETAIL_BOOK_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case "GET_DETAIL_BOOK_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
      };
    case "GET_DETAIL_BOOK_FULFILLED":
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
        data: action.payload.data.data[0],
      };
    case "POST_ADD_BOOK_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case "POST_ADD_BOOK_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
      };
    case "POST_ADD_BOOK_FULFILLED":
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
        data: action.payload.data.data[0],
      };
    case "PUT_UPDATE_BOOK_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case "PUT_UPDATE_BOOK_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
      };
    case "PUT_UPDATE_BOOK_FULFILLED":
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
        data: action.payload.data.data[0],
      };
    case "DELETE_BOOK_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case "DELETE_BOOK_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
      };
    case "DELETE_BOOK_FULFILLED":
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
        data: action.payload.data.data[0],
      };
    default:
      return state;
  }
};

export default book;
