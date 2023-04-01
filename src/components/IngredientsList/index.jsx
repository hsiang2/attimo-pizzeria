import styles from "./ingredientsList.module.css"

const IngredientsList = ({ ingredients, speed = 5000 }) => {
    return (
      <div className={styles.inner}>
        <div className={styles.wrapper}>
          <div style={{ "--speed": `${speed}ms` }} className={styles.animation}>
            {ingredients.map(({ name, image }) => (
                <img src={image} alt={name} className={styles.item} key={name} />
            ))}
          </div>
          <div style={{ "--speed": `${speed}ms` }} className={styles.animation}>
            {ingredients.map(({ name, image }) => (
                <img src={image} alt={name} className={styles.item} key={name} />
            ))}
          </div>
          <div style={{ "--speed": `${speed}ms` }} className={styles.animation}>
            {ingredients.map(({ name, image }) => (
                <img src={image} alt={name} className={styles.item} key={name} />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default IngredientsList