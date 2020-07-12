import axios from "axios";

export const getGenre = (token) => {
  return {
    type: "GET_GENRE",
    payload: axios({
      method: "GET",
      url: process.env.REACT_APP_API_URL + "genre",
      headers: {
        Authorization: token,
      },
    }),
  };
};

export const getDetailGenre = (id, token) => {
  return {
    type: "GET_DETAIL_GENRE",
    payload: axios({
      method: "GET",
      url: process.env.REACT_APP_API_URL + "genre/" + id,
      headers: {
        Authorization: token,
      },
    }),
  };
};

export const postGenre = (data, token) => {
  return {
    type: "POST_GENRE",
    payload: axios({
      method: "POST",
      url: process.env.REACT_APP_API_URL + "genre",
      data: data,
      headers: {
        Authorization: token,
      },
    }),
  };
};

export const putGenre = (id, data, token) => {
  return {
    type: "PUT_GENRE",
    payload: axios({
      method: "PUT",
      url: process.env.REACT_APP_API_URL + "genre/" + id,
      data: data,
      headers: {
        Authorization: token,
      },
    }),
  };
};

export const deleteGenre = (id, token) => {
  return {
    type: "DELETE_GENRE",
    payload: axios({
      method: "DELETE",
      url: process.env.REACT_APP_API_URL + "genre/" + id,
      headers: {
        Authorization: token,
      },
    }),
  };
};
