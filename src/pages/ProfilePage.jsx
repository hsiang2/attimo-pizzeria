import { useSelector } from "react-redux"
import { selectLightMode } from "../redux/colorSlice"
import { Helmet } from "react-helmet-async"
import ProfileCard from "../components/ProfileCard"
import Header from "../components/Header"
import Footer from "../components/Footer"

const ProfilePage = () => {
    const lightMode = useSelector(selectLightMode)
    return(
        <div className={`mainLayout ${lightMode ? 'bgAuth' : 'bgAuthDark'} `}>
            <Helmet><title>Attimo Pizzeria | Profile</title></Helmet>
            <div className="layoutHeader fullWidth" >
                <Header />
            </div>
            <div className="layoutContent container">
                <ProfileCard />
            </div>
            <Footer className="layoutFooter" />
        </div>
    )
}

export default ProfilePage