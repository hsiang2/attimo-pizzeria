import { useEffect, useState } from "react"
import styles from "./navCarousel.module.css"

const NavCarousel = ({ children }) => {

    const [currentIndex, setcurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length)

    useEffect(() => {
        setLength(children.length)
    }, [children])

    const next = () => {
        if(currentIndex < (length - 1)) {
            setcurrentIndex(prevState => prevState + 1)
        }
    }

    const prev = () => {
        if(currentIndex > 0) {
            setcurrentIndex(prevState => prevState - 1)
        }
    }

    return (
        <div className={styles.container}>
            <button className={styles.arrowL} onClick={prev}>
                <img src="/icon_arrow_l.png" alt="left arrow" />
            </button>
            <div className={styles.inner}>
                <div className={styles.wrapper}>
                    <div className={styles.animation}
                        style={{transform: `translateX(-${currentIndex * 153}px)`}}
                    >
                        {children}
                    </div>
                </div>
            </div>
            <button className={styles.arrowR} onClick={next}>
                <img src="/icon_arrow_r.png" alt="left arrow" />
            </button>
        </div>
    )
}

export default NavCarousel