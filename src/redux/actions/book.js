import axios from "axios";

export const getBook = (token) => {
  return {
    type: "GET_BOOK",
    payload: axios({
      method: "GET",
      url: process.env.REACT_APP_API_URL + "mybook",
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
      url: process.env.REACT_APP_API_URL + "mybook",
      headers: {
        Authorization: token,
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    }),
  };
};

export const putBook = (id, formData, token) => {
  return {
    type: "PUT_BOOK",
    payload: axios({
      method: "PUT",
      url: process.env.REACT_APP_API_URL + "mybook" + id,
      data: formData,
      headers: {
        Authorization: token,
        "Content-Type": "multipart/form-data",
      },
    }),
  };
};

export const deleteBook = (id, token) => {
  return {
    type: "DELETE_BOOK",
    payload: axios({
      method: "DELETE",
      url: process.env.REACT_APP_API_URL + "mybook" + id,
      headers: {
        Authorization: token,
        "Content-Type": "multipart/form-data",
      },
    }),
  };
};
