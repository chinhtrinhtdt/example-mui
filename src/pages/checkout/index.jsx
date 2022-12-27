import {
  Box,
  Button,
  Container,
  Paper,
  Step,
  StepButton,
  Stepper,
  Typography,
} from "@mui/material";

import { useState } from "react";
import FinishOrder from "./components/FinishOrder";
import PaymentDetails from "./components/PaymentDetails";
import ReviewOrder from "./components/ReviewOrder";
import ShippingAddress from "./components/ShippingAddress";

const steps = ["Shipping address", "Payment details", "Review your order"];

function Checkout() {
  const [activeStep, setActiveStep] = useState(0);
  const [validation, setValidation] = useState(false);

  const handleNext = () => {
    if (!validation && activeStep < 2) {
      setActiveStep(activeStep);
      setValidation(true)
    } else if (steps.length !== activeStep) {
      setActiveStep(activeStep + 1);
      setValidation(false);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
    setValidation(false);
  };

  const handleBackStepFirst = () => {
    setActiveStep(0);
    setValidation(false);
  };

  const renderCheckoutStep = () => {
    if (activeStep === 0) {
      return <ShippingAddress setValidation={setValidation} />;
    }
    if (activeStep === 1) {
      return <PaymentDetails setValidation={setValidation} />;
    }
    if (activeStep === 2) {
      return <ReviewOrder />;
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: "100px", mb: 5 }}>
      <Paper variant="outlined" sx={{ p: 3 }}>
        <Typography
          variant="h4"
          component="h4"
          sx={{ mb: 3, textAlign: "center" }}
        >
          Checkout
        </Typography>

        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={index}>
              <StepButton>{label}</StepButton>
            </Step>
          ))}
        </Stepper>

        <Typography variant="h6" component="h6" sx={{ mt: 3 }}>
          {activeStep === 0 && steps[0]}
          {activeStep === 1 && steps[1]}
          {activeStep === 2 && steps[2]}
        </Typography>

        {activeStep === steps.length ? (
          <Box>
            <FinishOrder />
            <Button onClick={handleBackStepFirst}>Back</Button>
          </Box>
        ) : (
          <Box>
            <Box sx={{ py: 2 }}>{renderCheckoutStep()}</Box>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Button onClick={handleNext} variant="contained" disabled= {!validation && activeStep < 2}>
                {activeStep === steps.length - 1 ? "Place order" : "Next"}
              </Button>
            </Box>
          </Box>
        )}
      </Paper>
    </Container>
  );
}

export default Checkout;
