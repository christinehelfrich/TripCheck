import axios from "axios";
import { baseURL } from "../../utils/constants";

export const createProfile = (profile) => {
    return axios.post(`${baseURL}/profile`, profile)
    .then((res) => {
        return 'success'
      })
}

