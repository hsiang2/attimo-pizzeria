import { theme } from "antd";

const CheckoutSteps = (props) => {
    const {
        token: { colorTextBase },
    } = theme.useToken();
    return (
        <div className="container checkout-steps" style={{marginTop: '9.5rem', color: colorTextBase, textAlign: 'center'}}>
            <div className={props.step1 ? 'active' : ''} >Sign-In</div>
            <div className={props.step2 ? 'active' : ''}>Shipping</div>
            <div className={props.step3 ? 'active' : ''}>Payment</div>
            <div className={props.step4 ? 'active' : ''}>Place Order</div>
        </div>
    )
}

export default CheckoutSteps