import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FindUsPage from './pages/FindUsPage'
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import ProductPage from './pages/ProductPage'
import OurStoryPage from './pages/OurStoryPage'
import ContactPage from './pages/ContactPage'


const Router = () => {
    return(
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
    )
}

export default Router