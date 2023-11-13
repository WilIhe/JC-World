import { Box, Button, CardContent, CardHeader, CardMedia, Container, Grid, IconButton, Paper, Stack, Typography } from "@mui/material";
import { StyledCard } from "./ContentStyles";
import { StyledCardMedia } from "./ContentStyles";
import { Clear } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useSharedState } from "./SharedStatesContext";

const CartItems = () => {
    let items = [1, 2, 3, 4, 5, 6]
    const { sharedState, setSharedState } = useSharedState();
    const keyChainList = sharedState.KeychainList;
    const keyChainAdded = sharedState.ItemAdded;

    const updatedSharedState = {
        ...sharedState,
        ItemAdded: false
    };


    //The keycahinlist is only rendered once, hence why there is an issue with adding new items to the list and displaying it.
    return(
        <Container>
            <Stack direction='row' spacing={2} justifyContent='space-between'>
                <Box flex={2} sx={{bgcolor: 'red'}}>
                    <Grid container spacing={2}>
                        //This map needs to be conditionally rendered
                        {/* {keyChainAdded === true ? handleChange :  setSharedState(updatedSharedState) } */}
                        {keyChainList.map((item, index) =>(
                            <Grid key={index} item xs={12} sm={12} md={12}>
                                <Paper>
                                    <IconButton>
                                        <Clear />
                                    </IconButton>
                                    <Typography> Letter: {item.letter} </Typography>
                                    <Typography> Glitter: {item.glitter} </Typography>
                                    <Typography> Crystals and Paint: {item.crystalPaint} </Typography>
                                    <Typography>   Cloud and Fall Glitter: {item.cloudFall} </Typography>
                                </Paper>
                            </Grid>
                            ))}
                    </Grid>
                </Box>
                <Box flex={2} sx={{bgcolor: 'pink'}}>
                    <Box  justifyContent='center' sx={{bgcolor: 'purple'}}>
                        <Typography>
                            Blank items
                        </Typography>
                        <Button component={Link} to='/CheckoutPage' variant='contained'>Chekcout Out</Button>
                    </Box>
                </Box>
            </Stack>
        </Container>
    )
}

export default CartItems;