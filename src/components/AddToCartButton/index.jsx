import { useDispatch } from "react-redux";
import { notification } from "antd";
import { addCartItems } from "../../redux/cartSlice";
import uniqueId from 'lodash/uniqueId';

const AddToCartButton = ({ product, qty, crust, size, add, remove, id }) => {
    if(id == '') {
        id = uniqueId()
    }

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
        id: id,
        productId: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        qty,
        crust,
        size,
        add,
        remove
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