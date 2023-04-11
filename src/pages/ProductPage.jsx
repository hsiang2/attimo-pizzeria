import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom';
import _ from 'lodash';
import Footer from '../components/Footer'
import Header from '../components/Header'
import MenuNav from '../components/MenuNav'
import products from '../json/products.json'
import { Breadcrumb } from 'antd';
import ProductDetail from '../components/ProductDetail';
import { useSelector } from 'react-redux';
import { selectLightMode } from '../redux/colorSlice';
import { Icon } from '@iconify/react';
import { Helmet } from 'react-helmet-async';

const ProductPage = () => {
    const { productId } = useParams()
    const product = products.find(
        (x) => x.id === productId
     );
    const allProducts = products.filter((x) => x.category == product.category)
    const productIndex = allProducts.indexOf(product)
    const [searchParams] = useSearchParams()
    const cartId = searchParams.get('cartId')

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
            <Helmet><title>Attimo Pizzeria | {product.name}</title></Helmet>
            <div className="mainLayout">
                
                <div className={`layoutHeader fullWidth ${lightMode ? 'bgHeader' : 'bgHeaderDark'}`} >
                    <Header />
                </div>
                <div className="layoutContent fullWidth">
                    <div className='container' style={{marginBottom: '5.8rem'}}>
                        <MenuNav />
                        <Breadcrumb separator=">" items={breadcrumbItems} />
                    </div>
                    <div className={`fullWidth ${lightMode ? 'bgProductContent' : 'bgProductContentDark'}`}>
                        <ProductDetail product={product} />
                    </div>
                    {!!cartId ? 
                        <></>
                        :
                        <div className='container' style={{margin: '4.75rem auto 9rem'}}>
                            <div style={{display: 'flex', width: '6.4rem', marginLeft: 'auto', marginRight: 'auto', justifyContent: 'space-between', alignItems: 'center'}}>
                                <Link to={ productIndex - 1 >= 0 ? `/menu/id/${products[productIndex - 1].id}` : '#'}>
                                    <Icon icon="ic:round-keyboard-arrow-left" 
                                        style={{fontSize: '1.125rem', color: lightMode ? '#BC854499' : '#D9A44899'}}
                                    />
                                </Link>
                                
                                    <h5 style={{fontSize: '0.75rem', color: lightMode ? '#C57D01' : '#D9A448'}}>{productIndex + 1}</h5>
                                <Link to={ productIndex + 1 < allProducts.length ? `/menu/id/${products[productIndex + 1].id}` : '#'}>
                                    <Icon icon="ic:round-keyboard-arrow-right" 
                                        style={{fontSize: '1.125rem', color: lightMode ? '#BC854499' : '#D9A44899'}}
                                    />
                                </Link>
                                
                            </div>
                        </div>
                    }
                </div>
                <Footer className="layoutFooter" />
            </div>
        </div>
            
    
    )
}

export default ProductPage
