import { Icon } from "@iconify/react"
import { Link } from "react-router-dom"
import { Input } from "antd"
import styles from "./footer.module.css"


const Footer = () => {
    return (
        <>
            <div>
                <div className="container">
                    <footer className={styles.footer}>
                        <div className={styles.logo}>
                            <Link to="/">
                                <img src="img_logo_footer.png" alt="logo" className={styles.logoSize} />
                            </Link>
                        </div>
                        <div className={styles.content}>
                            <div>
                                <Link to="contact">
                                    <p className={styles.title}>CONTACT</p>
                                </Link>
                                <div className={styles.contentItem}>
                                    <Icon icon="ph:phone-fill" />
                                    <p className={styles.text}>+1-4415946780</p>
                                </div>
                                <div className={styles.contentItem}>
                                    <Icon icon="ph:envelope-fill" />
                                    <p className={styles.text}>attimopizza@mail.com</p>
                                </div>
                            </div>
                            <div>
                                <Link to="findus">
                                    <p className={styles.title}>FIND US</p>
                                </Link>
                                <div className={styles.contentItem}>
                                    <Icon icon="ph:map-pin-line-fill" />
                                    <p className={styles.text}>New York</p>
                                </div>
                                <div className={styles.contentItem}>
                                    <Icon icon="ph:map-pin-line-fill" />
                                    <p className={styles.text}>Los Angeles</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className={styles.subscribe}>
                            <p className={styles.title}>SUBSCRIBE</p>
                            <div className={styles.subscribeContent}>
                                <div className={styles.inputBox}>
                                    <Input placeholder="Enter Your Email" bordered={false} />
                                    <button>
                                        <Icon icon="ph:arrow-right" />
                                    </button>
                                </div>
                                <div className={styles.icon}>
                                    <a href="#">
                                        <Icon icon="ph:facebook-logo" />
                                    </a>
                                    <a href="#">
                                        <Icon icon="ph:instagram-logo" />
                                    </a>
                                    <a href="#">
                                        <Icon icon="ph:twitter-logo" />
                                    </a>
                                </div>
                            </div>
                            
                        </div>
                    </footer>
                </div>
            </div>
            <div>
                <p className={styles.copyright}>© 2023 Attimo Pizzeria</p>
            </div>
        </>
    )
}

export default Footer