import { Icon } from "@iconify/react"
import { Link } from "react-router-dom";
import { Badge, Button, Drawer } from "antd"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, editCartItems, removeCartItems, selectCartItems } from '../../redux/cartSlice'
import styles from './cart.module.css'

const Cart = () => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
      setOpen(true);
    };
  
    const onClose = () => {
      setOpen(false);
    };

    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
    // console.log(cartItems)

    const getTotalPrice = () => {
        return (cartItems.length > 0) ?
           cartItems.reduce((sum, item) => sum + (item.price + item.add.reduce((n, {price}) => n + price, 0)) * item.qty, 0)
           : 0;
     }
     const count = (cartItems.length > 0)
     ? cartItems.reduce((sum, item) => sum + item.qty, 0)
     : 0;
     
    //  useEffect(() => {
    //     setOpen(false)
    //  }, [open])

    //  (product.price + add.reduce((n, {price}) => n + price, 0)) * qty}
    return(
        <>
            <div onClick={showDrawer}>
                <Badge count={count} color="#BD5849" style={{color: 'white'}}>
                    <Icon icon="solar:cart-large-4-linear"/>
                </Badge>
            </div>
            <Drawer 
                onClose={onClose} 
                open={open} 
                className={styles.drawer} 
                style={{backgroundColor: '#FDF6E9'}}
                title={<h2 style={{textAlign: 'center', marginBottom: 0}}>My Cart</h2>}
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
                        <p style={{textAlign: 'center', marginTop: '1.5rem'}}>
                            Your Cart Is Empty 
                        </p>
                        <p style={{textAlign: 'center', width: '12.3rem'}}>
                            Looks like you haven’t added anything to your cart yet
                        </p>
                    </div>
                ) : (
                    <>
                        {cartItems.map(item => (
                            <li key={item.id} className={styles.item}>
                                <Link to={`/menu/id/${item.productId}?cartId=${item.id}`}>
                                   <img className={styles.image} src={item.image} alt={item.name} />
                                </Link>
                                <div className={styles.content}>
                                    <div className={styles.between}>
                                        <div className={styles.name}>{item.name}</div>
                                        <Icon icon="system-uicons:close" onClick={() => dispatch(removeCartItems(item.id))}/>
                                    </div>
                                    <div className={styles.custom}>
                                        <p>size : {item.size}</p> 
                                        <p>crust : {item.crust}</p> 
                                    </div>
                                    <div className={styles.custom}>
                                        {item.remove.length === 0 ? <></> : <p>x {item.remove.map(x => x.name).join(', ')}</p>  }
                                        {item.add.length === 0 ? <></> : <p>+ {item.add.map(x => x.name).join(', ')}</p>  }
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
                                                <Icon icon="fluent:subtract-24-regular" />
                                            </button>
                                                {item.qty}
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
                                                <Icon icon="quill:add"/>
                                            </button>   
                                        </div>
                                        <h2>${((item.price + item.add.reduce((n, {price}) => n + price, 0)) * item.qty).toFixed(2)}</h2>
                                    </div>
                                </div>
                            </li>
                        ))}
                        <hr style={{backgroundColor: '#C5BDB4CC', height: '1.25px', borderWidth: 0}}/>
                        <div className={styles.bottom}>
                            <button 
                                onClick={() => dispatch(clearCart())} 
                                style={{display: 'flex', gap: '0.75rem', alignItems: 'center'}}
                            >
                                <Icon icon="solar:trash-bin-minimalistic-linear" />
                                <p className={styles.clear}>clear  all</p>
                            </button>
                            <div style={{display: 'flex', gap: '1.18rem', alignItems: 'center'}}>
                                <h4 style={{margin: 0}}>Total</h4>
                                <div className={styles.totalPrice}>${getTotalPrice().toFixed(2)}</div>
                            </div>
                        </div>
                    </>
                )}      
                <Button className="customButton" style={{display: 'block', width: '17.3rem', marginRight: 'auto', marginLeft: 'auto'}}>
                    <h4>CHECKOUT</h4>
                </Button>
            </Drawer>
        </>
    )
}

export default Cart