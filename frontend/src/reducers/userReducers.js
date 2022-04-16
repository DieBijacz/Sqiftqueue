import { USER_DETAILS_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_RESET, USER_DETAILS_SUCCESS, USER_LOCATION_FAIL, USER_LOCATION_REQUEST, USER_LOCATION_RESET, USER_LOCATION_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_RESET, USER_REGISTER_SUCCESS } from "../constants/userConstants";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true }
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload }
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload }
    case USER_LOGOUT:
      return {}
    default:
      return state
  }
}

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true }
    case USER_REGISTER_SUCCESS:
      return { loading: false, success: true }
    case USER_REGISTER_FAIL:
      return { loading: false, success: false, error: action.payload }
    case USER_REGISTER_RESET:
      return {}
    default:
      return state
  }
}

export const userDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { loading: true }
    case USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload }
    case USER_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    case USER_DETAILS_RESET:
      return {}
    default:
      return state
  }
}

export const userLocationReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOCATION_REQUEST:
      return { loading: true }
    case USER_LOCATION_SUCCESS:
      return { loading: false, userLocation: action.payload }
    case USER_LOCATION_FAIL:
      return { loading: false, error: action.payload }
    case USER_LOCATION_RESET:
      return {}
    default:
      return state
  }
}