import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectedCrystalPaint } from "./CrystalPaintSlice";
import { FormControl, InputLabel, MenuItem, Typography, Select, Box } from "@mui/material";
import Keychain from "../../components/Keychain";

export const CrystalPaintView = () => {
    const currentCrystal = useSelector((state) => state.paint.chosenCrystalPaint)
    const dispatch = useDispatch()
    return (
        <FormControl fullWidth sx={{mt: 1}}>
                <InputLabel id='select'>Crystals and Paint</InputLabel>
                <Select
                    labelId='CrystalPaint-label'
                    id='CrystalPaint-select'
                    label='CrystalPaint'
                    value={currentCrystal}
                    onChange={(event) => dispatch(selectedCrystalPaint(event.target.value))}
                >
                {/* <Grid container> */}
                    {Keychain.crystals_and_paint.map((CrystalPaint) =>
                        // <Grid key={CrystalPaint} item xs={5}>
                                <MenuItem key={CrystalPaint.props.alt} value={CrystalPaint.props.alt}>
                                    <Box align='center'>
                                    {CrystalPaint}
                                    <Typography variant='body1'>
                                        {CrystalPaint.props.alt}
                                    </Typography>
                                    </Box>
                                </MenuItem>
                    // </Grid>
                    )}
                {/* </Grid> */}             
                </Select>
            </FormControl>
    )
}