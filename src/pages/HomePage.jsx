import { Helmet } from 'react-helmet-async'
import { useSelector } from 'react-redux'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HomeContent from '../components/HomeContent'
import { selectLightMode } from '../redux/colorSlice'

const HomePage = () => {
    const lightMode = useSelector(selectLightMode)

    return (
        <>
            <div className={`mainLayout ${lightMode ? 'bgHome' : 'bgHomeDark'} `}>
                <Helmet><title>Attimo Pizzeria</title></Helmet>
                <div className="layoutHeader fullWidth" >
                    <Header />
                </div>
                <div className="layoutContent fullWidth">
                    <HomeContent />
                </div>
                <Footer className="layoutFooter" />
            </div>
        </>
        
    )
}

export default HomePage