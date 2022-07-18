import {
  FOTO_LIST_REQUEST,
  FOTO_LIST_SUCCESS,
  FOTO_LIST_FAIL,
  FOTO_DELETE_REQUEST,
  FOTO_DELETE_SUCCESS,
  FOTO_DELETE_FAIL,
  FOTO_CREATE_RESET,
  FOTO_CREATE_FAIL,
  FOTO_CREATE_SUCCESS,
  FOTO_CREATE_REQUEST,
  FOTO_UPDATE_REQUEST,
  FOTO_UPDATE_SUCCESS,
  FOTO_UPDATE_FAIL,
  FOTO_UPDATE_RESET,
  FOTO_DETAILS_FAIL,
  FOTO_DETAILS_REQUEST,
  FOTO_DETAILS_SUCCESS,
} from "../constants/fotoConstants";

export const fotoListReducer = (state = { fotos: [] }, action) => {
  switch (action.type) {
    case FOTO_LIST_REQUEST:
      return { loading: true, fotos: [] };
    case FOTO_LIST_SUCCESS:
      return {
        loading: false,
        fotos: action.payload.fotos,
      };
    case FOTO_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const fotoDetailsReducer = (state = { foto: [] }, action) => {
  switch (action.type) {
    case FOTO_DETAILS_REQUEST:
      return { ...state, loading: true };
    case FOTO_DETAILS_SUCCESS:
      return { loading: false, foto: action.payload };
    case FOTO_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const fotoDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case FOTO_DELETE_REQUEST:
      return { loading: true };
    case FOTO_DELETE_SUCCESS:
      return { loading: false, success: true };
    case FOTO_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const fotoCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case FOTO_CREATE_REQUEST:
      return { loading: true };
    case FOTO_CREATE_SUCCESS:
      return { loading: false, success: true, foto: action.payload };
    case FOTO_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case FOTO_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const fotoUpdateReducer = (state = { foto: {} }, action) => {
  switch (action.type) {
    case FOTO_UPDATE_REQUEST:
      return { loading: true };
    case FOTO_UPDATE_SUCCESS:
      return { loading: false, success: true, foto: action.payload };
    case FOTO_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case FOTO_UPDATE_RESET:
      return { foto: {} };
    default:
      return state;
  }
};
