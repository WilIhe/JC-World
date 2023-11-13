import { Box, Button, Container, Grid, InputBase, Typography, styled } from "@mui/material";
import React from 'react'

// const Search = styled('div')(({theme}) =>({
//     backgroundColor: 'pink',
//     padding: '0 10px',
//     borderRadius: theme.shape.borderRadius,
//     width: '30%',
// }));

const StyledContainer = styled(Container)(({theme}) => ({
    marginBottom: '5rem',
    marginTop: '5rem',

    [theme.breakpoints.up('lg')]:{
        marginLeft: '6rem'
       },

    // [theme.breakpoints.up('lg')]:{
    //     marginLeft: '0rem'
    //    }
}));



const FilterAndSearch = () =>
{
 return(
    <StyledContainer>
            <Grid container spacing={4} alignItems='center' justifyContent='center'>
                <Grid item > 
                    <Box > 
                    {/* <input placeholder='search'></input> */}
                        {/* <Search>
                            <InputBase placeholder="Type Letter...">
                            </InputBase>
                        </Search> */}
                        {/* Only want letter button to render if on home page */}
                        <Button variant='contained' sx={{bgcolor:'pink'}} size='large'>
                            <Typography>
                                Letter
                            </Typography>
                        </Button>
                    </Box>
                </Grid>
                <Grid item>
                    <Box>
                        <Button variant='contained' sx={{bgcolor:'blue'}} size='large'>
                            <Typography>
                                Glitter
                            </Typography>
                        </Button>
                    </Box>
                </Grid>
                <Grid item>
                    <Box>
                        <Button variant='contained' sx={{bgcolor:'pink'}} size='large'>
                            <Typography>
                                Accessory
                            </Typography>
                        </Button>
                    </Box>
                </Grid>
                <Grid item>
                    <Box>
                        <Button variant='contained' sx={{bgcolor:'pink'}} size='large'>
                            <Typography>
                                Crystal and Panint
                            </Typography>
                        </Button>
                    </Box>
                </Grid>
            </Grid>
    </StyledContainer>
 );
}

export default FilterAndSearch