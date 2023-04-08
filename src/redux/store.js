import { configureStore } from "@reduxjs/toolkit"
import { persistReducer } from "redux-persist"
import persistStore from "redux-persist/es/persistStore"
import storage from "redux-persist/lib/storage"
import thunk from "redux-thunk"
import cartReducer from "./cartSlice"

const persistConfig = {
    key: 'shoppingCart',
    storage
}

const persistedCartReducer = persistReducer(persistConfig, cartReducer)

export const store = configureStore({
    reducer: {
        cart: persistedCartReducer
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk] 
})

export const persistor = persistStore(store)