import axios from "axios";

export const getBook = (token) => {
  return {
    type: "GET_BOOK",
    payload: axios({
      method: "GET",
      url: "http://localhost:3000/mybook",
      headers: {
        Authorization: token,
      },
    }),
  };
};

export const postBook = (token) => {
  return {
    type: "POST_BOOK",
    payload: axios({
      method: "POST",
      url: "http://localhost:3000/mybook",
      headers: {
        Authorization: token,
        "Content-Type": "multipart/form-data",
      },
    }),
  };
};
