import { theme } from "antd";
import { Link } from "react-router-dom";
import styles from "./homeContent.module.css";
import ingredients from "../../json/ingredients.json";
import IngredientsList from "../IngredientsList";
import { useSelector } from "react-redux";
import { selectLightMode } from "../../redux/colorSlice";
import { motion , useScroll , useTransform} from "framer-motion";
import { useRef } from "react";
import { StoryImage } from "./storyImage";



export const Story=()=>{

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
    // const x = useTransform(
    //     scrollYProgress,[0.1,0.25,0.7,1],
    //     ["0%","55%","160%","180%"]
    // )

    const y = useTransform(
        // scrollYProgress,[0.1,0.25,0.7,1],
        // ["0%", "-55%", "-60%", "0%"]
        scrollYProgress,[0,1],
        ["-20%","20%"]
    
    
        )
    
    
    return(
        <motion.div
        className={styles.story}
        // style={{ scale }}
        ref={targetRef}
      >
        <StoryImage/>
        {/* <motion.img
          src="https://github.com/hsiang2/movie_image/blob/main/img_pizza_home_1.png?raw=true"
          alt="pizza"
          style={{x}}
      
        /> */}
        <motion.div className={styles.storyContent} style={{ opacity ,y }}>
          <h1 style={{ color: colorPrimary }} className={styles.title}>
            Our Story
          </h1>
          <motion.p
            className={styles.description}
            style={{ color: lightMode ? "#6C6139" : "#DAD7CD"}}
          
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
        </motion.div>
      </motion.div>

     ) ;
   

};