import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { savePaymentMethod, selectPaymentMethod } from "../../redux/cartSlice"
import { Button, Col, Form, Input, Radio, Row, theme } from "antd"
import styles from "./paymentmethodcard.module.css";
import { selectLightMode } from "../../redux/colorSlice";
import { useEffect } from "react";

const PaymentCard = () => {
    const {
        token: { colorTextBase },
    } = theme.useToken();
    const lightMode = useSelector(selectLightMode)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const paymentMethod = useSelector(selectPaymentMethod)
    const [form] = Form.useForm()

    const handleSubmit = (values) => {
        dispatch(savePaymentMethod(values))
        navigate("/shopping/placeorder")
    }

    useEffect(() => {
        form.setFieldValue(paymentMethod)
    }, [paymentMethod])

    // return (
    //     <Form
    //         onFinish={handleSubmit}
    //         name="normal_login"
    //         className={styles.paymentForm}
    //         initialValues={paymentMethod}
    //         form={form}
    //     >
    //         <Form.Item
    //             label="Payment Method: "
    //             name="paymentMethod"
    //         >
    //             <Radio.Group>
    //                 <Radio value="Google">Google</Radio>
    //                 <Radio value="PayPal">PayPal</Radio>
    //                 <Radio value="Line">Line</Radio>
    //             </Radio.Group>
    //         </Form.Item>

    //         <Form.Item>
    //             <Button
    //                 type="primary"
    //                 htmlType="submit"
    //                 className={styles.paymentForm__button}
    //             >
    //                 Continue
    //             </Button>
    //         </Form.Item>
    //     </Form>
    // )
    return(
        <>
            <div className={lightMode ? styles.bg : styles.bgDark}>
                <h1 className={styles.title} style={{color: colorTextBase}}>Personal Details</h1>
                <div className={styles.formWrapper}>
                    <div className={styles.optionWrapper}>
                        <div className={styles.optionActive} style={{color: colorTextBase}}>
                            <img src="/images/icon_credit_card.png" width='24px' />
                            Credit Card
                        </div>
                        <div className={styles.option} style={{color: colorTextBase}}>
                            <img src="/images/icon_paypal.png" width='24px' />
                            PayPal
                        </div>
                        <div className={styles.option} style={{color: colorTextBase}}> 
                            <img src="/images/icon_bank.png" width='24px' />
                            Net Banking
                        </div>
                    </div>
                    <Form
                        onFinish={handleSubmit}
                        name="normal_login"
                        className={styles.paymentForm}

                        initialValues={paymentMethod}

                        form={form}
                        requiredMark={false}
                        layout="vertical"
                        style={{
                            fontFamily: 'Alegreya Sans',
                            fontWeight: 'bold',
                            fontSize: '1rem',
                        }}
                    >   
                        <Form.Item
                            label="Card Number"
                            name="cardNumber"
                            rules={[
                                {
                                    type: "string",
                                    message: "The input is not valid card number!"
                                },
                                {
                                    required: true,
                                    message: "Please input your card number"
                                },
                                {
                                    min: 16, max: 16,
                                    message: "The input is not valid card number!"
                                }
                            ]}
                            hasFeedback
                        >
                            <Input placeholder="enter your card 16 digit number" />
                        </Form.Item>
                        <Form.Item
                            label="Name On Card"
                            name="nameOnCard"
                            rules={[
                                {
                                    type: "string",
                                    message: "The input is not valid name!"
                                },
                                {
                                    required: true,
                                    message: "Please input card holder name"
                                }
                            ]}
                            hasFeedback
                        >
                            <Input placeholder="card holder name" />
                        </Form.Item>
                        <Row gutter={[32, 16]}>
                            <Col
                                xs={{ span: 24 }}
                                md={{ span: 12 }}
                            >
                                <Form.Item
                                    label="Expiration Date"
                                    name="expirationDate"
                                    rules={[
                                        {
                                            type: "string",
                                            message: "The input is not valid expiration date!"
                                        },
                                        {
                                            required: true,
                                            message: "Please input expiration date"
                                        },
                                        {
                                            min: 4, max: 4,
                                            message: "The input is not valid card number!"
                                        }
                                    ]}
                                    hasFeedback
                                >
                                    <Input placeholder="MM / YY" />
                                </Form.Item>
                            </Col>
                            <Col
                                xs={{ span: 24 }}
                                md={{ span: 12 }}
                            >
                                <Form.Item
                                        label="CVV Code"
                                        name="cvvCode"
                                        rules={[
                                            {
                                                type: "string",
                                                message: "The input is not valid CVV Code!"
                                            },
                                            {
                                                required: true,
                                                message: "Please input CVV Code!"
                                            },
                                            {
                                                min: 3, max: 3,
                                                message: "The input is not valid CVV Code!"
                                            }
                                        ]}
                                        hasFeedback
                                    >
                                        <Input placeholder="x x x" />
                                </Form.Item>
                            </Col>
                        </Row>
                        
                    </Form>
                </div>
            </div>
            <div className={styles.btnContainer}>
                <button
                    onClick={() => {
                        navigate("/shopping/shipping")
                    }}
                    className={styles.customButton}
                >
                    <h3 className={styles.buttonText}>BACK</h3> 
                    {/* <Icon icon="iconamoon:arrow-right-2-duotone" style={{fontSize: '1.25rem'}} /> */}
                </button>
                <Button
                    onClick={() => {form.submit()}
                }
                    style={{backgroundColor: 'transparent', border: 'none'}}
                    className={`${lightMode ? 'customButton' : 'customButtonDark'} ${styles.button}`}
                >
                    <h3 className={ lightMode ? "buttonText" : "buttonTextDark"}>NEXT</h3> 
                    {/* <Icon icon="iconamoon:arrow-right-2-duotone" style={{fontSize: '1.25rem'}} /> */}
                </Button>
            </div>
            
        </>
    )
} 

export default PaymentCard