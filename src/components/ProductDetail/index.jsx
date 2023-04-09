import { Icon } from "@iconify/react"
import { Segmented, } from "antd"
import { useState, useEffect } from "react"
import Slider from "react-slick"
import { useDispatch, useSelector } from "react-redux"
import { useSearchParams } from "react-router-dom"
import AddToCartButton from "../AddToCartButton"
import styles from "./productDetail.module.css"
import { selectCartItems } from "../../redux/cartSlice"

const ProductDetail = ({ product }) => {
    const [searchParams] = useSearchParams()
    const cartId = searchParams.get('cartId')
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)

    const item = !!cartId ? cartItems.find(x => x.id == cartId) : null
    // console.log(cartId)
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

    // useEffect(() => {
    //     setRemove(initRemove)
    //     setAdd(initAdd)
    //     setCrust(initCrust)
    //     setSize(initSize)
    //     setQty(initQty)
    //  }, [initQty, initRemove, initAdd, initCrust, initSize])

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
            <div className={selected ? styles.ingredient : styles.ingredientActive} 
                onClick={() => onClick(ingredient)}
            >
                <Icon icon="mingcute:close-circle-fill" className={styles.optionIcon} />
                <img 
                    src={ingredient.image} 
                    className={selected ? styles.ingredientsIcone : styles.ingredientsIconActive} 
                />
                <h5 className={selected ? styles.ingredientsFont : styles.ingredientsFontActive}>
                    {ingredient.name}
                </h5>
            </div>
        )
    }

    const AddOption = ({ingredient, selected, onClick }) => {

        return (
            <div className={selected ? styles.ingredientActive : styles.ingredient} 
                onClick={() => onClick(ingredient)}
            >
                <Icon icon="solar:add-circle-bold" className={styles.optionIcon} />
                <img 
                    src={ingredient.image} 
                    className={selected ? styles.ingredientsIconActive : styles.ingredientsIcon} 
                />
                <h5 className={selected ? styles.ingredientsFontActive : styles.ingredientsFont}>
                    {ingredient.name}
                </h5>
                <h6 className={selected ? styles.ingredientsPriceActive : styles.ingredientsPrice}>
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
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3.5,
              slidesToScroll: 3.5,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3.3,
              slidesToScroll: 3.3,
            }
          }
        ],
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />
      };

    return(
        <div className={styles.container}>
            <div className={styles.bg}></div>
            <div className={styles.info}>
                <img src={product.image} />
                <h2>{product.name}</h2>
                <p>{product.description_long}</p>
            </div>
            <div className={styles.wrapper}>
                <h4>Ingredients</h4><span>x {remove.map(x => x.name).join(', ')}</span>
                <div className={styles.ingredientsWrapper}>
                
                {/* <Slider {...settings} style={styles.slider}> */}
                    {product.ingredients.map(ingredient => (
                        <RemoveOption 
                            key={ingredient.name} ingredient={ingredient} 
                            selected={remove.includes(ingredient)} onClick={clickRemove} 
                        />
                    ))}
                {/* </Slider> */}
                    
                </div>

                <h4>Add More</h4><span>+ {add.map(x => x.name).join(', ')}</span>
                <div className={styles.ingredientsWrapper}>
                {/* <Slider {...settings}> */}
                    {product.addMore.map(ingredient => (
                        <AddOption 
                            key={ingredient.name} ingredient={ingredient} 
                            selected={add.includes(ingredient)} onClick={clickAdd} 
                        />
                    ))}
                {/* </Slider> */}
                    
                </div>

                <div>
                    <div>
                        <h4>Crust</h4>
                        <Segmented 
                            className={styles.segmented}
                            value={crust}
                            options={['thin', 'pan', 'stuffed']} 
                            onChange={setCrust}
                        />
                    </div>
                    <div>
                        <h4>Size</h4>
                        <Segmented 
                            className={styles.segmented}
                            value={size}
                            options={['S', 'M', 'L']} 
                            onChange={setSize}
                        />
                        <span>
                            <Icon icon="ph:user" />
                            {size == 'S' ? '1-2' : size == 'M' ? '3-4': '5-6'}
                        </span>
                    </div>
                </div>
                <div 
                    style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}
                >
                    <div>
                        <Icon icon="solar:minus-circle-outline" onClick={() => qty > 1 ? setQty(qty - 1) : setQty(1)} />
                            {qty}
                        <Icon icon="solar:add-circle-bold" onClick={() => setQty(qty + 1)} />
                    </div>
                    <div style={{textAlign: 'end'}}>
                        <h4>Total</h4>
                        <h2>${(product.price + add.reduce((n, {price}) => n + price, 0)) * qty}</h2>
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'end', alignItems: 'center'}}>
                    <AddToCartButton 
                        product={product} qty={qty} crust={crust} size={size} add={add} remove={remove} id=''
                    />
                </div>
            </div>
        </div>
    )
}

export default ProductDetail