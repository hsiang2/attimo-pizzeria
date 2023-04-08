import { Link } from "react-router-dom"
import { useState } from 'react'
import { Switch } from "antd"
import { Icon } from "@iconify/react"
import NavBar from "../NavBar"
import styles from './header.module.css'
import Cart from "../Cart"


const Header = () => {
    const [isOnTouch, setIsOnTouch] = useState(false)

    return (
        <div className="container">
            <div className={styles.navLayout}>
                <div className={styles.nav}>
                    <Icon icon="tabler:menu" className={styles.showMobile}
                        onClick={() => { setIsOnTouch(!isOnTouch) }}
                    />
                    <div className={styles.halfNav}>
                        <Link to="/">
                            <img src="/images/img_logo.png" alt="logo" className={styles.logoSize}/>
                        </Link>
                        <NavBar open={isOnTouch} onClose={() => setIsOnTouch(false)} />
                    </div>
                    
                    <div className={styles.halfNav}>
                        <Link to="/" className={styles.icon}>
                            <Icon icon="ph:user-circle" />
                        </Link>
                        <Cart />
                    </div>
                </div>
                
                <div className={styles.switch}>
                    <Switch />
                </div>
                
            </div>
        </div>
    )
}

export default Header