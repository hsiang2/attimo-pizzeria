import { useState } from 'react'
import { Switch } from "antd"
import { Icon } from "@iconify/react"
import NavBar from "../NavBar"
import styles from './header.module.css'
import Cart from "../Cart"
import { useDispatch, useSelector } from "react-redux"
import { selectLightMode, setColorMode } from "../../redux/colorSLice"
import { theme } from "antd"
import Link from '../Link'


const Header = () => {
    const [isOnTouch, setIsOnTouch] = useState(false)
    const dispatch = useDispatch()
    const lightMode = useSelector(selectLightMode)

    const toggleColor = () => {
        dispatch(setColorMode(!lightMode))
     }

    const {
        token: { colorPrimary },
    } = theme.useToken();


    return (
        <div className="container">
            <div className={styles.navLayout}>
                <div className={styles.nav}>
                    <Icon icon="tabler:menu" className={`icon ${styles.showMobile}`}
                        style={{color: colorPrimary}}
                        onClick={() => { setIsOnTouch(!isOnTouch) }}
                    />
                    <div className={styles.halfNav}>
                        <Link to="/">
                            <img src={lightMode ?  "https://github.com/hsiang2/attimo-pizzeria/blob/master/public/images/img_logo.png?raw=true" : "https://github.com/hsiang2/attimo-pizzeria/blob/master/public/images/img_logo_dark.png?raw=true"} alt="logo" className={styles.logoSize}/>
                        </Link>
                        <NavBar open={isOnTouch} onClose={() => setIsOnTouch(false)} />
                    </div>
                    
                    <div className={styles.halfNav}>
                        <Link to="/" className={styles.icon}>
                            <Icon icon="ph:user-circle" className='icon' />
                        </Link>
                        <Cart />
                    </div>
                </div>
                
                <div className={styles.switch}>
                    <Switch onClick={toggleColor} />
                </div>
                
            </div>
        </div>
    )
}

export default Header