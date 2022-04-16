import axios from 'axios'
import { USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_LOCATION_FAIL, USER_LOCATION_REQUEST, USER_LOCATION_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../constants/userConstants"

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

// GET USER PROFILE
export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_DETAILS_REQUEST,
    })

    // Get userInfo from state
    const {
      userLogin: { userInfo },
    } = getState()

    // prepare headers with user token inside
    const config = {
      headers: {
        'Content-Type': 'application/json',
        // token
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    // get data from specific user based on passed id
    const { data } = await axios.get(`/api/users/${id}`, config)

    // pass data to reducer
    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: USER_LOCATION_FAIL,
      payload: error.message
    })
  }
}

// UPDATE USER LOCATION
export const updateUserLocation = (location) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_LOCATION_REQUEST })

    // get user token for veryfication
    const { userLogin: { userInfo } } = getState()
    const userId = userInfo._id

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`, //! token
      },
    }

    const { data } = await axios.put('/api/users/profile', { userId, location }, config)

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