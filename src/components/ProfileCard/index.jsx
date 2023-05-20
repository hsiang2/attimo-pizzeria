import { useNavigate } from "react-router-dom"
import { useLogout, useUpdateProfile, useUserInfo } from "../../react-query"
import { Button, Form, Input } from "antd"
import { useEffect } from "react"

import styles from "./profileCard.module.css"

const ProfileCard = ({ redirect }) => {
    const { data: userInfo } = useUserInfo() || {}
    const update = useUpdateProfile()
    const logout = useLogout()
    const navigate = useNavigate()
    const [form] = Form.useForm()

    const onUpdate = async (values) => {
        console.log("Received update info: ", values)
        update.mutate({ ...values, uid: userInfo.uid })
    }

    const onLogout = () => {
        logout.mutate()
        navigate("/")
    }

    useEffect(() => {
        form.setFieldsValue(userInfo)
    }, [userInfo])

    return (
        <Form
            style={{marginTop: "10rem"}}
            onFinish={onUpdate}
            name="normal_login"
            className={styles.profileForm}
            form={form}
            initialValues={userInfo}
        >
            <Form.Item
                label="Name: "
                name="name"
                rules={[
                    {
                        type: "string",
                        message: "The input is not valid name!"
                    },
                    {
                        message: "Please input your name!"
                    }
                ]}
            >
                <Input placeholder={userInfo.name} />
            </Form.Item>
            <Form.Item
                label="Address: "
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
            </Form.Item>
            <Form.Item
                label="Phone: "
                name="tel"
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
                <Input placeholder={userInfo?.tel || 'xxxx-xxxxxx'} />
            </Form.Item>
            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    className={styles.profileForm__button}
                >
                    Submit
                </Button>
                <Button
                    type="primary"
                    danger
                    style={{ marginTop: "1rem" }}
                    className={styles.profileForm__button}
                    onClick={onLogout}
                >
                    Log out
                </Button>
            </Form.Item>
        </Form>
    )
}

export default ProfileCard