import {
  Checkbox,
  FormControlLabel,
  Grid,
  Box,
  TextField,
} from "@mui/material";
import { useState } from "react";

function PaymentDetail(props) {
  const { setValidation } = props;

  const initialState = {
    cardName: "",
    cardNumber: "",
    cardExpiryDate: "",
    cardCVV: "",
  };

  const [paymentDetail, setPaymentDetail] = useState(initialState);

  const handleChangeInput = (e) => {
    setPaymentDetail({ ...paymentDetail, [e.target.id]: e.target.value });
    const isCheck = processValidate();
    setValidation(isCheck);
  };

  const processValidate = () => {
    for (const property in paymentDetail) {
      if (paymentDetail[property] === "") return false;
    }
    return true;
  };

  const renderTextField = ({ id, label, ...props }) => {
    return (
      <Grid item xs={12} md={6}>
        <TextField
          required
          id={id}
          label={label}
          variant="standard"
          fullWidth
          {...props}
          onChange={handleChangeInput}
        />
      </Grid>
    );
  };
  return (
    <Box component="form" autoComplete="off">
      <Grid container spacing={2}>
        {renderTextField({ id: "cardName", label: "Name on Card" })}
        {renderTextField({ id: "cardNumber", label: "Card number" })}
        {renderTextField({ id: "cardExpiryDate", label: "Expiry date" })}
        {renderTextField({
          id: "cardCVV",
          label: "CVV",
          helperText: "Last three digits on signature strip",
        })}

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
