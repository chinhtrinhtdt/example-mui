import { Checkbox, FormControlLabel, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";

function ShippingAddress(props) {
  const { setValidation } = props;

  const initialState = {
    firstName: "",
    lastName: "",
    address1: "",
    city: "",
    province: "",
    country: "",
    zipCode: "",
  };

  const [shippingAddress, setShippingAddress] = useState(initialState);

  const handleChangeInput = (e) => {
    setShippingAddress({ ...shippingAddress, [e.target.id]: e.target.value });
    const isCheck = processValidate();
    setValidation(isCheck);
  };

  const processValidate = () => {
    for (const property in shippingAddress) {
      if (shippingAddress[property] === "") return false;
    }
    return true;
  };

  const renderTextField = ({ id, label, required, xs, md }) => (
    <Grid item xs={xs || 12} md={md || 6}>
      <TextField
        required={required === false ? required : true}
        id={id}
        label={label}
        variant="standard"
        fullWidth
        onChange={handleChangeInput}
      />
    </Grid>
  );

  return (
    <Box component="form" autoComplete="off">
      <Grid container spacing={3}>
        {renderTextField({ id: "firstName", label: "First name" })}
        {renderTextField({ id: "lastName", label: "Last name" })}
        {renderTextField({
          id: "address1",
          label: "Address line 1",
          xs: 12,
          md: 12,
        })}
        {renderTextField({
          id: "address2",
          label: "Address line 2",
          required: false,
          xs: 12,
          md: 12,
        })}
        {renderTextField({ id: "city", label: "City" })}
        {renderTextField({ id: "province", label: "State/Province/Region" })}
        {renderTextField({ id: "country", label: "Country" })}
        {renderTextField({ id: "zipCode", label: "Zip / Postal code" })}

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

export default ShippingAddress;
