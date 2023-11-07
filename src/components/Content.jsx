import { Card, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import { StyledCardMedia } from "./ContentStyles";
import { StyledCard } from "./ContentStyles";
import { Circle } from "@mui/icons-material";
import { Link } from 'react-router-dom'
// import FilterAndSearch from "./FilterAndSearch";
const Content = (props) =>
{
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11, 12];
    const list = [
        {}
    ]

    return(
        <Container>
        <Grid sx={{padding: '20px 20px'}}>
            <Grid container spacing={4}>
                {cards.map((card) => (
                    <Grid key={card} item xs={12} sm={6} md={4}> 
                    <img src=''/>
                    <StyledCard component={Link} to='/MoreInfoPage' elevation={4}>
                        <StyledCardMedia 
                        image='https://source.unsplash.com/random'
                        title='title'
                        />
                        <CardContent>
                            <Typography>
                                    $15
                            </Typography>
                            {/* going to need to be conditionly rendered */}
                            <Circle sx={{color:'red'}}/>
                        </CardContent>
                    </StyledCard>
                </Grid>
                ))}
            </Grid>
        </Grid>
        </Container>
    );
}

export default Content;