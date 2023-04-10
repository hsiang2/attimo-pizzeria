import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FindUsPage from './pages/FindUsPage'
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import ProductPage from './pages/ProductPage'
import OurStoryPage from './pages/OurStoryPage'
import ContactPage from './pages/ContactPage'
import { ConfigProvider } from 'antd'
import { useSelector } from 'react-redux'
import { selectLightMode } from "./redux/colorSlice";
import { darkTheme, lightTheme } from './theme'
import { HelmetProvider } from 'react-helmet-async'


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