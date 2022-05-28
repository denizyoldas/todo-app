// auth service

import axios from 'axios'
import { LoginModel, RegisterModel } from '../types'

const URL = 'http://localhost:3200/api/auth/'

// axios.interceptors.request.use((config) => {
//   // url
//   config.url = `${config.url}`;
// })

const register = async (user: RegisterModel) => {
  const res = await axios.post(`${URL}register`, user)
  console.log(res)
  return res
}

const login = async (user: LoginModel) => {
  try {
    const res = await axios.post(`${URL}login`, user)
    console.log(res)
    return res
  } catch (err) {
    console.log(err)
  }
}

export { register, login }
