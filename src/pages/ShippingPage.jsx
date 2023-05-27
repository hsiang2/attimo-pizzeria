import { useSelector } from "react-redux"
import CheckoutSteps from "../components/CheckoutSteps"
import Footer from "../components/Footer"
import Header from "../components/Header"
import ShippingCard from "../components/ShippingCard"
import { selectLightMode } from "../redux/colorSlice"

const ShippingPage = () => {
    const lightMode = useSelector(selectLightMode)
    return (
        <div className={`mainLayout ${lightMode ? 'bgAuth' : 'bgAuthDark'} `}>
            {/* <Helmet><title>Attimo Pizzeria </title></Helmet> */}
            <div className="layoutHeader fullWidth" >
                <Header />
            </div>
            
            <div className="layoutContent container">
                <CheckoutSteps step1 step2 />
                <ShippingCard />
            </div>
            <Footer className="layoutFooter" />
        </div>
    )
}

export default ShippingPage