import {
  Checkbox,
  FormControlLabel,
  Grid,
  Box,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";

function PaymentDetail(props) {
  const { setValidation } = props;

  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiryDate, setCardExpiryDate] = useState("");
  const [cardCVV, setCardCVV] = useState("");

  const processValidate = () => {
    if (cardName === "") {
      setValidation(false);
    } else if (cardNumber === "") {
      setValidation(false);
    } else if (cardExpiryDate === "") {
      setValidation(false);
    } else if (cardCVV === "") {
      setValidation(false);
    } else {
      setValidation(true);
    }
  };

  useEffect(() => {
    processValidate();
  }, [cardName, cardNumber, cardExpiryDate, cardCVV]);

  const renderTextField = ({ id, label, setState, ...props }) => {
    return (
      <Grid item xs={12} md={6}>
        <TextField
          required
          id={id}
          label={label}
          variant="standard"
          fullWidth
          {...props}
          onChange={(e) => setState(e.target.value)}
        />
      </Grid>
    );
  };

  return (
    <Box component="form" autoComplete="off">
      <Grid container spacing={2}>
        {renderTextField({
          id: "cardName",
          label: "Name on Card",
          setState: setCardName,
        })}
        {renderTextField({
          id: "cardNumber",
          label: "Card number",
          setState: setCardNumber,
        })}
        {renderTextField({
          id: "cardExpiryDate",
          label: "Expiry date",
          setState: setCardExpiryDate,
        })}
        {renderTextField({
          id: "cardCVV",
          label: "CVV",
          setState: setCardCVV,
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
