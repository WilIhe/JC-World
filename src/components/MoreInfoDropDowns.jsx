import { Box, Container, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";
//import Keychain from "./Keychain";
import { useState} from "react";
import { GlitterView } from "../features/glitter/glitterView";
import { LetterView } from "../features/letter/LetterView";
import { CrystalPaintView } from "../features/crystalPaint/CrystalPaintView";
import { CloudFallView } from "../features/cloudFall/CloudFallView";

const MoreInfoDropDowns = () => {

    return(
        <Container>
            <GlitterView />
            <LetterView />
            {/* <CrystalPaintView /> */}
            <CloudFallView />
            

           

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