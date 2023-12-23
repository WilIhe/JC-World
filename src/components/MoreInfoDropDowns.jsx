import { Box, Container, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import Keychain from "./Keychain";
import { useState} from "react";
import { GlitterView } from "../features/glitter/glitterView";
import { LetterView } from "../features/letter/LetterView";
import { CrystalPaintView } from "../features/crystalPaint/CrystalPaintView";

const MoreInfoDropDowns = () => {

    return(
        <Container>
           <GlitterView />

            <LetterView />
            <CrystalPaintView />

            

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