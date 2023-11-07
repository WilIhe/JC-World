import styled from "@emotion/styled";
import { Box, Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useSharedState } from "./SharedStatesContext";

const StyledDiv = styled('div')({
    position: 'fixed',
    bottom: 7,
    width: '100%',
});

const MoreInfoAddToCart = () => {

    const { sharedState, setSharedState } = useSharedState()
    const selectedLetter = sharedState.selectedLetter;
    const selectedGlitter = sharedState.selectedGlitter;
    const selectedCrystalPaint = sharedState.selectedCrystalPaint;
    const selectedCloudFall = sharedState.selectedCloudFall;
    const list = sharedState.KeychainList
    const a = sharedState.ItemAdded;
    

    const [cartCount, setcartCount] = useState(sharedState.cartCount);
    const [itemAdded, setItemAdded] = useState(sharedState.ItemAdded);
    const [keyChainList, setKeyChainList] = useState([{}]);

    const newKeychain = {
        letter: selectedLetter,
        glitter: selectedGlitter,
        crystalPaint: selectedCrystalPaint,
        cloudFall: selectedCloudFall
    }

    // const l = '1';
    // // let testL = []
    // const add = () => {
    //     // setKeyChainList({...keyChainList, item});
    //     setKeyChainList(prevKeyChainList => prevKeyChainList.concat(newKeychain));
    // }

    const handleClick = () => {
        
        // setItemAdded(true)
        // setSharedState({ ...sharedState, ItemAdded: true});
        // // console.log(itemAdded);
        // add(newKeychain);
        // setSharedState({ ...sharedState, KeychainList: keyChainList});
        // // testL.push(test);
        // console.log(keyChainList);
        // setcartCount(cartCount + 1);
        // setSharedState({ ...sharedState, cartCount: cartCount + 1});
        // // setItemAdded('false')
        // // setSharedState({ ...sharedState, ItemAdded: 'false'})
        // // console.log(itemAdded);
        //console.log(a);
        console.log(itemAdded);
        const updatedKeyChainList = [...keyChainList, newKeychain]; // Add the new keychain
        setKeyChainList(updatedKeyChainList); // Update the local state
        setcartCount(cartCount + 1);
    
        const updatedSharedState = {
            ...sharedState,
            ItemAdded: true,
            KeychainList: updatedKeyChainList, // Update the shared state's KeychainList
            cartCount: cartCount + 1,
        };
        setSharedState(updatedSharedState); 
        console.log(list)// Update the shared state
    };

    return(
        <StyledDiv>
            <Grid container justifyContent='center'>
                <Grid item xs={11}>
                    <Button fullWidth variant='contained'  onClick={handleClick}>Add To Cart{cartCount}</Button>
                </Grid>
            </Grid>
            {/* <Box justifyContent='center'>
                <Button variant='contained' >Add To Cart</Button>
            </Box> */}
        </StyledDiv>
    );
}

export default MoreInfoAddToCart;