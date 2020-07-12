const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
};

const author = (state = initialState, action) => {
  switch (action.type) {
    case "GET_AUTHOR_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case "GET_AUTHOR_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
      };
    case "GET_AUTHOR_FULFILLED":
      console.log(action.payload.data);
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
        data: action.payload.data.data,
      };
    case "GET_DETAIL_AUTHOR_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case "GET_DETAIL_AUTHOR_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
      };
    case "GET_DETAIL_AUTHOR_FULFILLED":
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
        data: action.payload.data.data[0],
      };
    case "POST_AUTHOR_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case "POST_AUTHOR_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
      };
    case "POST_AUTHOR_FULFILLED":
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
        data: action.payload.data.data[0],
      };
    case "PUT_AUTHOR_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case "PUT_AUTHOR_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
      };
    case "PUT_AUTHOR_FULFILLED":
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
        data: action.payload.data.data[0],
      };
    case "DELETE_AUTHOR_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case "DELETE_AUTHOR_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
      };
    case "DELETE_AUTHOR_FULFILLED":
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

export default author;
