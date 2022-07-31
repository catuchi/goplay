import React, { useState, useEffect, createRef } from "react";
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core'

import LocationDetails from '../LocationDetails/LocationDetails'
import useStyles from './styles'

const List = ({ places, childClicked, isLoading, type, setType, rating, setRating }) => {
  const classes = useStyles();
  const [elRefs, setElRefs] = useState([])

  useEffect(() => {
    const refs = Array(places?.length).fill().map((_, i) => elRefs[i] || createRef());

    setElRefs(refs);
  }, [places])

  return (
    <div className={classes.container}>
        <Typography variant="h4">Sport centres around you</Typography>
        {isLoading ? (
            <div className={classes.loading}>
                <CircularProgress size="5rem" />
            </div>
        ) : (
        <>
            <FormControl className={classes.formControl}>
                <InputLabel>Sport</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    {/* <MenuItem value="restaurants">Restaurants</MenuItem> */}
                    {/* <MenuItem value="hotels">Hotels</MenuItem> */}
                    {/* <MenuItem value="attractions">Attractions</MenuItem> */}
                    <MenuItem value="175,289,81,74,76,134,89,78">All</MenuItem>
                    <MenuItem value="175">Ice Hockey</MenuItem>
                    <MenuItem value="289">Lacrosse</MenuItem>
                    <MenuItem value="81">Soccer</MenuItem>
                    <MenuItem value="74">Baseball</MenuItem>
                    <MenuItem value="76">Cricket</MenuItem>
                    <MenuItem value="134">Tennis</MenuItem>
                    <MenuItem value="89">Rugby</MenuItem>
                    <MenuItem value="78">Basketball</MenuItem>
                </Select>
            </FormControl>
            {/* <FormControl className={classes.formControl}> */}
                {/* <InputLabel>Rating</InputLabel> */}
                {/* <Select value={rating} onChange={(e) => setRating(e.target.value)}> */}
                    {/* <MenuItem value={0}>All</MenuItem> */}
                    {/* <MenuItem value={3}>Above 3.0</MenuItem> */}
                    {/* <MenuItem value={4}>Above 4.0</MenuItem> */}
                    {/* <MenuItem value={4.5}>Above 4.5</MenuItem> */}
                {/* </Select> */}
            {/* </FormControl> */}
            <Grid container spacing={3} className={classes.list}>
                {places?.map((place, i) => (
                <Grid ref={elRefs[i]} item key={i} xs={12}>
                    <LocationDetails 
                        type={type}
                        place={place} 
                        selected={Number(childClicked) === i} 
                        refProp={elRefs[i]} 
                    />
                </Grid>
                ))}
            </Grid>
        </>
        )}
    </div>
  )
}

export default List;