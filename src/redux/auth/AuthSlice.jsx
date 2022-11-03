import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const AuthSlice = createSlice({
  name: "Auth",
  initialState: {
    isLogin: false,
    id: "",
    accessToken: "",
    type: "user",
    name: "",
    surName: "",
    il: "",
    ilce: "",
  },
  reducers: {
    successLogin: (state, action) => {
      const { id, accessToken, type, name, surName, il, ilce } = action.payload;
      localStorage.setItem(
        "userData",
        JSON.stringify({
          id,
          accessToken,
          isLogin: true,
          type,
          name,
          surName,
          il,
          ilce,
        })
      );
      return {
        ...state,
        isLogin: true,
        id: id,
        accessToken: accessToken,
        name,
        surName,
        il,
        ilce,
      };
    },
    succesRegisterCompany: (state, action) => {
      const { _id, accessToken, type } = action.payload;
      localStorage.setItem(
        "userData",
        JSON.stringify({ id: _id, accessToken, isLogin: true, type })
      );
      return {
        ...state,
      };
    },
  },
});

export const { successLogin, succesRegisterCompany } = AuthSlice.actions;

export const login = data => {
  return async (dispatch) => {
    try {
      await axios
        .post("http://localhost:5000/login", data)
        .then(res => dispatch(successLogin(res.data)));
    } catch (err) {
      console.log(err);
    }
  };
};

export const registerCompanny = data => {
  return async (dispatch) => {
    try {
      await axios
        .post("http://localhost:5000/users", data)
        .then(res => dispatch(succesRegisterCompany(res.data)));
    } catch (err) {
      console.log(err);
    }
  };
};

export const logout = data => {
  return async (dispatch) => {
    try {
      localStorage.clear("userData", data);
    } catch (err) {
      console.log(err);
    }
  };
};

export default AuthSlice.reducer;
