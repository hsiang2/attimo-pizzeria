import { Drawer } from "antd"
import styles from './navbar.module.css'
import NavLink from "../NavLink"

const NavBar = ({ open, onClose }) => {
    const NavBarContent = () => (
        <>
            <NavLink to="menu" className={styles.navItem}>MENU</NavLink>
            <NavLink to="contact" className={styles.navItem}>CONTACT</NavLink>
            <NavLink to="ourstory" className={styles.navItem}>OUR STORY</NavLink>
            <NavLink to="findus" className={styles.navItem}>FIND US</NavLink>
        </>
    )

    return (
        <>
            <div className={styles.navBar}>
                <NavBarContent />
            </div>
            <Drawer placement="left" onClose={onClose} open={open} >
                <div>
                    <NavBarContent />
                </div>
            </Drawer>
        </>
        
        
    )
}

export default NavBar