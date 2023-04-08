import { createSlice } from "@reduxjs/toolkit";

const cartItems = []
const initialState = { cartItems }
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartItems: (state, action) => {
            const item = action.payload
            
            const product = state.cartItems.findIndex( (x) => {
                return (
                    x.productId === item.productId && 
                    x.crust === item.crust && 
                    x.size === item.size && 
                    x.remove.toString() === item.remove.toString() && 
                    x.add.toString() === item.add.toString()
                )
            })
            if(product !== -1) {
                // console.log(product)
                state.cartItems[product].qty += item.qty
                // const cartItems = state.cartItems.map(
                //     (x) => x.id === product.id ? item : x
                // )
            } else {
                // console.log(product)
                state.cartItems = [...state.cartItems, item]
            }
        },
        editCartItems: (state, action) => {
            const item = action.payload
            const product = state.cartItems.findIndex((x) => x.id == item.id)
            state.cartItems[product] = item
        },
        removeCartItems: (state, action) => {
            state.cartItems = state.cartItems.filter((x) => x.id !== action.payload)
        },
        clearCart: (state, action) => {
            state.cartItems = []
        },
        // getCartItem: (state, action) => {
        //     const id = action.payload
        //     const item = state.cartItems.find((x) =>x.id == id)
        //     console.log(item)
        //     return(item)
        // },
    }
})

export const selectCartItems = (state) => state.cart.cartItems
export const { addCartItems, removeCartItems, editCartItems, clearCart } = cartSlice.actions
export default cartSlice.reducer