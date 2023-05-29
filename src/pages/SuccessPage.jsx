import { useSelector } from "react-redux"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { selectLightMode } from "../redux/colorSlice"
import SuccessCard from "../components/SuccessCard"

const SuccessPage = () => {
    const lightMode = useSelector(selectLightMode)
    return (
        <div className={`mainLayout ${lightMode ? 'bgAuth' : 'bgAuthDark'} `}>
            {/* <Helmet><title>Attimo Pizzeria </title></Helmet> */}
            <div className="layoutHeader fullWidth" >
                <Header />
            </div>
            
            <div className="layoutContent container">
               <SuccessCard />
            </div>
            <Footer className="layoutFooter" />
        </div>
    )
}

export default SuccessPage