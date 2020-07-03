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
