import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer'
import Header from '../components/Header'
import MenuNav from '../components/MenuNav'
import ProductList from '../components/ProductList';
import products from '../json/products.json'
import { selectLightMode } from '../redux/colorSlice';

const MenuPage = () => {
    const { categoryName } = useParams()
    const _products = products.filter(
        x => x?.category.toUpperCase() === categoryName.toUpperCase()
      );
    
    const lightMode = useSelector(selectLightMode)
    
    return (
        
        <div className={lightMode ? 'bgMenu' : 'bgMenuDark'}>
            <Helmet><title>Attimo Pizzeria | Menu</title></Helmet>
            <div className="mainLayout">
                
                <div className={`layoutHeader fullWidth ${lightMode ? 'bgHeader' : 'bgHeaderDark'}`} >
                    <Header />
                </div>
                <div className="layoutContent container">
                    <MenuNav />
                    <ProductList products={_products} />
                </div>
                <Footer className="layoutFooter" />
            </div>
        </div>
            
    
    )
}

export default MenuPage