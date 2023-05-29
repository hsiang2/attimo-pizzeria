import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { saveShippingAddress, selectShippingAddress } from "../../redux/cartSlice"
import { Button, Checkbox, Col, Form, Input, Row, Select, theme } from "antd"
import styles from "./shippingaddresscard.module.css";
import { selectLightMode } from "../../redux/colorSlice";
import { useAddAdrs, useUserInfo } from "../../react-query";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

const ShippingCard = () => {
    const {
        token: { colorTextBase, colorPrimary },
    } = theme.useToken();
    const lightMode = useSelector(selectLightMode)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const shippingAddress = useSelector(selectShippingAddress)
    const { data: userInfo } = useUserInfo() || {}
    const [isSave, setIsSave] = useState(false)

    const addAdrs = useAddAdrs()
    const [form] = Form.useForm()

    const handleSubmit = async (values) => {
        if (isSave) {
            console.log("Received update info: ", values)
            addAdrs.mutate({ adrs: values.otherAdrs, uid: userInfo.uid })
        }
        
        dispatch(saveShippingAddress(values))
        navigate("/shopping/payment")

        // form.validateFields()
		// 	.then((values) => {
		// 		if (isSave) {
        //             console.log("Received update info: ", values)
        //             addAdrs.mutate({ adrs: values.otherAdrs, uid: userInfo.uid })
        //             console.log(values.otherAdrs)
        //         }
                
        //         dispatch(saveShippingAddress(values))
        //         navigate("/shopping/payment")
		// 	})
		// 	.catch((errorInfo) => {
        //         console.log(errorInfo)
        //     });

        //save address to personalInfo
        
    }

    // const handleSubmit = (values) => {
    //     dispatch(saveShippingAddress(values))
    //     navigate("/shopping/payment")
    // }

    useEffect(() => {
        if(JSON.stringify(shippingAddress) === '{}') {
            form.setFieldsValue(userInfo)
        } else {
            form.setFieldValue(shippingAddress)
        }
    }, [userInfo, shippingAddress])
    
    return (
        <>
            <div className={lightMode ? styles.bg : styles.bgDark}>
                <h1 className={styles.title} style={{color: colorTextBase}}>Personal Details</h1>
                <Form
                    onFinish={handleSubmit}
                    name="normal_login"
                    className={styles.shippingForm}


                    initialValues={JSON.stringify(shippingAddress) === '{}' ? userInfo : shippingAddress}


                    form={form}
                    requiredMark={false}
                    layout="vertical"
                    style={{
                        fontFamily: 'Alegreya Sans',
                        fontWeight: 'bold',
                        fontSize: '1rem',
                    }}
                >
                    <Row gutter={[64, 16]}>
                        <Col
                            xs={{ span: 24 }}
                            md={{ span: 12 }}
                        >
                            <Form.Item
                                label="FIRST NAME"
                                name="firstName"
                                rules={[
                                    {
                                        type: "string"
                                    },
                                    {
                                        required: true,
                                        message: "Please input your first name"
                                    }
                                ]}
                                hasFeedback
                            >
                                <Input placeholder={userInfo.firstName} />
                            </Form.Item>
                        </Col>
                        <Col
                            xs={{ span: 24 }}
                            md={{ span: 12 }}
                        >
                            <Form.Item
                                    label="LAST NAME"
                                    name="lastName"
                                    rules={[
                                        {
                                            type: "string",
                                            message: "The input is not valid name!"
                                        },
                                        {
                                            required: true,
                                            message: "Please input your last name!"
                                        }
                                    ]}
                                >
                                    <Input placeholder={userInfo.lastName} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[64, 16]}>
                        <Col
                            xs={{ span: 24 }}
                            md={{ span: 12 }}
                        >
                            <Form.Item
                                name="email"
                                label="EMAIL"
                                rules={[
                                    {
                                        type: "email",
                                        message: "The input is not valid E-mail!"
                                    },
                                    {
                                        required: true,
                                        message: "Please input your E-mail!"
                                    }
                                ]}
                                hasFeedback
                            >
                                <Input 
                                    prefix={<Icon name="ic:outline-email" />}
                                    placeholder={userInfo?.email || ''}
                                />
                            </Form.Item>
                            
                        </Col>
                        <Col
                            xs={{ span: 24 }}
                            md={{ span: 12 }}
                        >
                            <Form.Item
                                label="PHONE"
                                name="phone"
                                rules={[
                                {
                                    type: "string",
                                    message: "The input is not valid phone!",
                                },
                                {
                                    required: true,
                                    message: "Please input your phone!",
                                },
                                ]}
                            >
                                <Input placeholder={userInfo?.phone || ''} />
                            </Form.Item>
                        </Col>
                    </Row>
                    {/* <Form.Item
                        label="Addres: "
                        name="address"
                        rules={[
                            {
                                type: "string"
                            },
                            {
                                required: true,
                                message: "Please input your address"
                            }
                        ]}
                        hasFeedback
                    >
                        <Input placeholder="Enter Address" />
                    </Form.Item> */}

                    <Form.Item
                        name="address"
                        label="ADDRESS"
                        rules={[
                            {
                                required: true,

                            },
                        ]}
                    >
                        <Select
                            placeholder="Select the address"
                            allowClear
                        >
                            {
                                (userInfo?.adrs?.[0] !== "") ?
                                userInfo?.adrs?.map((adrs) => 
                                    <Select.Option key={adrs} value={adrs}>{adrs}</Select.Option>
                                ) : <></>
                            }
                            <Select.Option value="other">other</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        noStyle
                        shouldUpdate={(prevValues, currentValues) => prevValues.address !== currentValues.address}
                    >
                        {({ getFieldValue }) =>
                            getFieldValue('address') === 'other' ? (
                                <>
                                    <Form.Item
                                        name="otherAdrs"
                                        // label="Customize Gender"
                                        rules={[
                                            {
                                            required: true,
                                            message: "Please input address!",
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Create a new address" />
                                    </Form.Item>
                                    <Form.Item 
                                    style={{width: '100%', display: 'flex', justifyContent: 'end'}}
                                        name="save" valuePropName="checked" 
                                    >
                                        <Checkbox onChange={() => setIsSave(!isSave)} checked={isSave} style={{fontSize: '0.875rem'}}>
                                            Save as a Default Address
                                        </Checkbox>
                                    </Form.Item>
                                </>        
                            ) : null
                        }
                    </Form.Item>
                </Form>
            </div>
            <div className={styles.btnContainer}>
                <Button
                    onClick={() => form.submit()}
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

export default ShippingCard