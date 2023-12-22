import styled from "@emotion/styled";
import { Box, Button, Grid } from "@mui/material";
// import { useEffect, useState } from "react";
// import { useSharedState } from "./SharedStatesContext";

const StyledDiv = styled('div')({
    position: 'fixed',
    bottom: 7,
    width: '100%',
});

const MoreInfoAddToCart = () => {

    return(
        <StyledDiv>
            <Grid container justifyContent='center'>
                <Grid item xs={11}>
                    <Button fullWidth variant='contained'>Add To Cart</Button>
                </Grid>
            </Grid>
            {/* <Box justifyContent='center'>
                <Button variant='contained' >Add To Cart</Button>
            </Box> */}
        </StyledDiv>
    );
}

export default MoreInfoAddToCart;