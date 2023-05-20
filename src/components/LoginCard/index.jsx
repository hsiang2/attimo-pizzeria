import { Button, Checkbox, Form, Input } from "antd"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useSignInWithEmailPassword } from "../../react-query"
import { Icon } from "@iconify/react"

import styles from './logincard.module.css';


const LoginCard = ({ redirect }) => {

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
            style={{marginTop: "10rem"}}
            name="normal_login"
            className={styles.loginForm}
            form={form}
            initialValues={{
                isRemember: true
            }}
            onFinish={onFinish}
        >
            <Form.Item
                name="email"
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
                    placeholder="E-Mail"
                />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: "Please input your Password!"
                    }
                ]}
                hasFeedback
            >
                <Input.Password 
                    prefix={<Icon name="mdi:password-outline" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Link className={styles.loginForm__forgot} to={"/"}>
                    Forgot password
                </Link>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox onChange={() => setIsRemember(!isRemember)} checked={isRemember}>
                        Remember me
                    </Checkbox>
                </Form.Item>
            </Form.Item>

            <Form.Item>
                {isLoading ? (
                    <Button
                        type="primary"
                        htmlType="submit"
                        className={styles.loginForm__button}
                        loading
                    >
                        Log in
                    </Button>
                ) : (
                    <Button
                        type="primary"
                        htmlType="submit"
                        className={styles.loginForm__button}
                    >
                        Log in
                    </Button>
                )}
                Or <Link to={`/auth/register?redirect=${redirect}`}>register now</Link>
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
            </Form.Item>
        </Form>
    )
}

export default LoginCard