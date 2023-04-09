import { useSelector } from 'react-redux'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HomeContent from '../components/HomeContent'
import { selectLightMode } from '../redux/colorSLice'

const HomePage = () => {
    const lightMode = useSelector(selectLightMode)

    return (
        <>
            <div className={`mainLayout ${lightMode ? 'bgHome' : 'bgHomeDark'} `}>
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