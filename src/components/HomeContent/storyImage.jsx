import { theme } from "antd";
import { Link } from "react-router-dom";
import styles from "./homeContent.module.css";
import ingredients from "../../json/ingredients.json";
import IngredientsList from "../IngredientsList";
import { useSelector } from "react-redux";
import { selectLightMode } from "../../redux/colorSlice";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";



export const StoryImage = () => {

    const {
        token: { colorTextBase, colorPrimary },
    } = theme.useToken();
    const lightMode = useSelector(selectLightMode);

    const targetRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,

        offset: ["start end", " end start"],
    });


    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
    const scale = useTransform(scrollYProgress, [0.1, 0.4], [1, 2.5]);
    // const scale = useTransform(scrollYProgress,[0,0.5],[1.4,1]);
    // const x = useTransform(
    //     scrollYProgress, [0.1, 0.25, 0.7, 1],
    //     ["0%", "-55%", "-60%", "-80%"]
    // )
    const y = useTransform(
        // scrollYProgress,[0.1,0.25,0.7,1],
        // ["0%", "-55%", "-60%", "0%"]
        scrollYProgress,[0,1],
        ["50%","0%"]
    
    
        )
    return (
       
            <motion.img
                src="https://github.com/hsiang2/movie_image/blob/main/img_pizza_home_1.png?raw=true"
                alt="pizza"
                style={{ y , opacity }}
                ref={targetRef}
                className={styles.storyImage}
            />

    );


};