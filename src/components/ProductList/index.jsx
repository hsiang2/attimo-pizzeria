import { Row, Col, Skeleton } from "antd"
import ProductItem from "../ProductItem"

const ProductList = ({ products, isLoading }) => {
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
                    <Skeleton loading={isLoading} avatar active>
                        <ProductItem product={product}/>
                    </Skeleton>
                </Col>
            ))}
        </Row>
    )
}

export default ProductList