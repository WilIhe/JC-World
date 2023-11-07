import { Box, Button, Container, CssBaseline, Grid, Paper, Stack, Step, StepLabel, Stepper, Typography } from "@mui/material";
import Header from "../components/Header";
import { useState } from "react";
import AddressForm from "../components/AdressForm";
import PaymentMethod from "../components/PaymentMethod";


const CheckoutPage = () => 
{
    const steps = ['Shipping address', 'Payment details', 'Review order'];
    const [activeStep, setActiveStep] = useState(0);

    const nextStep = () =>
    {
        // if (activeStep < 2)
        setActiveStep(activeStep + 1);
    }

    const prevStep = () =>
    {
        // if (activeStep != 0)
        setActiveStep(activeStep - 1);
    }
    
    return(
        <CssBaseline>
            <Header />
            <Container>
                <Paper>
                    <Typography variant='h4' align='center' gutterBottom>
                        Checkout
                    </Typography>
                    <Box>
                        <Box sx={{mb: 3, mt: 3}}>
                            <Stepper activeStep={activeStep}>
                                {steps.map((step) =>(
                                    <Step>
                                        <StepLabel>{step}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </Box>
                        {/* <AddressForm /> */}
                        <PaymentMethod />
                        {/* <h3>{activeStep}</h3> */}
                        <Button disabled={activeStep === 0} variant='outlined' onClick={prevStep}>Previous Step</Button>
                        {activeStep === steps.length - 1 ? (
                            <Button variant='outlined'>Finish</Button>

                        ) : (
                            <Button variant='outlined' onClick={nextStep}>Next Step</Button>
                        ) 
                        }
                    </Box>
                </Paper>   
            </Container>
        </CssBaseline>
    )
}

export default CheckoutPage;