import { Drawer } from "antd"
import styles from './navbar.module.css'
import Link from "../Link"
import { theme } from "antd"

const NavBar = ({ open, onClose }) => {
    const {
        token: { colorBgBase },
    } = theme.useToken();

    const NavBarContent = () => (
        <>
            <Link to="/menu/category/pizzas" className={styles.navItem}>MENU</Link>
            <Link to="/contact" className={styles.navItem}>CONTACT</Link>
            <Link to="/ourstory" className={styles.navItem}>OUR STORY</Link>
            <Link to="/findus" className={styles.navItem}>FIND US</Link>
        </>
    )

    return (
        <>
            <div className={styles.navBar}>
                <NavBarContent />
            </div>
            <Drawer placement="left" onClose={onClose} open={open} style={{backgroundColor: colorBgBase}}>
                <div className={styles.drawer}>
                    <NavBarContent />
                </div>
            </Drawer>
        </>
        
        
    )
}

export default NavBar