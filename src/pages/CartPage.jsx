import { CssBaseline } from "@mui/material";
import Header from "../components/Header";
import CartItems from "../components/CartItems";


const CartPage = () => {
    return(
        <CssBaseline>
            <Header />
            <CartItems />
        </CssBaseline>
    )
}

export default CartPage;