import axios from "axios";

import {
  FETCH_LIST_REQUEST,
  FETCH_LIST_SUCCESS,
  FETCH_LIST_FAILURE,
} from "./newsListTypes";

export const fetchListRequest = () => {
  return {
    type: FETCH_LIST_REQUEST,
  };
};

export const fetchListSuccess = (list) => {
  return {
    type: FETCH_LIST_SUCCESS,
    payload: list,
  };
};

export const fetchListFailure = (error) => {
  return {
    type: FETCH_LIST_FAILURE,
    payload: error,
  };
};

export const fetchList = (sourceId) => {
  return (dispatch) => {
    dispatch(fetchListRequest());
    axios
      .get(
        "https://newsapi.org/v2/everything?sources=" +
            sourceId +
        "&apiKey=9f0b2b206db44fbd9fb27ca34e33c828"
      )
      .then((response) => {
        const list = response.data.articles
        dispatch(fetchListSuccess(list));
      })
      .catch((error) => {
        dispatch(fetchListFailure(error.message));
      });
  };
};
