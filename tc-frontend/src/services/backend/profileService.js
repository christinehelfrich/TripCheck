import axios from "axios";
import { baseURL } from "../../utils/constants";

export const createProfile = (profile) => {
    console.log('profile', profile)
    axios.post(`${baseURL}/profile`, profile)
    .then((res) => {
        return 'success'
      })
}

