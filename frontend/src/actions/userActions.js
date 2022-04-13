import axios from 'axios'
import { USER_LOCATION_FAIL, USER_LOCATION_REQUEST, USER_LOCATION_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../constants/userConstants"

// LOGIN
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST
    })

    const config = { headers: { 'Content-Type': 'application/json' } }
    const { data } = await axios.post('/api/users/login', { email, password }, config)

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data
    })

    localStorage.setItem('userInfo', JSON.stringify(data))

  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.message
    })
  }
}

// LOGOUT
export const logout = () => async (dispatch) => {
  localStorage.removeItem('userInfo')

  dispatch({ type: USER_LOGOUT })
}

// REGISTER
export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST })

    const config = { headers: { 'Content-Type': 'application/json' } }
    const { data } = await axios.post('/api/users', { name, email, password }, config)

    setTimeout(() => {
      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data
      })
    }, 3000)

  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: error.message
    })
  }
}

export const userLocation = (location) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_LOCATION_REQUEST })

    // get user token for veryfication
    const { userLogin: { userInfo } } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`, //! token
      },
    }

    const { data } = await axios.put('/api/users/profile', { location }, config)

    setTimeout(() => {
      dispatch({
        type: USER_LOCATION_SUCCESS,
        payload: data
      })
    }, 3000)

  } catch (error) {
    dispatch({
      type: USER_LOCATION_FAIL,
      payload: error.message
    })
  }
}