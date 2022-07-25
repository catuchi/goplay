import axios from "axios";

export const getLocationsData = async (type, sw, ne) => {
  try {
    const {
      data: {
        data: { features },
      },
    } = await axios.get(
      `https://sportplaces.api.decathlon.com/api/v1/places?sw=${sw.lng},${sw.lat}&ne=${ne.lng},${ne.lat}&sports=${type}&limit=20`
      // `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      // {
      //   params: {
      //     bl_latitude: sw.lat,
      //     tr_latitude: ne.lat,
      //     bl_longitude: sw.lng,
      //     tr_longitude: ne.lng,
      //   },
      //   headers: {
      //     "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
      //     // "X-RapidAPI-Key": "KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA",
      //     "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      //   },
      // }
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
