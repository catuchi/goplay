import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "../Header/Header";
import { Container, Button, InputLabel } from "@material-ui/core";
import Footer from "../Footer/Footer";

export default function Profile() {
  return (
    <>
      <CssBaseline />
      <Header />
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom>
              PROFILE PAGE
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <InputLabel>First Name</InputLabel>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  // label="First name"
                  fullWidth
                  autoComplete="given-name"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel>Last Name</InputLabel>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  // label="Last name"
                  fullWidth
                  autoComplete="family-name"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel>Email</InputLabel>
                <TextField
                  required
                  id="address1"
                  name="address1"
                  // label="Address line 1"
                  fullWidth
                  autoComplete="shipping address-line1"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel>Password</InputLabel>
                <TextField
                  id="address2"
                  name="address2"
                  // label="Address line 2"
                  fullWidth
                  autoComplete="shipping address-line2"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel>Confirm Password</InputLabel>
                <TextField
                  id="address2"
                  name="address2"
                  // label="Address line 2"
                  fullWidth
                  autoComplete="shipping address-line2"
                  variant="standard"
                />
              </Grid>
              {/* <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="city"
                  name="city"
                  label="City"
                  fullWidth
                  autoComplete="shipping address-level2"
                  variant="standard"
                />
              </Grid> */}
              {/* <Grid item xs={12} sm={6}>
                <TextField
                  id="state"
                  name="state"
                  label="State/Province/Region"
                  fullWidth
                  variant="standard"
                />
              </Grid> */}
              {/* <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="zip"
                  name="zip"
                  label="Zip / Postal code"
                  fullWidth
                  autoComplete="shipping postal-code"
                  variant="standard"
                />
              </Grid> */}
              {/* <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="country"
                  name="country"
                  label="Country"
                  fullWidth
                  autoComplete="shipping country"
                  variant="standard"
                />
              </Grid> */}
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="secondary"
                      name="saveAddress"
                      value="yes"
                    />
                  }
                  label="Use this address for payment details"
                />
              </Grid> */}
              <Grid item xs={12}></Grid>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  mt: 3,
                  ml: 1,
                  pt: 6,
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                {/* {activeStep === steps.length - 1 ? "Place order" : "Next"} */}
                Update Profile
              </Button>
            </Grid>
          </Container>
        </Box>
      </main>
      <Footer />
    </>
  );
}
