// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import { selectLightMode } from "../../redux/colorSlice";

import NavLink from "../NavLink"
import styles from "./menuNav.module.css"

const MenuNav = () => {
    const lightMode = useSelector(selectLightMode)

    var settings = {
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          }
        ],
      };
    return (
        <div className={styles.wrapper}>
            <Slider {...settings} >
                    <NavLink to="/menu/category/pizzas"
                        // className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}
                        
                    >
                        {({ isActive }) => (
                            <div className={styles.navItem}>
                                <img 
                                    src={isActive ? "/images/icon_pizza_active.png" : lightMode ? 
                                        "/images/icon_pizza.png" : 
                                        "/images/icon_pizza_dark.png"} 
                                    className={styles.icon}
                                />
                                <p className={
                                    isActive && lightMode ? 
                                    styles.textActive : 
                                    !isActive && lightMode ? 
                                    styles.text :
                                    isActive && !lightMode ?
                                    styles.textDarkActive :
                                    styles.textDark
                                }>PIZZAS</p>
                            </div>
                        )}
                    </NavLink>
                    <NavLink to="/menu/category/combos"
                        // className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}
                        
                    >
                        {({ isActive }) => (
                            <div className={styles.navItem}>
                                <img 
                                    src={isActive ? "/images/icon_combos_active.png" : 
                                    lightMode ? "/images/icon_combos.png" : 
                                    "/images/icon_combos_dark.png"} 
                                    className={styles.icon}
                                />
                                <p className={
                                    isActive && lightMode ? 
                                    styles.textActive : 
                                    !isActive && lightMode ? 
                                    styles.text :
                                    isActive && !lightMode ?
                                    styles.textDarkActive :
                                    styles.textDark
                                }
                                >COMBOS</p>
                            </div>
                        )}
                    </NavLink>
                    <NavLink to="/menu/category/pasta"
                        // className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}
                        
                    >
                        {({ isActive }) => (
                            <div className={styles.navItem}>
                                <img 
                                    src={isActive ? "/images/icon_pasta_active.png" : lightMode ? 
                                    "/images/icon_pasta.png" :
                                     "/images/icon_pasta_dark.png"}
                                    className={styles.icon}
                                />
                                <p className={
                                    isActive && lightMode ? 
                                    styles.textActive : 
                                    !isActive && lightMode ? 
                                    styles.text :
                                    isActive && !lightMode ?
                                    styles.textDarkActive :
                                    styles.textDark
                                }
                                >PASTA</p>
                            </div>
                        )}
                        
                    </NavLink>
                    <NavLink to="/menu/category/sides"
                        //className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}
                        
                    >
                        {({ isActive }) => (
                            <div className={styles.navItem}>
                                <img 
                                    src={isActive ? "/images/icon_sides_active.png" : lightMode ? 
                                    "/images/icon_sides.png" : 
                                    "/images/icon_sides_dark.png"}
                                    className={styles.icon}
                                />
                                <p className={
                                    isActive && lightMode ? 
                                    styles.textActive : 
                                    !isActive && lightMode ? 
                                    styles.text :
                                    isActive && !lightMode ?
                                    styles.textDarkActive :
                                    styles.textDark
                                }
                                >SIDES</p>
                            </div>
                        )}
                        
                    </NavLink>
                    <NavLink to="/menu/category/drinks"
                        //className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}
                        
                    >
                        {({ isActive }) => (
                            <div className={styles.navItem}>
                                <img 
                                    src={isActive ? "/images/icon_drinks_active.png" : lightMode ? 
                                    "/images/icon_drinks.png" : 
                                    "/images/icon_drinks_dark.png"}
                                    className={styles.icon}
                                />
                                <p className={
                                    isActive && lightMode ? 
                                    styles.textActive : 
                                    !isActive && lightMode ? 
                                    styles.text :
                                    isActive && !lightMode ?
                                    styles.textDarkActive :
                                    styles.textDark
                                }
                                >DRINKS</p>
                            </div>
                        )}
                        
                    </NavLink>
                    <NavLink to="/menu/category/soup"
                        //className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}
                        
                    >
                        {({ isActive }) => (
                            <div className={styles.navItem}>
                                <img 
                                    src={isActive ? "/images/icon_soup_active.png" : lightMode ? 
                                    "/images/icon_soup.png" : 
                                    "/images/icon_soup_dark.png"}
                                    className={styles.icon}
                                />
                                <p className={
                                    isActive && lightMode ? 
                                    styles.textActive : 
                                    !isActive && lightMode ? 
                                    styles.text :
                                    isActive && !lightMode ?
                                    styles.textDarkActive :
                                    styles.textDark
                                }
                                >SOUP</p>
                            </div>
                        )}
                        
                    </NavLink>
                    <NavLink to="/menu/category/desserts"
                        //className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}
                        
                    >
                        {({ isActive }) => (
                            <div className={styles.navItem}>
                                <img 
                                    src={isActive ? "/images/icon_dessert_active.png" : lightMode ? 
                                    "/images/icon_dessert.png" : 
                                    "/images/icon_desserts_dark.png"}
                                    className={styles.icon}
                                />
                                <p className={
                                    isActive && lightMode ? 
                                    styles.textActive : 
                                    !isActive && lightMode ? 
                                    styles.text :
                                    isActive && !lightMode ?
                                    styles.textDarkActive :
                                    styles.textDark
                                }
                                >DESSERTS</p>
                            </div>
                        )}
                        
                    </NavLink>   
                
            </Slider>
        </div>
        
    )
}

export default MenuNav