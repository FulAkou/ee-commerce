// import {
//   USER_LOGIN_REQ,
//   USER_LOGIN_REQ_FAIL,
//   USER_LOGIN_REQ_SUCCESS,
//   USER_LOGOUT,
//   USER_REGISTER_REQ,
//   USER_REGISTER_REQ_FAIL,
//   USER_REGISTER_REQ_SUCCESS,
// } from "../Constants/User";

import {
  USER_LOGIN_REQ,
  USER_LOGIN_REQ_FAIL,
  USER_LOGIN_REQ_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_REQ,
  USER_REGISTER_REQ_FAIL,
  USER_REGISTER_REQ_SUCCESS,
} from "../Constants/User";

// //user login
export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQ:
      return { loading: true };
    case USER_LOGIN_REQ_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_REQ_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

// //user register
export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQ:
      return { loading: true };
    case USER_REGISTER_REQ_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_REGISTER_REQ_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// const createReducer = (request, success, fail, initialState = {}) => {
//   return (state = initialState, action) => {
//     switch (action.type) {
//       case request:
//         return { ...state, loading: true };
//       case success:
//         return {
//           ...state,
//           loading: false,
//           success: true,
//           userInfo: action.payload,
//         };
//       case fail:
//         return { ...state, loading: false, error: action.payload };
//       default:
//         return state;
//     }
//   };
// };

// // Utilisation pour le login et l'inscription
// export const userLoginReducer = createReducer(
//   USER_LOGIN_REQ,
//   USER_LOGIN_REQ_SUCCESS,
//   USER_LOGIN_REQ_FAIL,
//   USER_LOGOUT
// );

// export const userRegisterReducer = createReducer(
//   USER_REGISTER_REQ,
//   USER_REGISTER_REQ_SUCCESS,
//   USER_REGISTER_REQ_FAIL
// );
