import { theme } from "antd";
import { Link } from "react-router-dom";
import styles from "./homeContent.module.css";
import ingredients from "../../json/ingredients.json";
import IngredientsList from "../IngredientsList";
import { useSelector } from "react-redux";
import { selectLightMode } from "../../redux/colorSlice";
import { motion , useScroll , useTransform} from "framer-motion";
import { useRef } from "react";
import { Story } from "./story";
import { Ingredient } from "./ingredient";
const HomeContent = () => {
  const {
    token: { colorTextBase, colorPrimary },
  } = theme.useToken();
  const lightMode = useSelector(selectLightMode);

  const targetRef = useRef(null);
//   const targetRef1 = useRef(null);
//   const targetRef2 = useRef(null);

  const { scrollYProgress } = useScroll({
    target : targetRef,
   
    offset: ["end end"," end start"],
  }); 

 
  const opacity = useTransform(scrollYProgress,[0,1],[1,0]);
  const scale = useTransform(scrollYProgress,[0,1],[1,0.6]);


  return (
    <>
      <div className="container">
      <motion.div
          className={styles.banner }
        style={{ opacity ,scale }}
        ref={ targetRef }
        
        >
          <div>
            <h1 className={styles.mainTitle} style={{ color: colorTextBase }}>
              Attimo<br />Pizzeria
            </h1>
            <p
              className={styles.slogan}
              style={{
                color: lightMode ? "#5E8160" : "#DADDD8A6",
              }}
            >
              Time Flies When You’re Eating Pies
            </p>
          </div>
          <img
        //   style={{x:"-50%"}}
            src="https://github.com/hsiang2/movie_image/blob/main/img_header.png?raw=true"
            alt="pizza"
            className={styles.bannerImage}
          />
        </motion.div>
      </div>
      <div>
        <Story/>
      </div>
      
      {/* <motion.div
        className={styles.story}
        initial={{ opacity: 0, x: 100, scale: 1.4 }}
        animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
        transition={{ duration: 1.8, delay: 0.8 }}
        ref={targetRef1}
      >
        <motion.img
          src="https://github.com/hsiang2/movie_image/blob/main/img_pizza_home_1.png?raw=true"
          alt="pizza"
      
        />
        <div className={styles.storyContent}>
          <h1 style={{ color: colorPrimary }} className={styles.title}>
            Our Story
          </h1>
          <motion.p
            className={styles.description}
            style={{ color: lightMode ? "#6C6139" : "#DAD7CD" }}
          
          >
            Attimo is derived from the Italian language, which means "moment".
          </motion.p>
          <motion.p
            className={styles.description}
            style={{ color: lightMode ? "#6C6139" : "#DAD7CD" }}
      
          >
            We hope that every customer will be so happy when enjoying Attimo's
            pizza that they will feel that time is passing by in a flash.
          </motion.p>
          <motion.p
            className={styles.description}
            style={{ color: lightMode ? "#6C6139" : "#DAD7CD" }}
       
          >
            In addition, it also implies that Attimo's ordering and delivery
            services are highly efficient, and it only takes a few moments for
            the hot pizza to arrive.
          </motion.p>
          <div className={styles.contentButton}>
            <Link
              to="/"
              className={`${lightMode ? "customButton" : "customButtonDark"} ${
                styles.button
              }`}
              style={{ textDecoration: "none" }}
            >
              <h3 className={lightMode ? "buttonText" : "buttonTextDark"}>
                LEARN MORE
              </h3>
            </Link>
          </div>
        </div>
      </motion.div> */}

      {/* <motion.div
        className={styles.ingredients}
        initial={{ opacity: 0, x: 100, scale: 1.6}}
        animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
        transition={{ duration: 1.8, delay: 1.5 }}
        // ref={targetRef2}
      >
        <div className={styles.ingredientsContent}>
          <h1 style={{ color: colorPrimary }} className={styles.title}>
            Fresh Ingredients
          </h1>
          <p
            className={styles.description}
            style={{ color: lightMode ? "#6C6139" : "#DAD7CD" }}
          >
            We use natural and organic fruits and vegetables, hand-made pie
            crusts every day, no additives, no bad products, and strict control
            of every production step.
          </p>
          <p
            className={styles.description}
            style={{ color: lightMode ? "#6C6139" : "#DAD7CD" }}
          >
            We hope that every customer who comes to Attimo can taste the most
            natural and fresh ingredients, eat healthy and safe!
          </p>
          <div className={styles.contentButton}>
            <Link
              to="/"
              className={`${lightMode ? "customButton" : "customButtonDark"} ${
                styles.button
              }`}
              style={{ textDecoration: "none" }}
            >
              <h3 className={lightMode ? "buttonText" : "buttonTextDark"}>
                LEARN MORE
              </h3>
            </Link>
          </div>
        </div>
        <img
          src="https://github.com/hsiang2/movie_image/blob/main/img_pizza_home_2.png?raw=true"
          alt="pizza"
          className={styles.ingredientsImage}
        />
      </motion.div> */}
      <Ingredient/>
      <IngredientsList ingredients={ingredients} speed={50000} />

      <motion.div
        className={styles.bottomButton}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Link
          to="/"
          className={`${lightMode ? "customButton" : "customButtonDark"} ${
            styles.button
          }`}
          style={{ textDecoration: "none" }}
        >
          <h3 className={lightMode ? "buttonText" : "buttonTextDark"}>
            LEARN MORE
          </h3>
        </Link>
      </motion.div>
    </>
  );
};

export default HomeContent;
