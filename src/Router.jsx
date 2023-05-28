import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FindUsPage from './pages/FindUsPage'
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import ProductPage from './pages/ProductPage'
import OurStoryPage from './pages/OurStoryPage'
import ContactPage from './pages/ContactPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import { ConfigProvider } from 'antd'
import { useSelector } from 'react-redux'
import { selectLightMode } from "./redux/colorSlice";
import { darkTheme, lightTheme } from './theme'
import { HelmetProvider } from 'react-helmet-async'
import ProfilePage from './pages/ProfilePage'
import PlaceOrderPage from './pages/PlaceOrderPage'
import PaymentPage from './pages/PaymentPage'
import ShippingPage from './pages/ShippingPage'
import AuthPage from './pages/AuthPage'


const Router = () => {
    const lightMode = useSelector(selectLightMode)
    const theme = lightMode ? lightTheme : darkTheme
    return(
        <ConfigProvider theme={theme}>
            <HelmetProvider context={{}}>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='menu'>
                            <Route path='category/:categoryName' element={<MenuPage />} />
                            <Route path='id/:productId' element={<ProductPage />} />
                        </Route>
                        <Route path='auth' exact element={<AuthPage />} />
                        <Route path='auth/profile' element={<ProfilePage />} />
                        {/* <Route path='auth'>
                            <Route path='login' element={<LoginPage />} />
                            <Route path='register' element={<RegisterPage />} />
                            <Route path='profile' element={<ProfilePage />} />
                        </Route> */}
                        <Route path='shopping'>
                            <Route path='shipping' element={<ShippingPage />} />
                            <Route path='payment' element={<PaymentPage />} />
                            <Route path='placeorder' element={<PlaceOrderPage />} />
                        </Route>
                        <Route path='contact' element={<ContactPage />}/>
                        <Route path='ourstory' element={<OurStoryPage />}/>
                        <Route path='findus' element={<FindUsPage />}/>
                    </Routes>
                </BrowserRouter>
            </HelmetProvider>
            
        </ConfigProvider>
        
    )
}

export default Router