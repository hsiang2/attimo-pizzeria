import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { Button, theme } from "antd"
import styles from "./successCard.module.css";
import { selectLightMode } from "../../redux/colorSlice";


const SuccessCard = () => {
    const {
        token: { colorTextBase, colorPrimary },
    } = theme.useToken();
    const lightMode = useSelector(selectLightMode)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    return (
        <>
            <div className={lightMode ? styles.bg : styles.bgDark}>
                <div className={styles.wrapper}>
                    <img src="/images/img_success.png" width='236px' />
                    <h1 className={styles.title} style={{color: colorTextBase}}>Thanks For Your Order!</h1>
                    <p style={{textAlign: 'center', color: lightMode ? "#878787": "#9E9E9E"}}>
                        Your order has been completed and we will prepare it for you as soon as possible
                    </p>
                    <div className={styles.btnContainer}>
                        <button
                            onClick={() => {navigate("/")}}
                            className={styles.customButton}
                        >
                            <h3 className={styles.buttonText}>BACK TO HOME</h3> 
                            {/* <Icon icon="iconamoon:arrow-right-2-duotone" style={{fontSize: '1.25rem'}} /> */}
                        </button>
                        <Link
                            style={{textDecoration: 'none'}}
                            to="/auth/profile"
                            // onClick={() => {
                            //     navigate("/auth/profile")
                            // }}
                            // style={{backgroundColor: 'transparent', border: 'none'}}
                            className={lightMode ? styles.orderBtn : styles.orderBtnDark}
                        >
                            <h3 className={lightMode ? styles.orderBtnText : styles.orderBtnTextDark}>TRACK YOUR ORDER</h3> 
                            {/* <Icon icon="iconamoon:arrow-right-2-duotone" style={{fontSize: '1.25rem'}} /> */}
                        </Link>
                    </div>
                </div>


                
            </div>
        </>
    )
} 

export default SuccessCard