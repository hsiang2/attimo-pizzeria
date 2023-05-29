import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { clearCart, clearCheckout, editCartItems, removeCartItems, savePrice, saveShippingAddress, selectCartItems, selectPaymentMethod, selectShippingAddress } from "../../redux/cartSlice"
import { Button, Col, Form, Input, Row, theme } from "antd"
import { addOrder } from "../../api"
import { useAddOrder } from "../../react-query"
import { selectLightMode } from "../../redux/colorSlice"
import styles from "./placeOrderCard.module.css";
import { Icon } from "@iconify/react"


const PlaceOrderCard = () => {
    const {
        token: { colorTextBase },
    } = theme.useToken();
    const lightMode = useSelector(selectLightMode)

    const cartItems = useSelector(selectCartItems)
    const shippingAddress = useSelector(selectShippingAddress)
    const paymentMethod = useSelector(selectPaymentMethod)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { mutate, error, isLoading, isError, isSuccess, data } = useAddOrder()

    const placeOrderHandler = () => {

        // dispatch(savePrice({
        //     itemsPrice, shippingPrice, taxPrice, totalPrice
        // }))
        // addOrder({ 
        //     fullName: shippingAddress.fullName,
        //     address: shippingAddress.address,
        //     paymentMethod,
        //     cartItems,
        //     itemsPrice, 
        //     shippingPrice, 
        //     taxPrice, 
        //     totalPrice 
        // })
        mutate({
            firstName: shippingAddress.firstName,
            lastName: shippingAddress.lastName,
            email: shippingAddress.email,
            phone: shippingAddress.phone,
            address: shippingAddress.address === 'other' ?
            shippingAddress.otherAdrs :
            shippingAddress.address,
            cardNumber: paymentMethod.cardNumber,
            cartItems,
            // itemsPrice, 
            // shippingPrice, 
            // taxPrice, 
            totalPrice: getTotalPrice().toFixed(2)
        })
        
        dispatch(clearCart())
        dispatch(clearCheckout())
        navigate('/shopping/success')
        
    }

    const getTotalPrice = () => {
        return (cartItems.length > 0) ?
           cartItems.reduce((sum, item) => sum + (item.price + item.add.reduce((n, {price}) => n + price, 0)) * item.qty, 0)
           : 0;
    }

    // const toPrice = (num) => Number(num.toFixed(2))
    // const itemsPrice = toPrice(
    //     cartItems.reduce((sum, item) => sum + (item.price + item.add.reduce((n, {price}) => n + price, 0)) * item.qty, 0)
    // );
    // const shippingPrice = itemsPrice > 100 ? toPrice(0) : toPrice(10);
    // const taxPrice = toPrice(0.15 * itemsPrice);
    // const totalPrice = itemsPrice + shippingPrice + taxPrice;

    return (
        <>
            <div className={lightMode ? styles.bg : styles.bgDark}>
                <h1 className={styles.title} style={{color: colorTextBase}}>Order Confirmation</h1>
                <div className={styles.layout}>
                    <div>
                        <h3 style={{color: colorTextBase}} className={styles.subTitle}>
                            Your Information
                        </h3>
                        <p style={{color: lightMode ? '#454545' : '#949494'}}>
                            {shippingAddress.firstName}&nbsp;{shippingAddress.lastName}
                        </p>
                        <div className={styles.infoWrapper} style={{color: lightMode ? '#454545' : '#949494'}}>
                            <p>{shippingAddress.email}</p>
                            <p>{shippingAddress.phone}</p>
                        </div>
                        <h3 style={{color: colorTextBase}} className={styles.subTitle}>
                            Delivery Address
                        </h3>
                        <p style={{color: lightMode ? '#454545' : '#949494', marginBottom: '3rem'}}>
                            {shippingAddress.address === 'other' ?
                                shippingAddress.otherAdrs :
                                shippingAddress.address
                            }
                        </p>
                        <h3 style={{color: colorTextBase}} className={styles.subTitle}>
                            Your Payment
                        </h3>
                        <p style={{color: lightMode ? '#454545' : '#949494'}}>Credit Card</p>
                        <div style={{color: lightMode ? '#454545' : '#949494', marginBottom: '3rem'}} className={styles.creditCard}>
                            <img src="/images/icon_credit_card_color.png" width='24px' />
                            <p style={{margin: '0 0 0 1rem', display: 'inline', fontSize: '1.5rem'}}>···· ···· ···· </p>
                            {paymentMethod.cardNumber.substring(12)}
                        </div>
                    </div>
                    <div className={styles.cartBg}>
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
                        
                            cartItems.map(item => (
                                <li key={item.id} className={styles.item}>
                                    {/* <Link to={`/menu/id/${item.productId}?cartId=${item.id}`} onClick={() => setOpen(false)}> */}
                                        <img className={styles.image} src={item.image} alt={item.name} />
                                    {/* </Link> */}
                                    <div className={styles.content}>
                                        <div className={styles.name} style={{color: colorTextBase}}>{item.name}</div>
                                        <div className={styles.custom}>
                                            <p className={styles.cartTitle} style={{color: lightMode ? '#808080CC' : '#A9A9A9'}} >
                                                size&nbsp;&nbsp;:&nbsp;&nbsp;<strong>{item.size}</strong></p> 
                                            <p className={styles.cartTitle} style={{color: lightMode ? '#808080CC' : '#A9A9A9'}} >
                                                crust&nbsp;&nbsp;:&nbsp;&nbsp;<strong>{item.crust}</strong></p> 
                                        </div>
                                        <div className={styles.custom}>
                                            {item.remove.length === 0 ? <></> : 
                                                <p className={styles.cartTitle} style={{color: lightMode ? '#D85643CC' : '#FFA69ECC'}}>
                                                    x {item.remove.map(x => x.name).join(', ')}
                                                </p>  
                                            }
                                            {item.add.length === 0 ? <></> : 
                                                <p className={styles.cartTitle} style={{color: lightMode ? '#779624CC' : '#B6C199'}}>
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
                            )
                        ))}
                        <hr style={{backgroundColor: lightMode ? '#C5BDB4CC' : '#C5BDB445', height: '1.25px', borderWidth: 0}}/>
                        <div style={{ color: lightMode ? '#AB3421' : '#F9A784',
                                display: 'flex', gap: '1.18rem', alignItems: 'center', justifyContent:'end',
                            }}
                        >
                            <h4 style={{}} className={styles.total}>Total</h4>
                            <div className={styles.totalPrice}>${getTotalPrice().toFixed(2)}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.btnContainer}>
                <button
                    onClick={() => {
                        navigate("/shopping/payment")
                    }}
                    className={styles.customButton}
                >
                    <h3 className={styles.buttonText}>BACK</h3> 
                    {/* <Icon icon="iconamoon:arrow-right-2-duotone" style={{fontSize: '1.25rem'}} /> */}
                </button>
                <Button
                    onClick={placeOrderHandler}
                    // style={{backgroundColor: 'transparent', border: 'none'}}
                    className={lightMode ? styles.orderBtn : styles.orderBtnDark}
                >
                    <h3 className={lightMode ? styles.orderBtnText : styles.orderBtnTextDark}>ORDER</h3> 
                    {/* <Icon icon="iconamoon:arrow-right-2-duotone" style={{fontSize: '1.25rem'}} /> */}
                </Button>
            </div>
        </>
    )

    // return (
    //     <Row gutter={[24, 24]}>
    //         <Col
    //             xs={{ span: 20, offset: 2 }}
    //             lg={{ span: 13, offset: 2 }}
    //         >
    //             <div>
    //                 <h2>Shipping</h2>
    //                 <p>
    //                     <strong>Name:</strong> {shippingAddress.fullName} <br />
    //                     <strong>Address: </strong> {shippingAddress.address},
    //                     {/* {shippingAddress.city}, {shippingAddress.postalCode}
    //                     ,{shippingAddress.country} */}
    //                 </p>
    //             </div>
    //             <div className="card card-body">
    //                 <h2 >Payment</h2>
    //                 <p>
    //                     <strong>Method:</strong> {paymentMethod}
    //                 </p>
    //             </div>
    //             <div>
    //                 <h2>Order Items</h2>
    //                 {cartItems.length === 0 ? (
    //                     <div>Cart is empty</div>
    //                 ) : (
    //                     cartItems.map(item => (
    //                         <li key={item.id}>
    //                             <div>
    //                                 <img src={item.image} alt={item.name} />
    //                             </div>
    //                             <div>
    //                                 <div>{item.name}</div>
    //                                 <div>Qty: {item.qty}</div>
    //                             </div>
    //                             <div>
    //                                 ${((item.price + item.add.reduce((n, {price}) => n + price, 0)) * item.qty).toFixed(2)}
    //                             </div>
    //                         </li>
    //                     ))
    //                 )}
    //                 <div>
    //                     Total
    //                     <div>${getTotalPrice()}</div>
    //                 </div>
    //             </div>
    //         </Col>
    //         <Col
    //             xs={{ span: 20, offset: 2 }}
    //             lg={{ span: 7, offset: 0 }}
    //         >
    //             <div>
    //                 <h2>Order Summary</h2>
    //                 <div>
    //                     <div>Items</div>
    //                     <div>${itemsPrice}</div>
    //                 </div>
    //                 <div>
    //                     <div>Shipping</div>
    //                     <div>${shippingPrice}</div>
    //                 </div>
    //                 <div>
    //                     <div>Tax</div>
    //                     <div>${taxPrice}</div>
    //                 </div>
    //                 <div>
    //                     <div>
    //                         <strong> Order Total</strong>
    //                     </div>
    //                     <div>
    //                         <strong>${totalPrice}</strong>
    //                     </div>
    //                 </div>
    //                 <Button
    //                     onClick={placeOrderHandler}
    //                 >
    //                     Place Order
    //                 </Button>
    //             </div>
    //         </Col>
    //     </Row>
    // )


} 

export default PlaceOrderCard