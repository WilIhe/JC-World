import React from "react";
import { useDispatch, useSelector} from "react-redux";
import { selectedLetter } from "./LetterSlice";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import Keychain from "../../components/Keychain";


export const LetterView = () => {
    const dispatch = useDispatch()
    const currentLetter = useSelector((state) => state.letter.chosenLetter )
    //const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    return (
        <FormControl fullWidth sx={{mt: 1}}>
                <InputLabel id='select'>Letter</InputLabel>
                <Select
                    labelId='Letter-label'
                    id='Letter-select'
                    label='Letter'
                    value={currentLetter}
                    onChange={(event) => dispatch(selectedLetter(event.target.value))}
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
    )

}