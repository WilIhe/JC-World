import React  from "react"
import { useSelector, useDispatch } from "react-redux"
import { currentGlitter, currentLetter, currentCrystalPaint, currentCloudFall } from "./ItemSlice"
import { Button, Typography } from "@mui/material"

export const ItemView = () => {
    //  const chosenGlitter = useSelector((state) => state.keychain.selectedGlitter)
    //  const chosenLetter = useSelector((state) => state.keychain.selectedLetter)
    //  const chosenCrystalPaint = useSelector((state) => state.keychain.selectedCrystalPaint)
    //  const chosenCloudFall = useSelector((state) => state.keychain.selectedCloudFall)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(currentLetter())
    })

     return (
        <Typography> Letter: </Typography>
        // <Button onClick={() => dispatc}>
        //     <Typography> Letter: </Typography>
        // </Button>
     )
}