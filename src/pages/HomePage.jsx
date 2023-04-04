import Footer from '../components/Footer'
import Header from '../components/Header'
import HomeContent from '../components/HomeContent'

const HomePage = () => {
    return (
        <>
            <div className="mainLayout">
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