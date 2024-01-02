import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectedCloudFall } from "./CloudFallSlice";
import { FormControl, InputLabel, MenuItem, Typography, Select, Box } from "@mui/material";
import Keychain from "../../components/Keychain";

export const CloudFallView = () => {
    const currentCloud = useSelector((state) => state.cloud.chosenCloudFall)
    const dispatch = useDispatch()
    return (
        <FormControl fullWidth sx={{mt: 1}}>
            <InputLabel id='select'>Cloud and Fall</InputLabel>
                <Select
                    labelId='CloudFall-label'
                    id='CloudFall-select'
                    label='CloudFall'
                    value={currentCloud}
                    onChange={(event) => dispatch(selectedCloudFall(event.target.value))}
                >
                {/* <Grid container> */}
                    {Keychain.cloud_fall_glitter.map((CloudFall) =>
                        // <Grid key={CloudFall} item xs={3}>
                                <MenuItem key={CloudFall.props.alt} value={CloudFall.props.alt}>
                                    <Box align='center'>
                                    {CloudFall}
                                    <Typography variant='body1'>
                                        {CloudFall.props.alt}
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