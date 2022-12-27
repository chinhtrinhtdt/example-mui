import { Checkbox, FormControlLabel, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { DEFAULT_PARAMS_STATE } from "../../../mocks/infoUser";

interface IPropsShipping {
  setValidation: (item: boolean) => void;
}

interface IDefault {
  firstName: string;
  lastName: string;
  address1: string;
  city: string;
  province: string;
  country: string;
  zipCode: string;
}

function ShippingAddress(props: IPropsShipping) {
  const { setValidation } = props;

  const [infoUser, setInfoUser] = useState<IDefault>(DEFAULT_PARAMS_STATE);

  useEffect(() => {
    const listValueInfoUser = Object.values(infoUser);
    const check = listValueInfoUser.some((valueInfoUser) => !valueInfoUser);
    if (check) {
      setValidation(false);
      return;
    }
    setValidation(true);
  }, [infoUser]);

  const handleChangeInput = (e: any) => {
    setInfoUser({ ...infoUser, [e.target.name]: e.target.value });
  };
  const renderTextField = (
    name: string,
    label: string,
    required?: boolean,
    xs?: number,
    md?: number
  ) => (
    <Grid item xs={xs || 12} md={md || 6}>
      <TextField
        required={required === false ? required : true}
        name={name}
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
        {renderTextField("firstName", "First name")}
        {renderTextField("lastName", "Last name")}
        {renderTextField("address1", "Address line 1", true, 12, 12)}
        {renderTextField("address2", "Address line 2", false, 12, 12)}
        {renderTextField("city", "City")}
        {renderTextField("province", "State/Province/Region")}
        {renderTextField("country", "Country")}
        {renderTextField("zipCode", "Zip / Postal code")}
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
