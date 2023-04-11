import React from "react"
import { Icon } from "@iconify/react"
import { Segmented, } from "antd"
import { useState, useEffect } from "react"
import Slider from "react-slick"
import { useSelector } from "react-redux"
import { useSearchParams } from "react-router-dom"
import AddToCartButton from "../AddToCartButton"
import styles from "./productDetail.module.css"
import { selectCartItems } from "../../redux/cartSlice"
import { theme } from "antd"
import { selectLightMode } from "../../redux/colorSlice"
import EditButton from "../EditButton"

const ProductDetail = ({ product }) => {
    const {
        token: { colorTextBase },
    } = theme.useToken();
    const lightMode = useSelector(selectLightMode)

    const slider = React.useRef(null);

    const [searchParams] = useSearchParams()
    const cartId = searchParams.get('cartId')

    const cartItems = useSelector(selectCartItems)

    const item = !!cartId ? cartItems.find(x => x.id == cartId) : null

    const initQty = item != null ? item.qty : 1
    const initRemove = item != null ? item.remove : []
    const initAdd = item != null ? item.add : []
    const initSize = item != null ? item.size : 'S'
    const initCrust = item != null ? item.crust : 'thin'

    const [remove, setRemove] = useState(initRemove)
    const [add, setAdd] = useState(initAdd)
    const [crust, setCrust] = useState(initCrust)
    const [size, setSize] = useState(initSize)
    const [qty, setQty] = useState(initQty)

    useEffect(() => {
        setRemove(initRemove)
        setAdd(initAdd)
        setCrust(initCrust)
        setSize(initSize)
        setQty(initQty)
    }, [product, cartId])

    const clickRemove = (option) => {
        const index = remove.indexOf(option)
        if (index === -1) {
            setRemove([...remove, option])
        } else {
            setRemove(remove.filter((x) => x !== option))
        }
    }

    const clickAdd = (option) => {
        const index = add.indexOf(option)
        if (index === -1) {
            setAdd([...add, option])
        } else {
            setAdd(add.filter((x) => x !== option))
        }
    }

    const RemoveOption = ({ingredient, selected, onClick }) => {
        return (
            <div onClick={() => onClick(ingredient)}
                className={lightMode&&selected ? 
                    styles.ingredient : 
                    lightMode&&!selected ?
                    styles.ingredientActive :
                    !lightMode&&selected ?
                    styles.ingredientDark :
                    styles.ingredientActiveDark
                } 
            >
                <Icon icon="mingcute:close-circle-fill" 
                    style={{color: lightMode ? '#BD5849' : '#F9A784BF'}} className={styles.optionIcon} 
                />
                <img 
                    src={ingredient.image} 
                    className={selected ? styles.ingredientsIcon : styles.ingredientsIconActive} 
                />
                <h5 
                    style={{color: lightMode ? '#6E4230' : '#FEF6E0'}}
                    className={selected ? styles.ingredientsFont : styles.ingredientsFontActive}
                >
                    {ingredient.name}
                </h5>
            </div>
        )
    }

    const AddOption = ({ingredient, selected, onClick }) => {

        return (
            <div onClick={() => onClick(ingredient)}
                className={lightMode&&selected ? 
                    styles.ingredientActive : 
                    lightMode&&!selected ?
                    styles.ingredient :
                    !lightMode&&selected ?
                    styles.ingredientActiveDark :
                    styles.ingredientDark
                } 
            >
                <Icon icon="solar:add-circle-bold" 
                    style={{color: lightMode ? '#7E8960' : '#96A179'}}
                    className={styles.optionIcon} 
                />
                <img 
                    src={ingredient.image} 
                    className={selected ? styles.ingredientsIconActive : styles.ingredientsIcon} 
                />
                <h5 
                    style={{color: lightMode ? '#6E4230' : '#FEF6E0'}}
                    className={selected ? styles.ingredientsFontActive : styles.ingredientsFont}
                >
                    {ingredient.name}
                </h5>
                <h6 
                    style={{color: lightMode ? '#AB3421' : '#F9A784'}}
                    className={selected ? styles.ingredientsPriceActive : styles.ingredientsPrice}
                >
                    ${ingredient.price.toFixed(2)}
                </h6>
            </div>
        )
    }

    var settings = {
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        // responsive: [
        //   {
        //     breakpoint: 992,
        //     settings: {
        //       slidesToShow: 3.5,
        //       slidesToScroll: 3.5,
        //     }
        //   },
        //   {
        //     breakpoint: 768,
        //     settings: {
        //       slidesToShow: 3.3,
        //       slidesToScroll: 3.3,
        //     }
        //   }
        // ],
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />
      };

    return(
        <div className={styles.bg}>
            <div className={styles.info}>
                <img src={product.image} />
                <h2 className={styles.name} style={{color: colorTextBase}}>{product.name}</h2>
                <p className={styles.description} style={{color: lightMode ? '#6C613980' : '#DAD7CDB3'}}>{product.description_long}</p>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.customTitle}>
                        <h4 className={styles.title} style={{color: lightMode ? '#6E4230' : '#FEF6E0CC'}}>
                            Ingredients
                        </h4>
                        <p className={styles.customList} style={{color: lightMode ? '#D85643CC' : '#FFA69ECC'}}>
                            <strong>x</strong>&nbsp; {remove.map(x => x.name).join(', ')}
                        </p>
                </div>
                
                <div className={styles.ingredientsWrapper}>
                <Slider {...settings} style={styles.slider}>
                    {product.ingredients.map(ingredient => (
                        <RemoveOption 
                            key={ingredient.name} ingredient={ingredient} 
                            selected={remove.includes(ingredient)} onClick={clickRemove} 
                        />
                    ))}
                </Slider>
                    
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'space-between'}}>
                    <div className={styles.customTitle}>
                        <h4 className={styles.title} style={{color: lightMode ? '#6E4230' : '#FEF6E0CC'}}>
                            Add More
                        </h4>
                        <p className={styles.customList} style={{color: lightMode ? '#779624CC' : '#B6C199'}}>
                            <strong>+</strong>&nbsp; {add.map(x => x.name).join(', ')}
                        </p>
                    </div>
                    
                    <div className={styles.arrows}>
                        <button onClick={() => slider?.current?.slickPrev()}>
                            <Icon className={lightMode ? styles.arrow : styles.arrowDark} icon="ic:round-keyboard-arrow-left" />
                        </button>
                        <button onClick={() => slider?.current?.slickNext()}>
                            <Icon className={lightMode ? styles.arrow : styles.arrowDark} icon="ic:round-keyboard-arrow-right" />
                        </button>

                    </div>
  
                </div>
                <div className={styles.ingredientsWrapper}>
                <Slider ref={slider} {...settings}>
                    {product.addMore.map(ingredient => (
                        <AddOption 
                            key={ingredient.name} ingredient={ingredient} 
                            selected={add.includes(ingredient)} onClick={clickAdd} 
                        />
                    ))}
                </Slider>
                    
                </div>
                
                <div className={styles.crustAndSize}>
                    <div className={styles.crust}>
                        <h4 className={styles.title} style={{color: lightMode ? '#6E4230' : '#FEF6E0CC'}}>Crust</h4>
                        <Segmented 
                            className={styles.segmented}
                            style={{color: lightMode ? '#3D403554' : '#FEF6E04D'}}
                            value={crust}
                            options={['thin', 'pan', 'stuffed']} 
                            onChange={setCrust}
                        />
                    </div>
                    <div className={styles.size}>
                        <h4 className={styles.title} style={{color: lightMode ? '#6E4230' : '#FEF6E0CC'}}>Size</h4>
                        <Segmented 
                            style={{color: lightMode ? '#3D403554' : '#FEF6E04D'}}
                            className={styles.segmented}
                            value={size}
                            options={['S', 'M', 'L']} 
                            onChange={setSize}
                        />
                        <div style={{ color: lightMode ? '#746D5D' : '#9F9C97',
                                display: 'flex', gap: '0.25rem', alignItems: 'center', marginTop: '0.75rem'
                            }}>
                            <Icon style={{fontSize: '0.75rem'}} icon="ph:user" />
                            <h4 style={{fontSize: '0.875rem', margin: 0}}>{size == 'S' ? '1-2' : size == 'M' ? '3-4': '5-6'}</h4> 
                        </div>
                    </div>
                </div>
                <div 
                    style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}
                >
                    <div style={{color: lightMode ? '#BD5849' : '#F9A784CC',
                        width: '6.625rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Icon icon="solar:minus-circle-outline" 
                            style={{fontSize: '1.5rem', cursor: 'pointer'}}
                            onClick={() => qty > 1 ? setQty(qty - 1) : setQty(1)} 
                        />
                            <h3 style={{}} className={styles.qty}>{qty}</h3>
                        <Icon icon="solar:add-circle-bold" 
                            style={{fontSize: '1.5rem', cursor: 'pointer'}}
                            onClick={() => setQty(qty + 1)} 
                        />
                    </div>
                    <div style={{textAlign: 'end'}}>
                        <h4 className={styles.total} style={{color: lightMode ? '#323D1482' : '#DAD7CDB3'}}>
                            Total
                        </h4>
                        <h2 className={styles.totalPrice} style={{color: lightMode ? '#AB3421' : '#F9A784B3'}}>
                            ${((product.price + add.reduce((n, {price}) => n + price, 0)) * qty).toFixed(2)}
                        </h2>
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'end', alignItems: 'center', marginTop: '2rem', marginBottom: '5.6rem'}}>
                    {!!cartId ? 
                        <EditButton 
                            product={product} qty={qty} crust={crust} size={size} add={add} remove={remove} id={cartId}
                        /> : 
                        <AddToCartButton 
                            product={product} qty={qty} crust={crust} size={size} add={add} remove={remove} id=''
                        />
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default ProductDetail