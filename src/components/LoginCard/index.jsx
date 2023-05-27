import { Button, Checkbox, Form, Input, theme } from "antd"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useSignInWithEmailPassword } from "../../react-query"
import { Icon } from "@iconify/react"

import styles from './loginCard.module.css';
import { useSelector } from "react-redux"
import { selectLightMode } from "../../redux/colorSlice"


const LoginCard = ({ redirect }) => {
    const {
        token: { colorTextBase },
    } = theme.useToken();
    const lightMode = useSelector(selectLightMode)

    const { mutate, error, isLoading, isError, isSuccess, data } = useSignInWithEmailPassword()
    const [isRemember, setIsRemember] = useState(false)
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

    return (
        <Form
            name="normal_login"
            className={styles.loginForm}
            form={form}
            initialValues={{
                isRemember: true
            }}
            onFinish={onFinish}
            layout="vertical"
            requiredMark={false}
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
                style={{
                    fontFamily: 'Alegreya Sans',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                }}
            >
                <Input 
                    prefix={<Icon name="ic:outline-email" />}
                    placeholder="example@mail.com"
                />
            </Form.Item>
            <Form.Item
                name="password"
                label="PASSWORD"
                rules={[
                    {
                        required: true,
                        message: "Please input your Password!"
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
                <Input.Password 
                    prefix={<Icon name="mdi:password-outline" />}
                    type="password"
                    placeholder="at least 8 characters"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle >
                    <Checkbox onChange={() => setIsRemember(!isRemember)} checked={isRemember} style={{fontSize: '0.875rem', width: '50%'}}>
                        remember me
                    </Checkbox>
                </Form.Item>
                <Link to={"/"} style={{fontSize: '0.875rem', color: colorTextBase, display: 'inline-block', width: '50%', textAlign: 'end'}}>
                    forgot password ?
                </Link>
                
            </Form.Item>

            <Form.Item style={{width: '100%', display: 'flex', justifyContent: 'end'}}>
                {isLoading ? (
                    <Button
                        // type="primary"
                        htmlType="submit"
                        // className={styles.loginForm__button}
                        loading
                        style={{backgroundColor: 'transparent', border: 'none'}}
                        className={`${lightMode ? 'customButton' : 'customButtonDark'} ${styles.button}`}
                    >
                       <h3 className={ lightMode ? "buttonText" : "buttonTextDark"}>LOG IN</h3> 
                    </Button>
                ) : (
                    <Button
                        // type="primary"
                        htmlType="submit"
                        // className={styles.loginForm__button}
                        style={{backgroundColor: 'transparent', border: 'none'}}
                        className={`${lightMode ? 'customButton' : 'customButtonDark'} ${styles.button}`}
                    >
                       <h3 className={ lightMode ? "buttonText" : "buttonTextDark"}>LOG IN</h3> 
                    </Button>
                )}
            </Form.Item>
            {!isError ? (
                    <div></div>
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

export default LoginCard