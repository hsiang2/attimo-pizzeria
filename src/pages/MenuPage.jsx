import { useParams } from 'react-router-dom';
import Footer from '../components/Footer'
import Header from '../components/Header'
import MenuNav from '../components/MenuNav'
import ProductList from '../components/ProductList';
import products from '../json/products.json'

const MenuPage = () => {
    const { categoryName } = useParams()
    const _products = products.filter(
        x => x?.category.toUpperCase() === categoryName.toUpperCase()
      );
    
    return (
        
        <div className='bgMenu'>
            <div className="mainLayout">
                
                <div className="layoutHeader fullWidth" >
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