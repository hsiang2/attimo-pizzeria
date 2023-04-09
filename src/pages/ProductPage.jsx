import { Link, useLocation, useParams } from 'react-router-dom';
import _ from 'lodash';
import Footer from '../components/Footer'
import Header from '../components/Header'
import MenuNav from '../components/MenuNav'
import ProductList from '../components/ProductList';
import products from '../json/products.json'
import { Breadcrumb } from 'antd';
import ProductDetail from '../components/ProductDetail';
import { useSelector } from 'react-redux';
import { selectLightMode } from '../redux/colorSLice';

const ProductPage = () => {
    const { productId } = useParams()
    const product = products.find(
        (x) => x.id === productId
     );
    const breadcrumbItems = [
        {
            title: <Link to="/">Home</Link>,
            key: 'home',
        },
        {
            title: <Link to={`/menu/category/${product.category}`}>Menu</Link>,
            key: 'menu',
        },
        {
            title: `${product.name}`,
            key: 'detail',
        },
    ]
    const lightMode = useSelector(selectLightMode)
    return (
        
        <div className={lightMode ? 'bgProduct' : 'bgProductDark'}>
            <div className="mainLayout">
                
                <div className={`layoutHeader fullWidth ${lightMode ? 'bgHeader' : 'bgHeaderDark'}`} >
                    <Header />
                </div>
                <div className="layoutContent fullWidth">
                    <div className='container'>
                        <MenuNav />
                        <Breadcrumb separator=">" items={breadcrumbItems} />
                    </div>
                    <div className='fullWidth'>
                        <ProductDetail product={product} />
                    </div>
                    {/* <ProductList products={_products} /> */}
                </div>
                <Footer className="layoutFooter" />
            </div>
        </div>
            
    
    )
}

export default ProductPage
