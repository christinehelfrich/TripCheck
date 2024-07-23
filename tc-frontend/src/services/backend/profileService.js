import axios from "axios";
import { baseURL } from '../../utils/constant';

export const createProfile = (profile) => {
    axios.post(`${baseURL}/profile`, {profile})
    .then((res) => {
        return 'success'
      })
    .error((err) => {
        return 'error'
    })
}

