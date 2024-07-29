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

export const getItineraryById = (itineraryId) => {
  return axios.get(`${baseURL}/itinerary/${itineraryId}`)
  .then((res) => {
    console.log('NO ERR', res)
      return res
    })
  .catch((err) => {
    console.log('ERR', err)
    return err
  })
}

export const updateItinerary = (itineraryId, itinerary) => {
  console.log(itinerary)
  return axios.put(`${baseURL}/itinerary/${itineraryId}`, itinerary)
  .then((res) => {
    console.log('NO ERR', res)
      return res
    })
  .catch((err) => {
    console.log('ERR', err)
    return err
  })
}