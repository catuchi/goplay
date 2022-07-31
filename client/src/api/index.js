import axios from "axios";

export const getLocationsData = async (type, sw, ne) => {
  try {
    const {
      data: {
        data: { features },
      },
    } = await axios.get(
      `https://sportplaces.api.decathlon.com/api/v1/places?sw=${sw.lng},${sw.lat}&ne=${ne.lng},${ne.lat}&sports=${type}&limit=20`
    );
    console.log(features);
    return features;
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherData = async (lat, lng) => {
  try {
    const { data } = await axios.get(
      "https://community-open-weather-map.p.rapidapi.com/find",
      {
        params: {
          lat: lat,
          lon: lng,
        },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
          "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
        },
      }
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const login = async (creds) => {
  try {
    const response = await axios.post(`http://localhost:8080/login`, creds);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const updateProfile = async (creds) => {
  try {
    const response = await axios.get(`http://localhost:8080/profile`, creds);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const viewProfile = async (creds) => {
  try {
    const response = await axios.get(`http://localhost:8080/profile`, creds);
    return response;
  } catch (error) {
    console.log(error);
  }
};
