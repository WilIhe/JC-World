import { Box, Button, CardContent, CardHeader, CardMedia, Container, Grid, IconButton, Paper, Stack, Typography } from "@mui/material";
import { StyledCard } from "./ContentStyles";
import { StyledCardMedia } from "./ContentStyles";
import { Clear } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { add } from "../features/Cart/CartSlice";
import { ItemView } from "../features/Item/ItemView";

const CartItems = () => {
    // const num = useSelector((state) => state.cart.cartCount)
    // // const int = num
    // const items = [num]
    // //const t = num
    // const currentGlitter = useSelector((state) => state.glitter.glitterName)
    // const currentLetter = useSelector((state) => state.letter.chosenLetter)
    // const currentPaint = useSelector((state) => state.paint.chosenCrystalPaint)
    // const currentCloud = useSelector((state) => state.cloud.chosenCloudFall)




    //The keycahinlist is only rendered once, hence why there is an issue with adding new items to the list and displaying it.
    return(
        <Container>
            {console.log(num)}
            <Stack direction='row' spacing={2} justifyContent='space-between'>
                <ItemView />
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