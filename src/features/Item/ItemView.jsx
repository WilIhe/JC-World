import React  from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectedGlitter, selectedLetter, selectedCrystalPaint, selectedCloudFall } from "./ItemSlice"
import { Button, Typography } from "@mui/material"

export const ItemView = () => {
     const chosenGlitter = useSelector((state) => state.keychain.selectedGlitter)
     const chosenLetter = useSelector((state) => state.keychain.selectedLetter)
     const chosenCrystalPaint = useSelector((state) => state.keychain.selectedCrystalPaint)
     const chosenCloudFall = useSelector((state) => state.keychain.selectedCloudFall)

     return (
        <Button onClick={() => dispatc}>
            <Typography>
                Add to Cart
            </Typography>
        </Button>
     )
}