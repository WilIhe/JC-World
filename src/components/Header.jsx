import styled from "@emotion/styled";
import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Box, Toolbar, Typography, Badge, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
// import { useSharedState } from "./SharedStatesContext";
import { useSelector } from "react-redux";



const StyledToolbar = styled(Toolbar)({
    display: 'flex', 
    justifyContent:'space-between',
})

const StyledImage = styled('img')({
    width: '100%',
    height: 'auto',
    margin: 0, 
    padding: 0
})



const Header = () => {
    const itemNum = useSelector((state) => state.cart.cartCount)

    return (
    <Box sx={{flexGrow: '1'}}>
        <AppBar position='relative' sx={{backgroundColor:'lightpink'}}>
            <StyledToolbar>
                {/* find a way to remove underline */}
                <Box component={Link} to='/HomePage'>
                    <Typography variant='h6' color='purple' fontWeight={600}>
                        JC World
                    </Typography>
                </Box>
                <IconButton component={Link} to='/CartPage'>
                    <Badge badgeContent={itemNum}>
                        <ShoppingCart sx={{color:'purple'}} />
                    </Badge>
                </IconButton>
            </StyledToolbar>
        </AppBar>
        
        <Box>
            <StyledImage src='src\assets\32-chandelier.jpg' alt='Chandeliers'/>
        </Box>
    </Box>
    );
}

export default Header