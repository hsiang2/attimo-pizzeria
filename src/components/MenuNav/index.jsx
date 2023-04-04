// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import NavLink from "../NavLink"
import styles from "./menuNav.module.css"

const MenuNav = () => {
    // function SampleNextArrow(props) {
    //     const { className, style, onClick } = props;
    //     return (
    //     <div
    //         className={className}
    //         style={{ ...style, display: "block" }}
    //         onClick={onClick}
    //     >
    //         <img src="/icon_arrow_r.png" alt="next arrow" />
    //     </div>
    //     );
    // }
    
    // function SamplePrevArrow(props) {
    //     const { className, style, onClick } = props;
    //     return (
    //     <div
    //         className={className}
    //         style={{ ...style, display: "block" }}
    //         onClick={onClick}
    //     >
    //         <img src="/icon_arrow_l.png" alt="previous arrow" />
    //     </div>
    //     );
    // }
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
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />
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
                                    src={isActive ? "/images/icon_pizza_active.png" : "/images/icon_pizza.png"} 
                                    className={styles.icon}
                                />
                                <p>PIZZAS</p>
                            </div>
                        )}
                    </NavLink>
                    <NavLink to="/menu/category/combos"
                        // className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}
                        
                    >
                        {({ isActive }) => (
                            <div className={styles.navItem}>
                                <img 
                                    src={isActive ? "/images/icon_combos_active.png" : "/images/icon_combos.png"} 
                                    className={styles.icon}
                                />
                                <p>COMBOS</p>
                            </div>
                        )}
                    </NavLink>
                    <NavLink to="/menu/category/pasta"
                        // className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}
                        
                    >
                        {({ isActive }) => (
                            <div className={styles.navItem}>
                                <img 
                                    src={isActive ? "/images/icon_pasta_active.png" : "/images/icon_pasta.png"} 
                                    className={styles.icon}
                                />
                                <p>PASTA</p>
                            </div>
                        )}
                        
                    </NavLink>
                    <NavLink to="/menu/category/sides"
                        //className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}
                        
                    >
                        {({ isActive }) => (
                            <div className={styles.navItem}>
                                <img 
                                    src={isActive ? "/images/icon_sides_active.png" : "/images/icon_sides.png"} 
                                    className={styles.icon}
                                />
                                <p>SIDES</p>
                            </div>
                        )}
                        
                    </NavLink>
                    <NavLink to="/menu/category/drinks"
                        //className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}
                        
                    >
                        {({ isActive }) => (
                            <div className={styles.navItem}>
                                <img 
                                    src={isActive ? "/images/icon_drinks_active.png" : "/images/icon_drinks.png"} 
                                    className={styles.icon}
                                />
                                <p>DRINKS</p>
                            </div>
                        )}
                        
                    </NavLink>
                    <NavLink to="/menu/category/soup"
                        //className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}
                        
                    >
                        {({ isActive }) => (
                            <div className={styles.navItem}>
                                <img 
                                    src={isActive ? "/images/icon_soup_active.png" : "/images/icon_soup.png"} 
                                    className={styles.icon}
                                />
                                <p>SOUP</p>
                            </div>
                        )}
                        
                    </NavLink>
                    <NavLink to="/menu/category/desserts"
                        //className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}
                        
                    >
                        {({ isActive }) => (
                            <div className={styles.navItem}>
                                <img 
                                    src={isActive ? "/images/icon_dessert_active.png" : "/images/icon_dessert.png"} 
                                    className={styles.icon}
                                />
                                <p>DESSERTS</p>
                            </div>
                        )}
                        
                    </NavLink>   
                
            </Slider>
        </div>
        
    )
}

export default MenuNav