import { useNavigate } from "react-router-dom"
import { useLogout, useUpdateProfile, useUserInfo } from "../../react-query"
import { Button, Form, Input, Menu } from "antd"
import { useEffect, useState } from "react"
import { Icon } from "@iconify/react"
import { useSelector } from "react-redux"
import { selectLightMode } from "../../redux/colorSlice"
import styles from "./profileCard.module.css"
import PersonalInfo from "../PersonalInfo"

const ProfileCard = ({ redirect }) => {
    const logout = useLogout()
    const navigate = useNavigate()
    const lightMode = useSelector(selectLightMode)

    const onLogout = () => {
        logout.mutate()
        navigate("/")
    }

    const [selectedMenuItem, setSelectedMenuItem]= useState('personalInfo');

    const componentsSwtich = (key) => {
    switch (key) {
    case 'personalInfo':
        return (<PersonalInfo />);
    case 'orderHistory':
        return (<h1>orderHistory</h1>);
    case 'payment':
        return (<h3>payment</h3>);
    case 'giftCard':
        return (<h3>giftCard</h3>);
    default:
        break;
    }
    };

    return(
        <div className={lightMode ? styles.profileForm: styles.profileFormDark}>
            <Menu 
                selectedKeys={selectedMenuItem}
                mode="inline"
                onClick={(e) => {
                        if (e.key === 'logout') {
                            onLogout()
                        } else setSelectedMenuItem(e.key)
                    }
                }
                className={styles.menu}
                style={{border: 'none'}}
                // style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}
            >

                <Menu.Item key="personalInfo" >
                    <div className={styles.menuItem}>
                        <Icon style={{fontSize: '1.125rem'}} icon="fluent:calendar-person-20-regular"/>
                        <h3 className={styles.menuText}>Personal Info</h3>
                    </div>
                </Menu.Item>
                <Menu.Item key="orderHistory">
                    <div className={styles.menuItem}>
                        <Icon style={{fontSize: '1.125rem'}} icon="solar:history-linear"/>
                        <h3 className={styles.menuText}>Order History</h3>
                    </div>
                </Menu.Item>
                <Menu.Item key="payment">
                    <div className={styles.menuItem}>
                        <Icon style={{fontSize: '1.125rem'}} icon="fluent:payment-28-regular"/>
                        <h3 className={styles.menuText}>Payment</h3>
                    </div>
                </Menu.Item>
                <Menu.Item key="giftCard">
                    <div className={styles.menuItem}>
                        <Icon style={{fontSize: '1.125rem'}} icon="fluent:gift-20-regular"/>
                        <h3 className={styles.menuText}>Gift Card</h3>
                    </div>
                </Menu.Item>
                <Menu.Item key="logout" 
                    style={{position: 'absolute', bottom: '3rem'}}
                >
                    <div className={styles.menuItem}>
                        <Icon style={{fontSize: '1.125rem'}} icon="solar:logout-2-outline"/>
                        <h3 className={styles.menuText}>SIGN OUT</h3>
                    </div>
                </Menu.Item>
            </Menu>

            {componentsSwtich(selectedMenuItem)}
        </div>
    )

}

export default ProfileCard