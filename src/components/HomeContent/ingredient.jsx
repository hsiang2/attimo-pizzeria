import { theme } from "antd";
import { Link } from "react-router-dom";
import styles from "./homeContent.module.css";
import ingredients from "../../json/ingredients.json";
import IngredientsList from "../IngredientsList";
import { useSelector } from "react-redux";
import { selectLightMode } from "../../redux/colorSlice";
import { motion , useScroll , useTransform} from "framer-motion";
import { useRef } from "react";
import { IngredientImage } from "./ingredientImage";



export const Ingredient=()=>{

    const {
        token: { colorTextBase, colorPrimary },
      } = theme.useToken();
      const lightMode = useSelector(selectLightMode);
    
      const targetRef = useRef(null);
    
      const { scrollYProgress } = useScroll({
        target : targetRef,
       
        offset: ["start end"," end start"],
      }); 
      const opacity = useTransform(scrollYProgress,[0,0.5],[0,1]);
      const scale = useTransform(scrollYProgress,[0.1,0.4],[1,2.5]);
    // const scale = useTransform(scrollYProgress,[0,0.5],[1.4,1]);
    const x = useTransform(
        scrollYProgress,[0.1,0.25,0.7,1],
        ["0%","-55%","-160%","-180%"]
    )
    const y = useTransform(
        // scrollYProgress,[0.1,0.25,0.7,1],
        // ["0%", "-55%", "-60%", "0%"]
        scrollYProgress,[0,1],
        ["50%","0%"]
    
    
        )
     return(
       <motion.div
        className={styles.ingredients}
        // initial={{ opacity: 0, x: 100, scale: 1.6}}
        // animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
        // transition={{ duration: 1.8, delay: 1.5 }}
        ref={ targetRef }
        
      >
        <motion.div className={styles.ingredientsContent} style={{ opacity ,y }}>
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
              <h3 className={ lightMode ? "buttonText" : "buttonTextDark"}>
                LEARN MORE
              </h3>
            </Link>
          </div>
        </motion.div>
        <IngredientImage/>
        {/* <img
          src="https://github.com/hsiang2/movie_image/blob/main/img_pizza_home_2.png?raw=true"
          alt="pizza"
          className={styles.ingredientsImage}
        /> */}
      </motion.div> 

     ) ;
   

};