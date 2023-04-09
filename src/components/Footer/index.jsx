import { Icon } from "@iconify/react"
import { Link } from "react-router-dom"
import { Input } from "antd"
import styles from "./footer.module.css"
import { useSelector } from "react-redux"
import { selectLightMode } from "../../redux/colorSLice"
import { theme } from "antd"


const Footer = () => {

    const lightMode = useSelector(selectLightMode)
    const {
        token: { colorPrimary, colorTextBase },
    } = theme.useToken();

    return (
        <>
            <div className={ lightMode ? styles.bg : styles.bgDark}>
                <div className="container">
                    <footer className={styles.footer}>
                        <div className={styles.logo}>
                            <Link to="/">
                                <img src={lightMode ? "/images/img_logo_footer.png" : "/images/img_logo_footer_dark.png"} alt="logo" className={styles.logoSize} />
                            </Link>
                        </div>
                        <div className={styles.content}>
                            <div>
                                <Link to="contact" style={{textDecoration: 'none'}}>
                                    <p className={styles.title} style={{color: colorTextBase}}>CONTACT</p>
                                </Link>
                                <div className={styles.contentItem}>
                                    <Icon style={{color: colorTextBase}} icon="ph:phone-fill" />
                                    <p className={styles.text} style={{color: colorTextBase}}>+1-4415946780</p>
                                </div>
                                <div className={styles.contentItem}>
                                    <Icon style={{color: colorTextBase}} icon="ph:envelope-fill" />
                                    <p className={styles.text} style={{color: colorTextBase}}>attimopizza@mail.com</p>
                                </div>
                            </div>
                            <div>
                                <Link to="findus" style={{textDecoration: 'none'}}>
                                    <p className={styles.title} style={{color: colorTextBase}}>FIND US</p>
                                </Link>
                                <div className={styles.contentItem}>
                                    <Icon style={{color: colorTextBase}} icon="ph:map-pin-line-fill" />
                                    <p className={styles.text} style={{color: colorTextBase}}>New York</p>
                                </div>
                                <div className={styles.contentItem}>
                                    <Icon style={{color: colorTextBase}} icon="ph:map-pin-line-fill" />
                                    <p className={styles.text} style={{color: colorTextBase}}>Los Angeles</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className={styles.subscribe}>
                            <p className={styles.title} style={{color: colorTextBase}}>SUBSCRIBE</p>
                            <div className={styles.subscribeContent}>
                                <div className={styles.inputBox} style={{color: colorTextBase}}>
                                    <Input placeholder="Enter Your Email" bordered={false} />
                                    <Icon icon="ph:arrow-right" style={{color: colorTextBase}} />
                                </div>
                                <div className={styles.icon}>
                                    <a href="#">
                                        <Icon icon="ph:facebook-logo" className="icon" style={{color: colorTextBase}} />
                                    </a>
                                    <a href="#">
                                        <Icon icon="ph:instagram-logo" className="icon" style={{color: colorTextBase}} />
                                    </a>
                                    <a href="#">
                                        <Icon icon="ph:twitter-logo" className="icon" style={{color: colorTextBase}} />
                                    </a>
                                </div>
                            </div>
                            
                        </div>
                    </footer>
                </div>
            </div>
            <div style={{backgroundColor: colorPrimary, height: '3.68rem', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <p style={{color: lightMode ? '#F9EED9' : '#0C0C0C', margin: '0'}} className={styles.copyright}>© 2023 Attimo Pizzeria</p>
            </div>
        </>
    )
}

export default Footer