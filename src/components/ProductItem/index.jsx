import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { selectLightMode } from "../../redux/colorSlice";
import styles from "./productItem.module.css"
import { theme } from "antd";

const ProductItem = ({ product }) => {
    const {
        token: { colorTextBase, colorPrimary },
    } = theme.useToken();
    const lightMode = useSelector(selectLightMode)

    return(
        <div className={styles.wrapper}>
            <Link to={`/menu/id/${product.id}`}>
                <img src={product.image} className={styles.image} />
            </Link>
            <div style={{paddingLeft: "1rem", paddingRight: "1rem"}}>
                <h4 style={{color: colorTextBase, fontWeight: 'bold'}} className={styles.text}>{product.name}</h4>
                <h5 style={{color: lightMode ? "#6C613980": "#DAD7CDB3", maxWidth: '9.375rem'}} className={styles.text}>{product.description}</h5>
                <div style={{display: "flex", justifyContent: "space-between", marginTop: '0.8rem'}}>
                    <h3 style={{color: colorPrimary, fontWeight: 'bold'}} className={styles.text}>${product.price}</h3>
                    <Link to={`/menu/id/${product.id}`} className={`${lightMode ? 'customButton' : 'customButtonDark'} ${styles.button}`} style={{textDecoration: 'none'}}>
                        <h5 className={ lightMode ? "buttonText" : "buttonTextDark"}>ORDER</h5>
                    </Link>
                </div>
            
            </div>
                
        </div>
    )
}

export default ProductItem