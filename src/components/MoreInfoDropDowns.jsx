import { Box, Container, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import Keychain from "./Keychain";
import { useState} from "react";


const MoreInfoDropDowns = () => {

    return(
        <Container>
            <FormControl fullWidth>
                <InputLabel id='select'>Glitter</InputLabel>
                <Select
                    labelId='Glitter-label'
                    id='Glitter-select'
                    // value={selectedGlitter}
                    // onChange={handleChangeGlitter}
                >
                {/* <Grid container> */}
                    {Keychain.glitter.map((glitter) =>
                        // <Grid key={glitter} item xs={4}>
                            <MenuItem key={glitter.props.alt} value={glitter}>
                                <Box align='center'>
                                    {glitter}
                                    <Typography variant='body1'>
                                        {glitter.props.alt}
                                    </Typography>
                                </Box>
                            </MenuItem>
                    // </Grid>
                    )}
                {/* </Grid> */}
                </Select>
            </FormControl>

            <FormControl fullWidth sx={{mt: 1}}>
                <InputLabel id='select'>Letter</InputLabel>
                <Select
                    labelId='Letter-label'
                    id='Letter-select'
                    label='Letter'
                    // value={selectedLetter}
                    // onChange={handleChangeLetter}
                >
                {/* <Grid container> */}
                    {Keychain.letter.map((letter) =>
                        // <Grid key={letter} item xs={4}>
                            <MenuItem key={letter} value={letter}>
                                {letter}
                            </MenuItem>
                    // </Grid>
                    )}
                {/* </Grid> */}              
                </Select>
            </FormControl>


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