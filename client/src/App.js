import React, { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

import { getLocationsData, getWeatherData } from "./api";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [places, setPlaces] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  const [childClicked, setChildClicked] = useState(null);

  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [bounds, setBounds] = useState({});

  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState("175,289,81,74,76,134,89,78");
  const [rating, setRating] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  // useEffect(() => {
  //   const filteredPlaces = places?.filter((place) => place.rating > rating);

  //   setFilteredPlaces(filteredPlaces);
  // }, [rating]);

  useEffect(() => {
    if (bounds.sw && bounds.ne) {
      setIsLoading(true);

      // getWeatherData(coordinates.lat, coordinates.lng).then((data) =>
      //   setWeatherData(data)
      // );

      // getLocationsData(type, bounds.sw, bounds.ne).then((data) => {
      //   setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
      //   setFilteredPlaces([]);
      //   setIsLoading(false);
      // });
      getLocationsData(type, bounds.sw, bounds.ne).then((data) => {
        setPlaces(data?.filter((place) => place.properties.name));
        setFilteredPlaces([]);
        setIsLoading(false);
      });
    }
  }, [type, bounds]);

  return (
    <>
      <CssBaseline />
      <Header setCoordinates={setCoordinates} />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List
            places={filteredPlaces.length ? filteredPlaces : places}
            childClicked={childClicked}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            type={type}
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={places}
            setChildClicked={setChildClicked}
            weatherData={weatherData}
          />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default App;
