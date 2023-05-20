import { useSelector } from "react-redux"
import { selectLightMode } from "../redux/colorSlice"
import { Helmet } from "react-helmet-async"
import Footer from "../components/Footer"
import RegisterCard from "../components/RegisterCard"
import Header from "../components/Header"
import { useSearchParams } from "react-router-dom"

const RegisterPage = () => {
    const lightMode = useSelector(selectLightMode)
    const [searchParams] = useSearchParams()
    const redirect = searchParams.get('redirect')

    return(
        <div className={`mainLayout ${lightMode ? 'bgHome' : 'bgHomeDark'} `}>
            <Helmet><title>Attimo Pizzeria | Register</title></Helmet>
            <div className="layoutHeader fullWidth" >
                <Header />
            </div>
            <div className="layoutContent container">
                <RegisterCard redirect={redirect}  />
            </div>
            <Footer className="layoutFooter" />
        </div>
    )
}

export default RegisterPage