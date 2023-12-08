import {configureStore} from "@reduxjs/toolkit"
import userSlice from "./user/user.slice"
import categoriesSlice from "./categories/categories.slice"
import productsSlice from "./products/products.slice"
import cartSlice from "./cart/cart.slice"
import productSlice from "./products/product.slice"
import orderSlice from "./order/order.slice"

// configureStore: 리듀서에서 반환한 새로운 상태를 스토어라는 객체로 정리해 관리
export const store = configureStore({
    reducer: {
        userSlice,
        categoriesSlice,
        productsSlice,
        cartSlice,
        productSlice,
        orderSlice
    },
    // middleware, devTools, reloadedState, enhancers
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
// console.log(store.getState())