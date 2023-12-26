import styled from "@emotion/styled";
import { Box, Button, Grid } from "@mui/material";
import { add } from "../features/Cart/CartSlice";
import { useDispatch} from "react-redux";
import { useState } from "react";

const StyledDiv = styled('div')({
    position: 'fixed',
    bottom: 7,
    width: '100%',
});

const MoreInfoAddToCart = () => {
    const dispatch = useDispatch()
    const [count, setCount] = useState(0)

    const handleClick = () => {
        dispatch(add())
        setCount(count + 1)
    }
    return(
        <StyledDiv>
            <Grid container justifyContent='center'>
                <Grid item xs={11}>
                    <Button fullWidth variant='contained' onClick={handleClick}>Add To Cart{count}</Button>
                </Grid>
            </Grid>
            {/* <Box justifyContent='center'>
                <Button variant='contained' >Add To Cart</Button>
            </Box> */}
        </StyledDiv>
    );
}

export default MoreInfoAddToCart;