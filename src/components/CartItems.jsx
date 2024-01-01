import { Box, Button, CardContent, CardHeader, CardMedia, Container, Grid, IconButton, Paper, Stack, Typography } from "@mui/material";
import { StyledCard } from "./ContentStyles";
import { StyledCardMedia } from "./ContentStyles";
import { Clear } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { add } from "../features/Cart/CartSlice";

const CartItems = () => {
    const items = [1, 2, 3, 4, 5, 6]
    // const currentGlitter = useSelector((state) => state.glitter.glitterName)
    const currentLetter = useSelector((state) => state.letter.chosenLetter)
    // const currentPaint = useSelector((state) => state.item.crystalPaint)
    // const currentCloud = useSelector((state) => state.item.cloudFall)





    //The keycahinlist is only rendered once, hence why there is an issue with adding new items to the list and displaying it.
    return(
        <Container>
            <Stack direction='row' spacing={2} justifyContent='space-between'>
                <Box flex={2} sx={{bgcolor: 'red'}}>
                    <Grid container spacing={2}>
                        {/* {keyChainAdded === true ? handleChange :  setSharedState(updatedSharedState) } */}
                        {/* { add() ? items.map((item) => ( */}
                            <Grid item xs={12} sm={12} md={12}>
                                <Paper>
                                    <IconButton>
                                        <Clear />
                                    </IconButton>
                                    <Typography> Letter: {currentLetter} </Typography>
                                    {/* <Typography> Glitter:  </Typography> */}
                                    {/* <Typography> Crystals and Paint: {currentPaint} </Typography>
                                    <Typography>   Cloud and Fall Glitter: {currentCloud} </Typography> */}
                                </Paper>
                            </Grid>
                        {/* // )) : null } */}
                        {/* {keyChainList.map((item, index) =>( */}
                            {/* <Grid item xs={12} sm={12} md={12}>
                                <Paper>
                                    <IconButton>
                                        <Clear />
                                    </IconButton>
                                    <Typography> Letter: {currentLetter} </Typography>
                                    <Typography> Glitter: {currentGlitter} </Typography>
                                    <Typography> Crystals and Paint: {currentPaint} </Typography>
                                    <Typography>   Cloud and Fall Glitter: {currentCloud} </Typography>
                                </Paper>
                            </Grid> */}
                            {/* ))} */}
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