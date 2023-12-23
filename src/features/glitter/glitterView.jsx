import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectedGlitter } from "./glitterSlice";
import { Container, FormControl, InputLabel, MenuItem, Typography } from "@mui/material";
import Keychain from "../../components/Keychain";

export const glitterView = () => {
    //const currentGlitter = useSelector((state) => state.glitter.glitterName)
    const dispatch = useDispatch()
    return (
        <FormControl fullWidth>
            <InputLabel id='select'> Glitter</InputLabel>
            <Select
            labelId='Glitter-label'
            id='Glitter-select'
            onChange={() => dispatch(selectedGlitter())}
            >
                {Keychain.glitter.map((glitter) => {
                    <MenuItem key={glitter.props.alt} value={glitter}>
                        <Box align='center'>
                            {glitter}
                            <Typography variant='body1'>
                                {glitter.props.alt}
                            </Typography>
                        </Box>
                    </MenuItem>
                })}
            </Select>
        </FormControl>
    )
}