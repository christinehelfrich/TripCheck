import axios from "axios";
import { baseURL } from "../../utils/constants";

export const createItinerary = (itinerary) => {
    return axios.post(`${baseURL}/itinerary`, itinerary)
    .then((res) => {
        return res
      })
    .catch((err) => {
      return err
    })

}

export const getAllItineraries = () => {
    return axios.get(`${baseURL}/itineraries`)
    .then((res) => {
        return res
      })
    .catch((err) => {
      return err
    })
}