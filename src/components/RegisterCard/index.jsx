import { Button, Checkbox, Form, Input, Space, theme } from "antd"
import { useRegisterWithEmailPassword } from "../../react-query"
import { useNavigate, Link } from "react-router-dom"
import { useEffect } from "react"

import styles from "./registerCard.module.css"
import { Icon } from "@iconify/react"
import { useSelector } from "react-redux"
import { selectLightMode } from "../../redux/colorSlice"

const RegisterCard = ({ redirect }) => {
    const {
        token: { colorPrimary },
    } = theme.useToken();
    const lightMode = useSelector(selectLightMode)
    const { mutate, error, isLoading, isError, isSuccess, data } = useRegisterWithEmailPassword()

    const [form] = Form.useForm()
    const navigate = useNavigate()

    const onFinish = (values) => {
        console.log("Received values of form: ", values)
        mutate(values)
    }

    useEffect(() => {
        if (isSuccess) {
            navigate(redirect)
        }
    }, [isSuccess, redirect])

    return(
        <Form
            requiredMark={false}
            form={form}
            name="register"
            onFinish={onFinish}
            className={styles.registerForm}
            scrollToFirstError
            layout="vertical"
        >
            
            <Form.Item 
                label="FULL NAME"
                style={{
                    margin: 0,
                    fontFamily: 'Alegreya Sans',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                }}
            >
                <Form.Item
                    name="firstName"
                    rules={[
                        {
                            required: true,
                            message: "Please input your first name!",
                            whitespace: true
                        }
                    ]}
                    style={{
                        display: 'inline-block',
                        width: 'calc(50% - 6px)',
                    }}
                >
                    <Input placeholder="first name" />
                </Form.Item>
                <Form.Item
                    name="lastName"
                    rules={[
                        {
                            required: true,
                            message: "Please input your last name!",
                            whitespace: true
                        }
                    ]}
                    style={{
                        display: 'inline-block',
                        width: 'calc(50% - 6px)',
                        marginLeft: '12px'
                        // margin: '0 8px',
                    }}
                >
                    <Input placeholder="last name" />
                </Form.Item>
            </Form.Item>
            
            <Form.Item
                name="email"
                label="EMAIL"
                rules={[
                    {
                        type: "email",
                        message: "The input is not valid E-mail!",
                    },
                    {
                        required: true,
                        message: "Please input your E-mail!"
                    }
                ]}
                style={{
                    fontFamily: 'Alegreya Sans',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                }}
            >
                <Input placeholder="example@mail.com" />
            </Form.Item>
            <Form.Item
                name="password"
                label="PASSWORD"
                rules={[
                    {
                        required: true,
                        message: "Please input your password!"
                    },
                    { min: 8, message: 'Password must be minimum 8 characters.' },
                ]}
                hasFeedback
                style={{
                    fontFamily: 'Alegreya Sans',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                }}
            >
                <Input.Password placeholder="at least 8 characters " />
            </Form.Item>
            {/* <Form.Item
                name="rePassword"
                label="Re-enter Password"
                dependencies={["password"]}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: "Please re-enter your password!",
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue("password") === value) {
                                return Promise.resolve()
                            }

                            return Promise.reject(
                                new Error("The two passwords that you entered do not match!")
                            )
                        }
                    })
                ]}
            >
                <Input.Password />
            </Form.Item> */}

            <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                    {
                        validator: (_, value) => 
                            value ? Promise.resolve()
                            : Promise.reject(new error("Should accept agreement"))
                    }
                ]}
                
            >
                <Checkbox  >
                    I accept to the <Link to={"/"} style={{color: colorPrimary}}>Terms &  Conditions</Link>
                </Checkbox>
            </Form.Item>

            <Form.Item style={{width: '100%', display: 'flex', justifyContent: 'end'}}>
                {isLoading ? (
                    <Button
                        // type="primary"
                        // className={styles.loginForm__button}
                        style={{backgroundColor: 'transparent', border: 'none'}}
                        className={`${lightMode ? 'customButton' : 'customButtonDark'} ${styles.button}`}
                        htmlType="submit"
                        loading
                    >
                    <h3 className={ lightMode ? "buttonText" : "buttonTextDark"}>SIGN UP</h3>
                    </Button>
                ) : (
                    <Button
                        // type="primary"
                        // className={styles.loginForm__button}
                        style={{backgroundColor: 'transparent', border: 'none'}}
                        className={`${lightMode ? 'customButton' : 'customButtonDark'} ${styles.button}`}
                        htmlType="submit"
                    >
                        <h3 className={ lightMode ? "buttonText" : "buttonTextDark"}>SIGN UP</h3>
                    </Button>
                )}
                {/* Already have an account?{" "}
                <Link to={`/auth/login?redirect=${redirect}`}>Login</Link> */}
            </Form.Item>
            {!isError ? (
                    <></>
                ) : (
                    <div className={styles.loginForm__errorWrap}>
                        <h3 className={styles.loginForm__errorTitle}>
                            <Icon name="material-symbols:warning-outline-rounded"/>
                            {"  "}There was a problem
                        </h3>
                        <p className={styles.loginForm__errorMessage}>{error.message}</p>
                    </div>
            )}
            
        </Form>
    )
}

export default RegisterCard