import { useDispatch } from "react-redux";
import { notification } from "antd";

const AddToCartButton = ({ product, qty, crust, size, add, remove }) => {
    const dispatch = useDispatch();

    const openNotification = () => {
      notification.open({
        message: 'Shopping Notification',
        description:
          `${qty} ${qty > 1 ? "pieces" : "piece"} of ${product.name} ${qty > 1 ? "have" : "has"} been added to your cart.`,
        placement: 'bottomRight'
      });
    };
  
    const addToCart = () => {
      openNotification();
      dispatch(addCartItems({
        product: product,
        
        // id: product.id,
        // name: product.name,
        // image: product.image,
        // price: product.price,
        // countInStock: product.countInStock,
        // qty,
      }))
    };

    return (
        <button onClick={addToCart}>
            ADD TO CART
        </button>
    )
}

export default AddToCartButton