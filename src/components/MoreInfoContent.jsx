import { Box, Card, CardMedia, Container, Grid } from "@mui/material";
import styled from "@emotion/styled";
import { StyledCard } from "./ContentStyles";
import { StyledCardMedia } from "./ContentStyles";
import MoreInfoDropDowns from "./MoreInfoDropDowns";


const StyledBox = styled(Box)({
    display: 'flex',
    width: '50%',
    height: '50%',
    textAlign: 'left'
    // justifyContent: 'center'
});

const StyledImage = styled('img')({
    display:'flex',
    width: '100%',
    height: 'auto%',

});

const MoreInfoContent = () => {

    return(
                            
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <StyledCard elevation={4}>
                        <StyledCardMedia 
                            image='https://source.unsplash.com/random'
                        />

                    </StyledCard>
                        {/* <StyledImage src='https://source.unsplash.com/random'/> */}
                </Grid>
                <Grid item xs={12} md={6}>
                    {/* <MoreInfoDropDowns /> */}
                </Grid>
            </Grid>
        </Container>
    );
}

export default MoreInfoContent;