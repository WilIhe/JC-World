import styled from "@emotion/styled";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";

const StyledPaper = styled(Paper)(({theme}) => ({
    backgroundColor: 'blue' ,
    color: 'white',
}));

const MoreInfoOptions = () => {
    return(
        <Container>
            <Grid container spacing={2}>
                <Grid item>
                        <StyledPaper elevation={3}>
                            <Typography>
                                paper
                            </Typography>
                        </StyledPaper>
                </Grid>
            </Grid>
        </Container>
    )
};

export default MoreInfoOptions;