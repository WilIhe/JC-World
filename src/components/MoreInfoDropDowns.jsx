import { Box, Container, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import Keychain from "./Keychain";
import { useState} from "react";
import { GlitterView } from "../features/glitter/glitterView";
import { LetterView } from "../features/letter/LetterView";

const MoreInfoDropDowns = () => {

    return(
        <Container>
           <GlitterView />

            <LetterView />


            <FormControl fullWidth sx={{mt: 1}}>
                <InputLabel id='select'>Crystals and Paint</InputLabel>
                <Select
                    labelId='CrystalPaint-label'
                    id='CrystalPaint-select'
                    label='CrystalPaint'
                    // value={selectedCrystalPaint}
                    // onChange={handleChangeCrystalPaint}
                >
                {/* <Grid container> */}
                    {Keychain.crystals_and_paint.map((CrystalPaint) =>
                        // <Grid key={CrystalPaint} item xs={5}>
                                <MenuItem key={CrystalPaint.props.alt} value={CrystalPaint}>
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

            <FormControl fullWidth sx={{mt: 1}}>
                <InputLabel id='select'>Cloud and Fall</InputLabel>
                <Select
                    labelId='CloudFall-label'
                    id='CloudFall-select'
                    label='CloudFall'
                    // value={selectedCloudFall}
                    // onChange={handleChangeCloudFall}
                >
                {/* <Grid container> */}
                    {Keychain.cloud_fall_glitter.map((CloudFall) =>
                        // <Grid key={CloudFall} item xs={3}>
                                <MenuItem key={CloudFall.props.alt} value={CloudFall}>
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

            {/* <MoreInfoAddToCart 
            selectedGlitter={selectedGlitter}
            selectedLetter={selectedLetter}
            selectedCloudFall={selectedCloudFall}
            selectedCrystalPaint={selectedCrystalPaint}
            /> */}
        </Container>
    )
}

export default MoreInfoDropDowns;