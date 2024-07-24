import axios from "axios";
import { baseURL } from "../../utils/constants";

export const createItinerary = (itinerary) => {
    return axios.post(`${baseURL}/itinerary`, itinerary)
    .then((res) => {
        return 'success'
      })

}

export const getAllItineraries = () => {
    console.log('here')
    return axios.get(`${baseURL}/itineraries`)
    .then((res) => {
        return res
      })
}