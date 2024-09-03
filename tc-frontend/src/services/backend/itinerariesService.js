import axios from "axios";
import { baseURL } from "../../utils/constants";


export const createItinerary = (itinerary, token) => {
    return axios.post(`${baseURL}/itinerary`, itinerary, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
        return res
      })
    .catch((err) => {
      return err
    })

}

export const getAllItineraries = (token) => {
    return axios.get(`${baseURL}/itineraries`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
        return res
      })
    .catch((err) => {
      return err
    })
}

export const getItinerariesByProfileId = (token, profileId) => {
  return axios.get(`${baseURL}/itineraries/${profileId}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  .then((res) => {
      return res
    })
  .catch((err) => {
    return err
  })
}

export const getItineraryById = (itineraryId, token) => {
  return axios.get(`${baseURL}/itinerary/${itineraryId}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  .then((res) => {
      return res
    })
  .catch((err) => {
    return err
  })
}

export const updateItinerary = (itineraryId, itinerary, token) => {
  return axios.put(`${baseURL}/itinerary/${itineraryId}`, itinerary, {
    headers: { Authorization: `Bearer ${token}` },
  })
  .then((res) => {
      return res
    })
  .catch((err) => {
    return err
  })
}