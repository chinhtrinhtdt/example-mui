import {
  Checkbox,
  FormControlLabel,
  Grid,
  Box,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";

interface IPropsPaymentDetail {
  setValidation: (item: boolean) => void;
}

function PaymentDetail(props: IPropsPaymentDetail) {
  const { setValidation } = props;

  const [cardName, setCardName] = useState<string>("");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [cardExpiryDate, setCardExpiryDate] = useState<string>("");
  const [cardCVV, setCardCVV] = useState<string>("");

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

  const renderTextField = (id: string, label: string, handleFunc: (item: string) => void, helperText?: string) => {
    return (
      <Grid item xs={12} md={6}>
        <TextField
          required
          id={id}
          label={label}
          variant="standard"
          fullWidth
          helperText={helperText}
          onChange={(e) => handleFunc(e.target.value)}
        />
      </Grid>
    );
  };

  return (
    <Box component="form" autoComplete="off">
      <Grid container spacing={2}>
        {renderTextField("cardName","Name on Card", setCardName)}
        {renderTextField( "cardNumber", "Card number", setCardNumber)}
        {renderTextField("cardExpiryDate", "Expiry date", setCardExpiryDate)}
        {renderTextField("cardCVV",  "CVV", setCardCVV,"Last three digits on signature strip")}

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
