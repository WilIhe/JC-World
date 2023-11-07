import Header from "../components/Header";
import MoreInfoContent from "../components/MoreInfoContent";
import MoreInfoAddToCart from "../components/MoreInfoAddToCart";
import FilterAndSearch from "../components/FilterAndSearch";
import { CssBaseline } from "@mui/material";
import MoreInfoOptions from "../components/MoreInfoOptions";
import MoreInfoDropDowns from "../components/MoreInfoDropDowns";

const MoreInfoPage = () => {
    return(
        <CssBaseline>
            <Header /> 
            <MoreInfoContent />
            <MoreInfoDropDowns />
            {/* <MoreInfoOptions /> */}
            <MoreInfoAddToCart />
        </CssBaseline>
    )
}

export default MoreInfoPage;