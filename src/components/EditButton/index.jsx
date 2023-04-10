import { useDispatch, useSelector } from "react-redux";
import { notification } from "antd";
import { editCartItems } from "../../redux/cartSlice";
import { selectLightMode } from "../../redux/colorSlice";

const EditButton = ({ product, qty, crust, size, add, remove, id }) => {
  const lightMode = useSelector(selectLightMode)

    const dispatch = useDispatch();

    const openNotification = () => {
      notification.open({
        message: 'Shopping Notification',
        description:
          "Your order has been modified.",
          // `${qty} ${qty > 1 ? "pieces" : "piece"} of ${product.name} ${qty > 1 ? "have" : "has"} been added to your cart.`,
        placement: 'bottomRight'
      });
    };
  
    const edit = () => {
      openNotification();
      dispatch(editCartItems({
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
        <button 
          className={lightMode ? 'customButton' : 'customButtonDark'}
          style={{width: '8.75rem', height: '2.38rem'}}
          onClick={edit}
        >
          <h5 className={ lightMode ? "buttonText" : "buttonTextDark"}>
            EDIT ORDER
          </h5>  
        </button>
    )
}

export default EditButton