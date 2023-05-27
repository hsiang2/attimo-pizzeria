import { useNavigate } from "react-router-dom"
import { useLogout, useUpdateProfile, useUserInfo } from "../../react-query"
import { Button, Col, DatePicker, Form, Input, Row } from "antd"
import { useEffect } from "react"

import styles from "./personalInfo.module.css"
import { useSelector } from "react-redux"
import { selectLightMode } from "../../redux/colorSlice"
import { Icon } from "@iconify/react"

const PersonalInfo = ({ redirect }) => {
    const lightMode = useSelector(selectLightMode)

    const { data: userInfo } = useUserInfo() || {}
    const update = useUpdateProfile()
    const [form] = Form.useForm()

    const onUpdate = async (values) => {
        console.log("Received update info: ", values)
        update.mutate({ ...values, uid: userInfo.uid })
    }

    useEffect(() => {
        form.setFieldsValue(userInfo)
    }, [userInfo])



    return (
        <div className={lightMode ? styles.bg : styles.bgDark}>
            <Form
                className={styles.form}
                // style={{marginTop: "10rem"}}
                onFinish={onUpdate}
                name="normal_login"
                
                form={form}
                initialValues={userInfo}

                requiredMark={false}
                layout="vertical"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                    margin: 0,
                    fontFamily: 'Alegreya Sans',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                }}
            >
                <div>
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
                                        type: "string",
                                        message: "The input is not valid name!"
                                    },
                                    {
                                        message: "Please input your first name!"
                                    }
                                ]}
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
                                label='DATE OF BIRTH'
                                name='birth'
                            >
                                <DatePicker format='YYYY-MM-DD' style={{width: '100%'}} placeholder={userInfo?.birth || 'select date'} />
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
                                    message: "Please input your phone!",
                                },
                                ]}
                            >
                                <Input placeholder={userInfo?.phone || ''} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.List
                        name="adrs"
                        
                    >
                        {(fields, { add, remove }, { errors }) => (
                        <>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                                ADDRESS
                                <Form.Item style={{margin: '0'}}>
                                    <button
                                        
                                        onClick={() => add()}
                                        // style={{width: '60%',}}
                                    >
                                        Add +
                                    </button>
                                    <Form.ErrorList errors={errors} />
                                </Form.Item>
                            </div>
                            
                            {fields?.map((field, index) => (
                            <Form.Item
                                // label={index === 0 ? 'ADDRESS' : ''}
                                required={false}
                                key={field.key}
                            >
                                
                                <Form.Item
                                {...field}
                                validateTrigger={['onChange', 'onBlur']}
                                rules={[
                                    {
                                    required: true,
                                    whitespace: true,
                                    message: "Please input address or delete this field.",
                                    },
                                ]}
                                noStyle
                                >
                                <Input
                                    // placeholder="passenger name"
                                    style={{
                                        width: index === 0 ? '100%' : '90%',
                                    }}
                                    className={styles.adrsInput}
                                />
                                </Form.Item>
                                {fields?.length > 1 && index > 0 ? (
                                <Icon
                                    icon='fluent:delete-48-regular'
                                    className="dynamic-delete-button"
                                    onClick={() => remove(field.name)}
                                />
                                ) : null}
                            </Form.Item>
                            ))}
                            
                        </>
                        )}
                    </Form.List>
                    
                    {/* <Form.Item
                        label="ADDRESS"
                        name="adrs"
                        rules={[
                            {
                                type: "string",
                                message: "The input is not valid address!"
                            }, 
                            {
                                message: "Please input your address!"
                            }
                        ]}
                    >
                        <Input placeholder={userInfo?.adrs || ""} />
                    </Form.Item> */}
                </div>
                
                
                <Form.Item style={{width: '100%', display: 'flex', justifyContent: 'center', margin: '0'}}>
                    <Button
                        // type="primary"
                        // className={styles.loginForm__button}
                        style={{backgroundColor: 'transparent', border: 'none'}}
                        className={`${lightMode ? 'customButton' : 'customButtonDark'} ${styles.button}`}
                        htmlType="submit"
                    >
                        <h3 className={ lightMode ? "buttonText" : "buttonTextDark"}>UPDATE</h3>
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default PersonalInfo