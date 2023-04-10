import { useSelector } from "react-redux";
import { selectLightMode } from "../../redux/colorSlice";
import styles from "./ingredientsList.module.css"

const IngredientsList = ({ ingredients, speed = 5000 }) => {
    const lightMode = useSelector(selectLightMode)

    return (
      <div className={styles.inner}>
        <div className={styles.wrapper}>
          <div style={{ "--speed": `${speed}ms` }} className={styles.animation}>
            {ingredients.map(({ name, image, imageD }) => (
                <img src={lightMode ? image : imageD} alt={name} className={styles.item} key={name} />
            ))}
          </div>
          <div style={{ "--speed": `${speed}ms` }} className={styles.animation}>
          {ingredients.map(({ name, image, imageD }) => (
                <img src={lightMode ? image : imageD} alt={name} className={styles.item} key={name} />
            ))}
          </div>
          <div style={{ "--speed": `${speed}ms` }} className={styles.animation}>
          {ingredients.map(({ name, image, imageD }) => (
                <img src={lightMode ? image : imageD} alt={name} className={styles.item} key={name} />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default IngredientsList