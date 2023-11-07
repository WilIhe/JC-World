import { BrowserRouter, Routes, Route  } from "react-router-dom"
import HomePage from "./pages/HomePage"
import MoreInfoPage from "./pages/MoreInfoPage"
import CartPage from "./pages/CartPage"
import CheckoutPage from "./pages/CheckoutPage"
import { SharedStateProvider } from "./components/SharedStatesContext"


function App() {

  return (
    <SharedStateProvider>
      <BrowserRouter>
        <Routes>
          <Route  index element={<HomePage />}/>
          <Route  path='/HomePage' element={<HomePage />}/>
          <Route  path='/MoreInfoPage' element={<MoreInfoPage />}/>
          <Route  path='/CartPage' element={<CartPage />}/>
          <Route  path='/CheckoutPage' element={<CheckoutPage />}/>
        </Routes>
      </BrowserRouter>
    </SharedStateProvider>
  )
}

export default App
