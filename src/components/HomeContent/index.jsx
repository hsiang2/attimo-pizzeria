import { theme } from "antd"
import { Link } from "react-router-dom"
import styles from "./homeContent.module.css"
import ingredients from "../../json/ingredients.json"
import IngredientsList from '../IngredientsList'
import { useSelector } from "react-redux"
import { selectLightMode } from "../../redux/colorSLice"

const HomeContent = () => {
    const {
        token: { colorTextBase, colorPrimary },
    } = theme.useToken();
    const lightMode = useSelector(selectLightMode)

    return (
        <>
            <div className="container">
                <div className={styles.banner}>
                    <div>
                        <h1 className={styles.mainTitle} style={{color: colorTextBase}}>Attimo<br />Pizzeria</h1>
                        <p className={styles.slogan} 
                            style={{color: lightMode ? "#5E8160": "#DADDD8A6"}}
                        >
                        Time Flies When You’re Eating Pies</p>
                    </div>
                    <img src='https://github.com/hsiang2/attimo-pizzeria/blob/master/public/images/img_header.png?raw=true' alt='pizza' className={styles.bannerImage} />
                </div>
            </div>
            
            <div className={styles.story}>
                <img src='https://github.com/hsiang2/attimo-pizzeria/blob/master/public/images/img_pizza_home_1.png?raw=true' alt='pizza' className={styles.storyImage} />
                <div className={styles.storyContent}>
                    <h1 style={{color: colorPrimary}} className={styles.title}>Our Story</h1>
                    <p className={styles.description} style={{color: lightMode ? "#6C6139": "#DAD7CD"}}>Attimo is derived from the Italian language, which means "moment".</p>
                    <p className={styles.description} style={{color: lightMode ? "#6C6139": "#DAD7CD"}}>We hope that every customer will be so happy when enjoying Attimo's pizza that they will feel that time is passing by in a flash.</p>
                    <p className={styles.description} style={{color: lightMode ? "#6C6139": "#DAD7CD"}}>In addition, it also implies that Attimo's ordering and delivery services are highly efficient, and it only takes a few moments for the hot pizza to arrive.</p>
                    <div className={styles.contentButton}>
                    <Link to="/" className={`${lightMode ? 'customButton' : 'customButtonDark'} ${styles.button}`} style={{textDecoration: 'none'}}>
                        <h3 className={ lightMode ? "buttonText" : "buttonTextDark"}>LEARN MORE</h3>
                    </Link>   
                    </div>
                    
                </div>
            </div>
            <div className={styles.ingredients}>
                <div className={styles.ingredientsContent}>
                    <h1 style={{color: colorPrimary}} className={styles.title}>Fresh Ingredients</h1>
                    <p className={styles.description} style={{color: lightMode ? "#6C6139": "#DAD7CD"}}>We use natural and organic fruits and vegetables, hand-made pie crusts every day, no additives, no bad products, and strict control of every production step. </p>
                    <p className={styles.description} style={{color: lightMode ? "#6C6139": "#DAD7CD"}}>We hope that every customer who comes to Attimo can taste the most natural and fresh ingredients , eat healthy and safe!</p>
                    <div className={styles.contentButton}>
                        <Link to="/" className={`${lightMode ? 'customButton' : 'customButtonDark'} ${styles.button}`} style={{textDecoration: 'none'}}>
                            <h3 className={ lightMode ? "buttonText" : "buttonTextDark"}>LEARN MORE</h3>
                        </Link>   
                    </div>
                </div>
                <img src='https://github.com/hsiang2/attimo-pizzeria/blob/master/public/images/img_pizza_home_2.png?raw=true' alt='pizza' className={styles.ingredientsImage} />
            </div>
            <IngredientsList ingredients={ingredients} speed={50000} />
            <div className={styles.bottomButton}>
                <Link to="/" className={`${lightMode ? 'customButton' : 'customButtonDark'} ${styles.button}`} style={{textDecoration: 'none'}}>
                    <h3 className={ lightMode ? "buttonText" : "buttonTextDark"}>LEARN MORE</h3>
                </Link>   
            </div>
            
        </>
    )
}

export default HomeContent