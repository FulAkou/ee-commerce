import axios from "axios";
import { BASE_URL } from "../Constants/BASE_URL";
import { CART_ITEM_CLEAR } from "../Constants/Cart";
import {
  ORDER_DETAIL_REQ,
  ORDER_DETAIL_REQ_FAIL,
  ORDER_DETAIL_REQ_SUCCESS,
  ORDER_LIST_REQ,
  ORDER_LIST_REQ_FAIL,
  ORDER_LIST_REQ_SUCCESS,
  ORDER_PAYMENT_REQ,
  ORDER_PAYMENT_REQ_FAIL,
  ORDER_PAYMENT_REQ_SUCCESS,
  ORDER_REQ,
  ORDER_SUCCESS,
} from "../Constants/Order";
import { userLogoutAction } from "./User";

//order action
export const orderAction = (order) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_REQ }); // Dispatch ORDER_REQ to set loading state
    const userInfo = getState().userLoginReducer.userInfo; // Get user info from state
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.post(`${BASE_URL}/api/orders`, order, config); // Make API call to create order
    dispatch({ type: ORDER_SUCCESS, payload: data }); // Dispatch ORDER_SUCCESS with order data
    dispatch({ type: CART_ITEM_CLEAR, payload: data }); // Clear cart items after order creation
  } catch (error) {
    console.log(error);
  }
};

//order payment action
export const orderPaymentAction =
  (orderId, paymentResult) => async (dispatch, getState) => {
    try {
      dispatch({ type: ORDER_PAYMENT_REQ }); // Dispatch ORDER_PAYMENT_REQ to set loading state
      const userInfo = getState().userLoginReducer.userInfo; // Get user info from state
      const config = {
        headers: {
          "Content-Type": "application/json", // Set content type to JSON
          Authorization: `Bearer ${userInfo.token}`, // Include user token for authorization
        },
      };
      const { data } = await axios.put(
        `${BASE_URL}/api/orders/${orderId}/payment`,
        paymentResult,
        config
      ); // Make API call to update order payment
      dispatch({ type: ORDER_PAYMENT_REQ_SUCCESS, payload: data }); // Dispatch ORDER_PAYMENT_REQ_SUCCESS with updated order data
      dispatch(orderDetailAction(orderId)); // Optionally fetch the order details again to update the state
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        // Handle token failure (optional)
        dispatch(userLogoutAction());
      }
      dispatch({
        type: ORDER_PAYMENT_REQ_FAIL, // Dispatch ORDER_PAYMENT_REQ to indicate failure
        payload: message, // Pass the error message
      });
    }
  };

//order detail action
export const orderDetailAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_DETAIL_REQ }); // Dispatch ORDER_DETAIL_REQ to set loading state
    const userInfo = getState().userLoginReducer.userInfo; // Get user info from state
    const config = {
      headers: {
        "Content-Type": "application/json", // Set content type to JSON
        Authorization: `Bearer ${userInfo.token}`, // Include user token for authorization
      },
    };
    const { data } = await axios.get(`${BASE_URL}/api/orders/${id}`, config); // Make API call to get order details
    dispatch({ type: ORDER_DETAIL_REQ_SUCCESS, payload: data }); // Dispatch ORDER_DETAIL_REQ_SUCCESS with order details
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      // Handle token failure (optional)
      dispatch(userLogoutAction());
    }
    dispatch({
      type: ORDER_DETAIL_REQ_FAIL, // Dispatch ORDER_PAYMENT_REQ to indicate failure
      payload: message, // Pass the e rror message
    });
  }
};

//order list action

export const orderListAction = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_LIST_REQ }); // Dispatch ORDER_LIST_REQ to set loading state
    const userInfo = getState().userLoginReducer.userInfo; // Get user info from state
    const config = {
      headers: {
        "Content-Type": "application/json", // Set content type to JSON
        Authorization: `Bearer ${userInfo.token}`, // Include user token for authorization
      },
    };
    const { data } = await axios.get(`${BASE_URL}/api/orders`, config); // Make API call to get order details
    dispatch({ type: ORDER_LIST_REQ_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      // Handle token failure (optional)
      dispatch(userLogoutAction());
    }
    dispatch({
      type: ORDER_LIST_REQ_FAIL, // Dispatch ORDER_LIST_REQ_FAIL to indicate failure
      payload: message, // Pass the error message
    });
  }
};
