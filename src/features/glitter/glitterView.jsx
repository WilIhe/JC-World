import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectedGlitter } from "./glitterSlice";
import { FormControl, InputLabel, MenuItem, Typography, Select, Box } from "@mui/material";
import Keychain from "../../components/Keychain";

export const GlitterView = () => {
    const currentGlitter = useSelector((state) => state.glitter.glitterName)
    const dispatch = useDispatch()
    return (
        <FormControl fullWidth>
            <InputLabel id='select'> Glitter</InputLabel>
            <Select
            labelId='Glitter-label'
            id='Glitter-select'
            value={currentGlitter}
            onChange={(event) => dispatch(selectedGlitter(event.target.value))}
            >
                {Keychain.glitter.map((glitter) => (
                    //change value to glitter.props.alt possibly
                    <MenuItem key={glitter.props.alt} value={glitter.props.alt}>
                        <Box align='center'>
                            {glitter}
                            <Typography variant='body1'>
                                {glitter.props.alt}
                            </Typography>
                        </Box>
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}