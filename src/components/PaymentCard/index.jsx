import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { savePaymentMethod, selectPaymentMethod } from "../../redux/cartSlice"
import { Button, Form, Radio } from "antd"
import styles from "./paymentmethodcard.module.css";

const PaymentCard = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { paymentMethod: paymentMethod } = useSelector(selectPaymentMethod)
    const [form] = Form.useForm()

    const handleSubmit = ({ paymentMethod: value }) => {
        dispatch(savePaymentMethod(value))
        navigate("/shopping/placeorder")
    }

    return (
        <Form
            onFinish={handleSubmit}
            name="normal_login"
            className={styles.paymentForm}
            initialValues={paymentMethod}
            form={form}
        >
            <Form.Item
                label="Payment Method: "
                name="paymentMethod"
            >
                <Radio.Group>
                    <Radio value="Google">Google</Radio>
                    <Radio value="PayPal">PayPal</Radio>
                    <Radio value="Line">Line</Radio>
                </Radio.Group>
            </Form.Item>

            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    className={styles.paymentForm__button}
                >
                    Continue
                </Button>
            </Form.Item>
        </Form>
    )
} 

export default PaymentCard