import { createSlice } from "@reduxjs/toolkit";

const cartItems = []

const shippingAddress = {}
const paymentMethod = {}
const price = {}

const initialState = { cartItems, shippingAddress, paymentMethod, price }
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
                state.cartItems[product].qty += item.qty
            } else {
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
        saveShippingAddress: (state, action) => {
            state.shippingAddress = action.payload
        },
        savePaymentMethod: (state, action) => {
            state.paymentMethod = action.payload
        },
        savePrice: (state, action) => {
            state.price = action.payload
        },

        clearCheckout: (state, action) => {
            state.shippingAddress = {}
            state.paymentMethod = {}
        }
    }
})

export const selectCartItems = (state) => state.cart.cartItems

export const selectShippingAddress = (state) => state.cart.shippingAddress
export const selectPaymentMethod = (state) => state.cart.paymentMethod
export const selectPrice = (state) => state.cart.price 

export const { addCartItems, removeCartItems, editCartItems, clearCart, saveShippingAddress, savePaymentMethod, savePrice, clearCheckout } = cartSlice.actions
export default cartSlice.reducer