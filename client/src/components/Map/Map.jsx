import React, { useState } from "react";
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import Rating from '@material-ui/lab/Rating'

import useStyles from './styles'
import mapStyles from './mapStyles'

const Map = ({ type, setCoordinates, setBounds, coordinates, places, setChildClicked, weatherData }) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery('(min-width:600px)')
  // console.log({type})

  const srcUrl = (type) => {
    if(type === '175') {
      return 'https://ydn-wpengine.netdna-ssl.com/wp-content/uploads/2019/12/mhockey_Credit-muscosportsphotos.com_.jpg'
    }
    if(type === '289') {
      return 'https://varsityblues.ca/images/2021/11/4/Sam_Gaskin.png?width=1128&height=625&mode=crop'
    }
    if(type === '81') {
      return 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Football_iu_1996.jpg/1280px-Football_iu_1996.jpg'
    }
    if(type === '74') {
      return 'https://static01.nyt.com/images/2020/08/24/sports/24mlb-kepner-1/merlin_176084667_69b1099b-0b7e-41ce-bfdf-e407899f10dc-jumbo.jpg?quality=75&auto=webp'
    }
    if(type === '76') {
      return 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Muralitharan_bowling_to_Adam_Gilchrist.jpg/1280px-Muralitharan_bowling_to_Adam_Gilchrist.jpg'
    }
    if(type === '134') {
      return 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Tennis_Racket_and_Balls.jpg/800px-Tennis_Racket_and_Balls.jpg?20070618225008'
    }
    if(type === '89') {
      return 'https://www.tsn.ca/polopoly_fs/1.1828124.1658495389!/fileimage/httpImage/image.jpg_gen/derivatives/landscape_620/canada-women-s-rugby.jpg'
    }
    if(type === '78') {
      return 'https://www.ctvnews.ca/polopoly_fs/1.5216003.1607027329!/httpImage/image.jpg_gen/derivatives/landscape_1020/image.jpg'
    }
  }

  return (
    <div className={classes.mapContainer}>
        <GoogleMapReact
            // bootstrapURLKeys={{ key: 'AIzaSyBFunsUmQ7N12nT29zMLRFg_srdOdtHSuo' }}
            // bootstrapURLKeys={{ key: 'AIzaSyA_hpy3DOjND1a54GcYUxOYZRn9QiqiCgE' }}
            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={14}
            margin={[50, 50, 50, 50]}
            options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
            onChange={(e) => {
              setCoordinates({ lat: e.center.lat, lng: e.center.lng })
              setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
            }}
            onChildClick={(child) => setChildClicked(child)}
        >
            {places?.map((place, i) => (
              <div
                className={classes.markerContainer}
                // lat={Number(place.latitude)}
                // lng={Number(place.longitude)}
                lat={place.geometry.coordinates[1]}
                lng={place.geometry.coordinates[0]}
                key={i}
              >
                {
                  !isDesktop ? (
                    <LocationOnOutlinedIcon color="primary" fontSize="large"/>
                  ) : (
                    <Paper elevation={3} className={classes.paper}>
                        <Typography className={classes.typography} variant="subtitle2" gutterBottom>
                           {place.properties.name}
                        </Typography>
                        <img 
                          className={classes.pointer}
                          // src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                          src={srcUrl(type) ? srcUrl(type) : 'https://thesportsu.com/wp-content/uploads/2015/06/all_sports.jpg'}
                          alt={place.properties.name}
                        />
                        {/* <Rating size="small" value={Number(place.rating)} readOnly/> */}
                    </Paper>
                  )
                }
              </div>
            ))}
            {weatherData?.list?.map((data, i) => (
              <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
                  <img height={100} src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}/>
              </div>
            ))}
        </GoogleMapReact>
    </div>
  )
}

export default Map;