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

export const postBook = (formData, token) => {
  return {
    type: "POST_BOOK",
    payload: axios({
      method: "POST",
      url: "http://localhost:3000/mybook",
      headers: {
        Authorization: token,
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    }),
  };
};

export const putBook = (token) => {
  return {
    type: "PUT_BOOK",
    payload: axios({
      method: "PUT",
      url: "http://localhost:3000/:id",
      headers: {
        Authorization: token,
        "Content-Type": "multipart/form-data",
      },
    }),
  };
};

export const deleteBook = (token) => {
  return {
    type: "DELETE_BOOK",
    payload: axios({
      method: "DELETE",
      url: "http://localhost:3000/:id",
      headers: {
        Authorization: token,
        "Content-Type": "multipart/form-data",
      },
    }),
  };
};
