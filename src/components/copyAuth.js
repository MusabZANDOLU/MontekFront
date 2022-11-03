import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../base";

const DEV_BASE = `${BASE_URL}/auth`;

export const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      isAuth: false,
      isAdmin: false,
      id: "",
      role: "",
      username: "",
      email: "",
      image: "",
      accessToken: null,
      refreshToken: null,
    },
    success: false,
    message: "",
  },
  reducers: {
    success: (state, action) => {
      const userInfo = action.payload;
      const data = userInfo.data;

      return {
        ...state,
        user: {
          isAuth: data.accessToken && data.refreshToken && true,
          isAdmin: data.user.role === "admin",
          id: data.user._id,
          role: data.user.role,
          username: data.user.username,
          email: data.user.email,
          image: data.user.image,
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
        },
        success: userInfo.success,
        message: userInfo.message ? userInfo.message : "Success",
      };
    },
    failed: (state, action) => {
      return {
        ...state,
        success: false,
        message: action.payload.message,
      };
    },
    userLogout: (state, action) => {
      const userInfo = action.payload;
      return {
        user: {
          isAuth: false,
          isAdmin: false,
          id: "",
          role: "",
          username: "",
          email: "",
          image: "",
          accessToken: null,
          refreshToken: null,
        },
        success: userInfo.success,
        message: userInfo ? userInfo.message : "Successfully logout",
      };
    },
    saveToLocalStorage: (state) => {
      console.log(state.user)
      localStorage.setItem("userData", JSON.stringify(state.user));
      localStorage.setItem("success", JSON.stringify(state.success));
      localStorage.setItem("message", JSON.stringify(state.message));
    },
    deleteToLocalStorage: () => {
      localStorage.removeItem("userData");
      localStorage.removeItem("success");
      localStorage.removeItem("message");
      localStorage.removeItem("currentProduct");
      localStorage.removeItem("shopCart");
      localStorage.removeItem("addresses");
    },
  },
});

export const {
  success,
  failed,
  saveToLocalStorage,
  deleteToLocalStorage,
  userLogout,
} = AuthSlice.actions;

export const register = (data) => {
  return async (dispatch) => {
    try {
      await axios.post(`${DEV_BASE}/register`, data).then((res) => {
        if (res.status === 200) {
          dispatch(success(res.data));
          dispatch(saveToLocalStorage());
        } else {
          dispatch(failed(res.data));
        }
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const login = (data) => {
  return async (dispatch) => {
    try {
      await axios.post(`${DEV_BASE}/login`, data).then((res) => {
        if (res.data.success) {
          dispatch(success(res.data));
          dispatch(saveToLocalStorage());
        } else {
          dispatch(failed(res.data));
        }
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const logout = (data) => {
  return async (dispatch) => {
    try {
      await axios
        .delete(`${DEV_BASE}/logout`, {
          headers: {
            refreshToken: data,
          },
        })
        .then((res) => {
          const { success } = res.data;
          console.log(res);
          if (success) {
            dispatch(userLogout(res.data));
            dispatch(deleteToLocalStorage());
          } else {
            dispatch(failed(res.data));
          }
        });
    } catch (err) {
      console.log(err);
    }
  };
};

export default AuthSlice.reducer;