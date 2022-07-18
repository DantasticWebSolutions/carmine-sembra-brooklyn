import axios from "axios";
import {
  FOTO_LIST_REQUEST,
  FOTO_LIST_SUCCESS,
  FOTO_LIST_FAIL,
  FOTO_DELETE_REQUEST,
  FOTO_DELETE_SUCCESS,
  FOTO_DELETE_FAIL,
  FOTO_CREATE_FAIL,
  FOTO_CREATE_SUCCESS,
  FOTO_CREATE_REQUEST,
  FOTO_UPDATE_REQUEST,
  FOTO_UPDATE_SUCCESS,
  FOTO_UPDATE_FAIL,
  FOTO_DETAILS_SUCCESS,
  FOTO_DETAILS_FAIL,
  FOTO_DETAILS_REQUEST,
} from "../constants/fotoConstants";
import { logout } from "./userActions";

export const listFotos = () => async (dispatch) => {
  try {
    dispatch({ type: FOTO_LIST_REQUEST });

    const { data } = await axios.get(`/api/fotos`);

    dispatch({
      type: FOTO_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FOTO_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listFotoDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: FOTO_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/fotos/${id}`);

    dispatch({
      type: FOTO_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FOTO_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteFoto = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: FOTO_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/fotos/${id}`, config);

    dispatch({
      type: FOTO_DELETE_SUCCESS,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: FOTO_DELETE_FAIL,
      payload: message,
    });
  }
};

export const createFoto = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: FOTO_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/fotos`, {}, config);

    dispatch({
      type: FOTO_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: FOTO_CREATE_FAIL,
      payload: message,
    });
  }
};

export const updateFoto = (foto) => async (dispatch, getState) => {
  try {
    dispatch({
      type: FOTO_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`/api/fotos/${foto._id}`, foto, config);

    dispatch({
      type: FOTO_UPDATE_SUCCESS,
      payload: data,
    });
    dispatch({ type: FOTO_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: FOTO_UPDATE_FAIL,
      payload: message,
    });
  }
};
