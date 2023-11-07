import { Grid, TextField, Typography } from "@mui/material";

const Card = () => 
{
    return(
        <>
            <Grid container spacing={3}>
                <Grid item xs={6} sm={6}>
                    <TextField 
                        required
                        id='cardHolderFirstName'
                        name='cardHolderFirstName'
                        label='Name on Card'
                        variant='standard'
                    />
                </Grid>
                <Grid item xs={6} sm={6}>
                    <TextField 
                        required
                        id='cardNumber'
                        name='cardNumber'
                        label='Card number'
                        variant='standard'
                    />
                </Grid>
                <Grid item xs={6} sm={6}>
                    <TextField 
                        required
                        id='expiration'
                        name='expiration'
                        label='Expiration'
                        variant='standard'
                    />
                </Grid>
                <Grid item xs={6} sm={6}>
                    <TextField 
                        required
                        id='cvv'
                        name='cvv'
                        label='CVV'
                        variant='standard'
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default Card;