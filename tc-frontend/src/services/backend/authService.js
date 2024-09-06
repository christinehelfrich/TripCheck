import axios from "axios";
import { baseURL } from "../../utils/constants";

export const login = (info) => {
    return axios.post(
    `${baseURL}/login`, 
    info
  )
    .then((res) => {
        return res
    })
    .catch((err) => {
      return err
    })
}

export const isTokenValid = (token) => {
  return axios.get(
  `${baseURL}/isTokenvalid`, {
    headers: { Authorization: `Bearer ${token}` },
  }
)
  .then((res) => {
      return res
  })
  .catch((err) => {
    return err
  })
}