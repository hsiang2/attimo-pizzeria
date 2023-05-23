import { useSelector } from "react-redux"
import CheckoutSteps from "../components/CheckoutSteps"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { selectLightMode } from "../redux/colorSlice"
import PaymentCard from "../components/PaymentCard"
import PlaceOrderCard from "../components/PlaceOrderCard"

const PlaceOrderPage = () => {
    const lightMode = useSelector(selectLightMode)
    return (
        <div className={`mainLayout ${lightMode ? 'bgHome' : 'bgHomeDark'} `}>
            {/* <Helmet><title>Attimo Pizzeria </title></Helmet> */}
            <div className="layoutHeader fullWidth" >
                <Header />
            </div>
            
            <div className="layoutContent container">
                <CheckoutSteps step1 step2 step3 step4 />
                <PlaceOrderCard />
            </div>
            <Footer className="layoutFooter" />
        </div>
    )
}

export default PlaceOrderPage