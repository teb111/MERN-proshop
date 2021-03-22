import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "../constants/userConstants";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    // setting loading to false and adding whatever is in the payload to the userInfo
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    // setting loading to false and adding whatever is in the payload to the error we get back
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };

    case USER_LOGOUT:
      return {};

    default:
      return state;
  }
};
