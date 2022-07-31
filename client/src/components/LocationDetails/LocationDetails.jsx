import React from "react";
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import Rating from '@material-ui/lab/Rating'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import useStyles from './styles'

const LocationDetails = ({ type, place, selected, refProp }) => {
  const classes = useStyles()
  // console.log({place})

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

  const active = (id) => {
    if(id === 175) {
      return 'Ice Hockey'
    }
    if(id === 289) {
      return 'Lacrosse'
    }
    if(id === 81) {
      return 'Soccer'
    }
    if(id === 74) {
      return 'Baseball'
    }
    if(id === 76) {
      return 'Cricket'
    }
    if(id === 134) {
      return 'Tennis'
    }
    if(id === 89) {
      return 'Rugby'
    }
    if(id === 78) {
      return 'Basketball'
    }
  }

  if(selected) {
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const onClickShare = () => {
    navigator.clipboard.writeText(place.properties.contact_details.website).then(function() {
      
      toast("Website copied to clipboard")
    }, function() {
      /* clipboard write failed */
    });
  }

  const generateChips = () => {
    return place?.properties?.activities?.map((activity) => {
      if (active(activity.sport_id)) {
        return (<Chip key={active(activity.sport_id)} size="small" label={active(activity.sport_id)} className={classes.chip}/>)
      }
    })
  }

  return (
    <Card elevation={6}>
        <CardMedia 
          style={{height: 350}}
          image={srcUrl(type) ? srcUrl(type) : 'https://thesportsu.com/wp-content/uploads/2015/06/all_sports.jpg'}
          title={place.properties.name}
        />
        <CardContent>
            <Typography gutterBottom variant="h5">{place.properties.name}</Typography>
            {generateChips()}
            {place?.properties?.address_components?.address && (
              <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
                <LocationOnIcon /> {place.properties.address_components.address}
              </Typography>
            )}
            {place?.properties?.contact_details?.phone && (
              <Typography gutterBottom variant="body2" color="textSecondary" className={classes.spacing}>
                <PhoneIcon /> {place.properties.contact_details.phone}
              </Typography>
            )}
            {place?.properties?.contact_details?.email && (
              <Typography gutterBottom variant="body2" color="textSecondary" className={classes.spacing}>
                <EmailOutlinedIcon /> {place.properties.contact_details.email}
              </Typography>
            )}
            <CardActions>
                {place.properties.contact_details.website && 
                <Button size="small" color="primary" onClick={() => window.open(place.properties.contact_details.website, '_blank')}>
                    Website
                </Button>
                }
                {!place.properties.contact_details.website && 
                  <Typography gutterBottom variant="body2" color="textSecondary" className={classes.spacing}>
                    No website available
                  </Typography>
                }
                <Button size="small" color="secondary" onClick={() => window.open(place.properties.contact_details.website, '_blank')}>
                    Save
                </Button>
                {place.properties.contact_details.website && <Button size="small" color="primary" onClick={onClickShare}>
                    Share
                </Button>}
                
            </CardActions>
            <ToastContainer />
        </CardContent>
    </Card>
  )
}

export default LocationDetails;