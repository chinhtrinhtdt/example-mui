import { Checkbox, FormControlLabel, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";

function ShippingAdrdress() {
  const renderTextField = (id, label) => {
    <Grid item xs={12} md={6}>
      <TextField
        required
        id="firstName"
        label="First name"
        variant="standard"
        fullWidth
      />
    </Grid>;
  };

  return (
    <Box component="form" autoComplete="off">
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="firstName"
            label="First name"
            variant="standard"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="lastName"
            label="Last name"
            variant="standard"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            required
            id="address1"
            label="Address line 1"
            variant="standard"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            id="address2"
            label="Address line 2"
            variant="standard"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="city"
            label="City"
            variant="standard"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="province"
            label="State/Province/Region"
            variant="standard"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="zipCode"
            label="Zip / Postal code"
            variant="standard"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="country"
            label="Country"
            variant="standard"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <FormControlLabel
            control={<Checkbox />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default ShippingAdrdress;
