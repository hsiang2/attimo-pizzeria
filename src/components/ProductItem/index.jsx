import { Link } from "react-router-dom"
import styles from "./productItem.module.css"

const ProductItem = ({ product }) => {
    return(
        <div className={styles.wrapper}>
            <Link to={`/menu/id/${product.id}`}>
                <img src={product.image} className={styles.image} />
            </Link>
            <div style={{paddingLeft: "1rem", paddingRight: "1rem"}}>
                <h4>{product.name}</h4>
                <h5>{product.description}</h5>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <h3>${product.price}</h3>
                    <Link to={`/menu/id/${product.id}`}>
                        <h5>ORDER</h5>
                    </Link>
                </div>
            
            </div>
                
        </div>
    )
}

export default ProductItem