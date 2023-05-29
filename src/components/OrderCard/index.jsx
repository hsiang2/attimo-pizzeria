import { Col, Row, theme } from "antd"
import { useOrders } from "../../react-query"
import styles from "./orderCard.module.css"
import { useSelector } from "react-redux"
import { selectLightMode } from "../../redux/colorSlice"
import { Icon } from "@iconify/react"

const OrderCard = () => {
    const {
        token: { colorTextBase },
    } = theme.useToken();
    const lightMode = useSelector(selectLightMode)
    const { data: orders } = useOrders() || []
    // const { data, isLoading } = useOrders()
    // const orders = data || []
    return (
        <div className={lightMode ? styles.bg : styles.bgDark}>
            <div className={styles.wrapper}>
                <h1 className={styles.title} style={{color: colorTextBase}}>Orders</h1>
                {orders.map((order) =>
                    <div key={order.id} className={styles.item}>
                        <div className={styles.top}>
                            <div>
                                <p style={{color: lightMode ? "#53494578" : "#AFA09ACC"}} className={styles.subtitle}>
                                    ORDER ID
                                </p>
                                <p style={{color: lightMode ? "#534945" : "#D9CAC4"}}  className={styles.info}>{order.id}</p>
                            </div>
                            <div>
                                <p style={{color: lightMode ? "#53494578" : "#AFA09ACC"}}  className={styles.subtitle}>TOTAL</p>
                                <p style={{color: lightMode ? "#534945" : "#D9CAC4"}} className={styles.info}>{order.totalPrice}</p>
                            </div>
                            <div>
                                <p style={{color: lightMode ? "#53494578" : "#AFA09ACC"}}  className={styles.subtitle}>DELIVER TO</p>
                                <p style={{color: lightMode ? "#534945" : "#D9CAC4"}} className={styles.info}>{order.address}</p>
                            </div>
                        </div>
                        <div className={styles.bottom}>
                            <div>
                                {order.cartItems.map((item) => (
                                    <div key={item.id} style={{display: 'flex', alignItems: 'center', justifyContent: "space-between", width: '12.68rem' }}>
                                        <div style={{color: colorTextBase, display: 'flex', alignItems: 'center', gap: '0.68rem'}}>
                                            <Icon  icon="ph:pizza-light" />
                                            <h4 style={{margin: '0'}}>{item.name}</h4>
                                        </div>
                                        <p style={{color: lightMode ? "#3A3E2EC4" : "#FEF6E0C4", margin: '0'}}>x {item.qty}</p>
                                    </div>   
                                ))}
                            </div>
                            <button 
                                className={`${lightMode ? 'customButton' : 'customButtonDark'} ${styles.button}`}
                            >
                                <h5 className={ lightMode ? "buttonText" : "buttonTextDark"}>
                                    VIEW DETAILS
                                </h5>  
                            </button>
                        </div>
                    </div>
                )}
            </div>
            
        </div>
        
    )
}

export default OrderCard