import { useDispatch, useSelector } from "react-redux";
import { notification } from "antd";
import { addCartItems } from "../../redux/cartSlice";
import uniqueId from 'lodash/uniqueId';
import { selectLightMode } from "../../redux/colorSlice";

const AddToCartButton = ({ product, qty, crust, size, add, remove, id }) => {
  const lightMode = useSelector(selectLightMode)
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
      }))
    };

    return (
        <button 
          className={lightMode ? 'customButton' : 'customButtonDark'}
          style={{width: '8.75rem', height: '2.38rem'}}
          onClick={addToCart}
        >
          <h5 className={ lightMode ? "buttonText" : "buttonTextDark"}>
            ADD TO CART
          </h5>  
        </button>
    )
}

export default AddToCartButton