import { Checkbox, FormControlLabel, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function PaymentDetail() {
  return (
    <Box component="form" autoComplete="off">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            variant="standard"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            variant="standard"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardExpiryDate"
            label="Expiry date"
            variant="standard"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="cardCVV"
            label="CVV"
            variant="standard"
            fullWidth
            helperText="Last three digits on signature strip"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <FormControlLabel
            control={<Checkbox />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default PaymentDetail;
