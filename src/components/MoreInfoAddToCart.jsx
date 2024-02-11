import styled from "@emotion/styled";
import { Box, Button, Grid } from "@mui/material";
import { add } from "../features/Cart/CartSlice";
import { useDispatch, useSelector} from "react-redux";
import { useState } from "react";

const StyledDiv = styled('div')({
    position: 'fixed',
    bottom: 7,
    width: '100%',
});

const MoreInfoAddToCart = () => {
    const [ItemList, setItemList] = useState([])
    const dispatch = useDispatch()
    const [count, setCount] = useState(0)
    // const chosenGlitter = useSelector((state) => state.keychain.selectedGlitter)
    // const chosenLetter = useSelector((state) => state.keychain.selectedLetter)
    // const chosenCrystalPaint = useSelector((state) => state.keychain.selectedCrystalPaint)
    // const chosenCloudFall = useSelector((state) => state.keychain.selectedCloudFall)

    
    const createNewItem = () => {
        const letter = useSelector((state) => state.keychain.selectedLetter)
        // const glitter = useSelector((state) => state.keychain.selectedGlitter)
        // const cloud = useSelector((state) => state.keychain.selectedCloudFall)
        // const paint = useSelector((state) => state.keychain.selectedCrystalPaint)

        return {
            letter,
            // glitter,
            // cloud,
            // paint,
        };
    }

    const handleClick = () => {
        //const newItem = createNewItem()

        dispatch(add())
        setCount(count + 1)
        // setItemList(prevState => [...prevState, newItem])
        // {console.log(ItemList)}
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