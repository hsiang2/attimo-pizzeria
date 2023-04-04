import { useEffect, useRef, useState } from "react"
import styles from "./navCarousel.module.css"

const NavCarousel = ({ children }) => {
    //const windowWidth = useRef(window.innerWidth);
    //const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const [currentIndex, setcurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length)
    // const [show, setShow] = useState(2)
    
    // const handleWindowResize = () => {
    //     if (window.innerWidth >= 992) {
    //         setShow(5)
    //     } else if (window.innerWidth >= 468) {
    //         setShow(4)
    //     } else {
    //         setShow(2)
    //     }
                
    // };
    useEffect(() => {
        
      
        // window.addEventListener('resize', handleWindowResize);
        // handleWindowResize;
          
        setLength(children.length)

        
        
        // if (windowWidth >= 992) {
        //     setShow(5)
        // } else if (windowWidth >= 468) {
        //     setShow(4);
        // } else {
        //     setShow(2)
        // }

        // return () => {
        //     window.removeEventListener('resize', handleWindowResize);
        //   };
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
                        {/* {ingredients.map(({ name, image }) => (
                            <img src={image} alt={name} className={styles.item} key={name} />
                        ))} */}
                        {children}
                    </div>
                </div>
            </div>
            <button className={styles.arrowR} onClick={next}>
                <img src="/icon_arrow_r.png" alt="left arrow" />
            </button>
        </div>
        
        // <div className="container">
        //     {/* <h1>{window.innerWidth}</h1>
        //     <h1>{show}</h1> */}
        //     <div className={styles.wrapper}>
        //         <button className={styles.arrowL} onClick={prev}>
        //             <img src="/icon_arrow_l.png" alt="left arrow" />
        //         </button>
        //         <div className={styles.contentWrapper}>
        //             <div 
        //                 className={styles.content} 
        //                 //style={{ transform: `translateX(-${currentIndex * 100 / show}%)` }}
        //                 style={{"--currentIndex": `${currentIndex}`}}
        //             >
        //                 {children}
        //             </div>
        //         </div>
        //         <button className={styles.arrowR} onClick={next}>
        //             <img src="/icon_arrow_r.png" alt="rightt arrow" />
        //         </button>
        //     </div>
        // </div>
    )
}

export default NavCarousel