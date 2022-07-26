import React, { useState, MouseEvent } from "react";
import { useNavigate } from "react-router-dom"
import { Autocomplete } from '@react-google-maps/api'
import { AppBar, Button, Toolbar, Typography, InputBase, Box, Tooltip, IconButton, Avatar, Menu, MenuItem } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

import useStyles from './styles'
import axios from "axios";

const settings = ['Profile', 'Logout'];

const Header = ({ setCoordinates, isSigned, setIsSigned }) => {
  const [isSignedIn, setIsSignedIn] = useState(isSigned);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  let navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  const handleCloseUserMenu = (setting) => {
    console.log({setting})
    if(setting === "Logout") {
      
       const response = axios.post("http://localhost:8080/logout").then(setIsSignedIn(false))
       console.log({isSignedIn})
       //  let isSigned = false
       console.log("logged out")
       return response
    }
    navigate(`/${setting}`)
    setAnchorElUser(null);
  };

  const classes = useStyles();
  const [autocomplete, setAutoComplete] = useState(null)

  const onLoad = (autoC) => setAutoComplete(autoC)

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoordinates({lat, lng})
  }

  return (
    <AppBar position="static">
        <Toolbar className={classes.toolbar}>
            <Button color="inherit" size="large" href="/">
                Goplay
            </Button>
            <Box display="flex">
                <Typography variant="h6" className={classes.title}>
                    Explore new places
                </Typography>
                <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase placeholder="Search..." classes={{ root: classes.inputRoot, input: classes.inputInput}}/>
                    </div>
                </Autocomplete>
            </Box>
            {/* {!isSignedIn && (<Box sx={{ flexGrow: 0 }}>
                <Button href="/login" color="inherit">
                    Login
                </Button>
                <Button href="/register" color="inherit">
                    Register
                </Button>
                <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="https://scontent-ord5-1.xx.fbcdn.net/v/t1.6435-9/30698366_1596197657144207_3321973176992268288_n.png?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=FV5X-tJ86uIAX8D0uUq&_nc_ht=scontent-ord5-1.xx&oh=00_AT8d47--Z-pT_mrTu4Sd258mJTs6Ogknxc5Wj_ex59xz_g&oe=63063753" />
                </IconButton>
                </Tooltip>
                <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                >
                {settings.map((setting) => (
                    <MenuItem key={setting} onClick={() => handleCloseUserMenu(setting)}>
                    <Typography textalign="center">{setting}</Typography>
                    </MenuItem>
                ))}
                </Menu>
          </Box>)} */}
            {!isSignedIn && ((<Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="https://scontent-ord5-1.xx.fbcdn.net/v/t1.6435-9/30698366_1596197657144207_3321973176992268288_n.png?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=FV5X-tJ86uIAX8D0uUq&_nc_ht=scontent-ord5-1.xx&oh=00_AT8d47--Z-pT_mrTu4Sd258mJTs6Ogknxc5Wj_ex59xz_g&oe=63063753" />
            </IconButton>
            </Tooltip>
            <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
            >
            {settings.map((setting) => (
                <MenuItem key={setting} onClick={() => handleCloseUserMenu(setting)}>
                <Typography textalign="center">{setting}</Typography>
                </MenuItem>
            ))}
            </Menu>
      </Box>))}
        </Toolbar>
    </AppBar>
  )
}

export default Header;