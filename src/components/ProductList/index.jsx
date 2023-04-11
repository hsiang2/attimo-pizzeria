import { Row, Col } from "antd"
import ProductItem from "../ProductItem"

const ProductList = ({ products }) => {
    return (
        <Row align="start" gutter={[32, 32]} style={{marginBottom: "9rem"}}>
            {products.map(product => (
                <Col 
                    key={product.id} 
                    xs={{ span: 24 }}
                    sm={{ span: 24 }} 
                    md={{ span: 12 }}
                    lg={{ span: 8 }}
                >
                    <ProductItem product={product}/>
                </Col>
            ))}
        </Row>
    )
}

export default ProductList