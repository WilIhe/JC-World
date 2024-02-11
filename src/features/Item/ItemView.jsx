import React  from "react"
import { useSelector, useDispatch } from "react-redux"
// import { currentGlitter, currentLetter, currentCrystalPaint, currentCloudFall } from "./ItemSlice"
import { Box, Button, Grid, IconButton, Paper, Typography } from "@mui/material"
import { Clear } from "@mui/icons-material"

export const ItemView = () => {
    const num = useSelector((state) => state.cart.cartCount)
    // const int = num
    const items = [num]

    const chosenGlitter = useSelector((state) => state.keychain.selectedGlitter)
    const chosenLetter = useSelector((state) => state.keychain.selectedLetter)
    const chosenCrystalPaint = useSelector((state) => state.keychain.selectedCrystalPaint)
    const chosenCloudFall = useSelector((state) => state.keychain.selectedCloudFall)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(currentLetter())
    })

     return (
        <Box flex={2} sx={{bgcolor: 'red'}}>
                    <Grid container spacing={2}>
                        {/* {keyChainAdded === true ? handleChange :  setSharedState(updatedSharedState) } */}
                        {items.map((item) => (
                            <Grid item xs={12} sm={12} md={12} key={item}>
                                <Paper>
                                    <IconButton>
                                        <Clear />
                                    </IconButton>
                                    <Typography> Letter: {chosenLetter} </Typography>
                                    <Typography> Glitter: {chosenGlitter} </Typography>
                                    <Typography> Crystals and Paint: {chosenCrystalPaint} </Typography>
                                    <Typography>   Cloud and Fall Glitter: {chosenCloudFall} </Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
     )
}