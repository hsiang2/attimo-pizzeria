import { createSlice } from "@reduxjs/toolkit";

const orderItems = []

const initialState = { orderItems }
const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addOrder: (state, action) => {
            const item = action.payload
            state.orderItems = [...state.orderItems, item]
        },
    }
})

export const selectOrderItems = (state) => state.order.orderItems

export const { addOrder } = orderSlice.actions
export default orderSlice.reducer