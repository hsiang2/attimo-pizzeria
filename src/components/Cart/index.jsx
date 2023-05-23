import { Icon } from "@iconify/react"
import { Link, useNavigate } from "react-router-dom";
import { Badge, Drawer, theme } from "antd"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, editCartItems, removeCartItems, selectCartItems } from '../../redux/cartSlice'
import { selectLightMode } from '../../redux/colorSlice'
import styles from './cart.module.css'
import { useUserInfo } from "../../react-query"

const Cart = () => {
    const { data: userInfo } = useUserInfo()

    const {
        token: { colorPrimary, colorTextBase, colorBgBase },
      } = theme.useToken();
    const lightMode = useSelector(selectLightMode)

    const [open, setOpen] = useState(false);

    const showDrawer = () => { setOpen(true); };
    const onClose = () => { setOpen(false); };

    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)

    const navigate = useNavigate()

    const getTotalPrice = () => {
        return (cartItems.length > 0) ?
           cartItems.reduce((sum, item) => sum + (item.price + item.add.reduce((n, {price}) => n + price, 0)) * item.qty, 0)
           : 0;
     }
     const count = (cartItems.length > 0)
     ? cartItems.reduce((sum, item) => sum + item.qty, 0)
     : 0;

     const checkoutHandler = ()  => {
        onClose()
        if(userInfo?.name)
            navigate("/shopping/shipping")
        else 
            navigate("/auth/login?redirect=/shopping/shipping")
     }
     
    return(
        <>
            <div onClick={showDrawer}>
                <Badge count={count} color="#BD5849" style={{color: 'white'}}>
                    <Icon 
                        className='icon'
                        style={{color: colorPrimary, cursor: 'pointer'}}
                        icon="solar:cart-large-4-linear"
                    />
                </Badge>
            </div>
            <Drawer 
                onClose={onClose} 
                open={open} 
                className={styles.drawer} 
                style={{backgroundColor: colorBgBase}}
                title={<h2 className={styles.mainTitle} style={{color: lightMode ? '#582F0E': '#B19A81'}}>My Cart</h2>}
            >
                {cartItems.length === 0 ? (
                    <div 
                        style={{
                            display: 'flex', flexDirection: 'column', 
                            justifyContent: 'center', alignItems: 'center',
                            marginBottom: '4.75rem', marginTop: '4rem'
                        }}
                    >
                        <img src="/images/img_empty_cart.png" />
                        <p className={styles.empty} style={{color: lightMode ? '#6E4230' : '#FEF6E0'}}>
                            Your Cart Is Empty 
                        </p>
                        <p className={styles.emptyText} style={{color: lightMode ? '#6E423066' : '#FEF6E08C'}}>
                            Looks like you haven’t added anything to your cart yet
                        </p>
                        <Link to="/menu/category/pizzas" className={`${lightMode ? 'customButton' : 'customButtonDark'} ${styles.button}`}>
                            <h4 className={ lightMode ? "buttonText" : "buttonTextDark"}>ORDER NOW</h4>
                        </Link>
                    </div>
                ) : (
                    <>
                        {cartItems.map(item => (
                            <li key={item.id} className={styles.item}>
                                <Link to={`/menu/id/${item.productId}?cartId=${item.id}`} onClick={() => setOpen(false)}>
                                   <img className={styles.image} src={item.image} alt={item.name} />
                                </Link>
                                <div className={styles.content}>
                                    <div className={styles.between}>
                                        <div className={styles.name} style={{color: colorTextBase}}>{item.name}</div>
                                        <Icon icon="system-uicons:close" className={styles.iconDelete} onClick={() => dispatch(removeCartItems(item.id))}/>
                                    </div>
                                    <div className={styles.custom}>
                                        <p className={styles.title} style={{color: lightMode ? '#808080CC' : '#A9A9A9'}} >
                                            size&nbsp;&nbsp;:&nbsp;&nbsp;<strong>{item.size}</strong></p> 
                                        <p className={styles.title} style={{color: lightMode ? '#808080CC' : '#A9A9A9'}} >
                                            crust&nbsp;&nbsp;:&nbsp;&nbsp;<strong>{item.crust}</strong></p> 
                                    </div>
                                    <div className={styles.custom}>
                                        {item.remove.length === 0 ? <></> : 
                                            <p className={styles.title} style={{color: lightMode ? '#D85643CC' : '#FFA69ECC'}}>
                                                x {item.remove.map(x => x.name).join(', ')}
                                            </p>  
                                        }
                                        {item.add.length === 0 ? <></> : 
                                            <p className={styles.title} style={{color: lightMode ? '#779624CC' : '#B6C199'}}>
                                                + {item.add.map(x => x.name).join(', ')}
                                            </p>  
                                        }
                                    </div>
                                    <div className={styles.between}>
                                        <div className={styles.qtyWrapper}>
                                            <button
                                                onClick={() => {
                                                        let qty = item.qty > 1 ? item.qty - 1 : 1
                                                        dispatch(editCartItems({
                                                            id: item.id,
                                                            productId: item.productId,
                                                            name: item.name,
                                                            image: item.image,
                                                            price: item.price,
                                                            qty,
                                                            crust: item.crust,
                                                            size: item.size,
                                                            add: item.add,
                                                            remove: item.remove
                                                        }))
                                                }} 
                                            >
                                                <Icon style={{color: colorTextBase}} icon="fluent:subtract-24-regular" />
                                            </button>
                                                <h6 style={{color: lightMode ? '#483E2E' : 'FEF6E099'}} className={styles.qty}>{item.qty}</h6>
                                            <button
                                                onClick={() => {
                                                    let qty = item.qty + 1
                                                    dispatch(editCartItems({
                                                        id: item.id,
                                                        productId: item.productId,
                                                        name: item.name,
                                                        image: item.image,
                                                        price: item.price,
                                                        qty,
                                                        crust: item.crust,
                                                        size: item.size,
                                                        add: item.add,
                                                        remove: item.remove
                                                    }))
                                                }} 
                                            >
                                                <Icon style={{color: colorTextBase}} icon="quill:add"/>
                                            </button>   
                                        </div>
                                        <h2 className={styles.qty} style={{color: lightMode ? '#AB3421' : '#F9A784CC'}}>
                                            ${((item.price + item.add.reduce((n, {price}) => n + price, 0)) * item.qty).toFixed(2)}
                                        </h2>
                                    </div>
                                </div>
                            </li>
                        ))}
                        <hr style={{backgroundColor: lightMode ? '#C5BDB4CC' : '#C5BDB445', height: '1.25px', borderWidth: 0}}/>
                        <div className={styles.bottom}>
                            <button 
                                onClick={() => dispatch(clearCart())} 
                                style={{ color: lightMode ? '#6E4230' : '#827E7C',
                                    display: 'flex', gap: '0.75rem', alignItems: 'center'
                                }}
                            >
                                <Icon style={{fontSize: '1.375rem'}} icon="solar:trash-bin-minimalistic-linear" />
                                <p className={styles.clear}>clear  all</p>
                            </button>
                            <div style={{ color: lightMode ? '#AB3421' : '#F9A784',
                                    display: 'flex', gap: '1.18rem', alignItems: 'center'
                                }}
                            >
                                <h4 style={{}} className={styles.total}>Total</h4>
                                <div className={styles.totalPrice}>${getTotalPrice().toFixed(2)}</div>
                            </div>
                        </div>
                        <button onClick={checkoutHandler} className={`${lightMode ? 'customButton' : 'customButtonDark'} ${styles.button}`}>
                            <h4 className={ lightMode ? "buttonText" : "buttonTextDark"}>ORDER NOW</h4>
                        </button>
                    </>
                )}      
            </Drawer>
        </>
    )
}

export default Cart