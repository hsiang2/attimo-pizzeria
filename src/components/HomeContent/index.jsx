import styles from "./homeContent.module.css"
import LearnMoreButton from '../LearnMoreButton'
import ingredients from "../../json/ingredients.json"
import IngredientsList from '../IngredientsList'

const HomeContent = () => {
    return (
        <>
            <div className="container">
                <div className={styles.banner}>
                    <div>
                        <h1>Attimo<br />Pizzeria</h1>
                        <p>Time Flies When You’re Eating Pies</p>
                    </div>
                    <img src='/images/img_header.png' alt='pizza' className={styles.bannerImage} />
                </div>
            </div>
            
            <div className={styles.story}>
                <img src='/images/img_pizza_home_1.png' alt='pizza' className={styles.storyImage} />
                <div className={styles.storyContent}>
                    <h1>Our Story</h1>
                    <p>Attimo is derived from the Italian language, which means "moment".</p>
                    <p>We hope that every customer will be so happy when enjoying Attimo's pizza that they will feel that time is passing by in a flash.</p>
                    <p>In addition, it also implies that Attimo's ordering and delivery services are highly efficient, and it only takes a few moments for the hot pizza to arrive.</p>
                    <div className={styles.contentButton}>
                        <LearnMoreButton />
                    </div>
                    
                </div>
            </div>
            <div className={styles.ingredients}>
                <div className={styles.ingredientsContent}>
                    <h1>Fresh Ingredients</h1>
                    <p>We use natural and organic fruits and vegetables, hand-made pie crusts every day, no additives, no bad products, and strict control of every production step. </p>
                    <p>We hope that every customer who comes to Attimo can taste the most natural and fresh ingredients , eat healthy and safe!</p>
                    <div className={styles.contentButton}>
                        <LearnMoreButton />
                    </div>
                </div>
                <img src='/images/img_pizza_home_2.png' alt='pizza' className={styles.ingredientsImage} />
            </div>
            <IngredientsList ingredients={ingredients} speed={50000} />
            <div className={styles.bottomButton}>
                <LearnMoreButton />
            </div>
            
        </>
    )
}

export default HomeContent