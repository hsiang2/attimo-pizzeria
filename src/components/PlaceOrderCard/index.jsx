import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { savePrice, saveShippingAddress, selectCartItems, selectPaymentMethod, selectShippingAddress } from "../../redux/cartSlice"
import { Button, Col, Form, Input, Row } from "antd"


const PlaceOrderCard = () => {
    const cartItems = useSelector(selectCartItems)
    const shippingAddress = useSelector(selectShippingAddress)
    const paymentMethod = useSelector(selectPaymentMethod)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const placeOrderHandler = () => {
        dispatch(savePrice({
            itemsPrice, shippingPrice, taxPrice, totalPrice
        }))
        navigate('/auth/profile')
    }

    const getTotalPrice = () => {
        return (cartItems.length > 0) ?
           cartItems.reduce((sum, item) => sum + (item.price + item.add.reduce((n, {price}) => n + price, 0)) * item.qty, 0)
           : 0;
    }

    const toPrice = (num) => Number(num.toFixed(2))
    const itemsPrice = toPrice(
        cartItems.reduce((sum, item) => sum + (item.price + item.add.reduce((n, {price}) => n + price, 0)) * item.qty, 0)
    );
    const shippingPrice = itemsPrice > 100 ? toPrice(0) : toPrice(10);
    const taxPrice = toPrice(0.15 * itemsPrice);
    const totalPrice = itemsPrice + shippingPrice + taxPrice;

    return (
        <Row gutter={[24, 24]}>
            <Col
                xs={{ span: 20, offset: 2 }}
                lg={{ span: 13, offset: 2 }}
            >
                <div>
                    <h2>Shipping</h2>
                    <p>
                        <strong>Name:</strong> {shippingAddress.fullName} <br />
                        <strong>Address: </strong> {shippingAddress.address},
                        {shippingAddress.city}, {shippingAddress.postalCode}
                        ,{shippingAddress.country}
                    </p>
                </div>
                <div className="card card-body">
                    <h2 >Payment</h2>
                    <p>
                        <strong>Method:</strong> {paymentMethod}
                    </p>
                </div>
                <div>
                    <h2>Order Items</h2>
                    {cartItems.length === 0 ? (
                        <div>Cart is empty</div>
                    ) : (
                        cartItems.map(item => (
                            <li key={item.id}>
                                <div>
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div>
                                    <div>{item.name}</div>
                                    <div>Qty: {item.qty}</div>
                                </div>
                                <div>
                                    ${((item.price + item.add.reduce((n, {price}) => n + price, 0)) * item.qty).toFixed(2)}
                                </div>
                            </li>
                        ))
                    )}
                    <div>
                        Total
                        <div>${getTotalPrice()}</div>
                    </div>
                </div>
            </Col>
            <Col
                xs={{ span: 20, offset: 2 }}
                lg={{ span: 7, offset: 0 }}
            >
                <div>
                    <h2>Order Summary</h2>
                    <div>
                        <div>Items</div>
                        <div>${itemsPrice}</div>
                    </div>
                    <div>
                        <div>Shipping</div>
                        <div>${shippingPrice}</div>
                    </div>
                    <div>
                        <div>Tax</div>
                        <div>${taxPrice}</div>
                    </div>
                    <div>
                        <div>
                            <strong> Order Total</strong>
                        </div>
                        <div>
                            <strong>${totalPrice}</strong>
                        </div>
                    </div>
                    <Button
                        onClick={placeOrderHandler}
                    >
                        Place Order
                    </Button>
                </div>
            </Col>
        </Row>
    )
} 

export default PlaceOrderCard