import axios from "axios";

export const login = (data) => {
  return {
    type: "LOGIN",
    payload: axios({
      method: "POST",
      url: "http://localhost:3000/auth/login",
      data: {
        username: data.username,
        password: data.password,
      },
    }),
  };
};

export const logout = () => {
  return {
    type: "LOGOUT_FULFILLED",
  };
};

export const register = (data) => {
  return {
    type: "REGISTER",
    payload: axios({
      method: "post",
      url: "http://localhost:3000/auth/register",
      data: {
        username: data.username,
        password: data.password,
      },
    }),
  };
};
