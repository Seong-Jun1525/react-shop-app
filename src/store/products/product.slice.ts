import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IProduct } from "./products.type";

export const fetchProduct = createAsyncThunk(
    "product/fetchProduct",
    async(id: number, thunkAPI) => {
        try {
            const response = await axios.get<IProduct>(
                `https://fakestoreapi.com/products/${id}`
            )
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue("Error loading product")
        }
    }
)

type ProductType = {
    product: IProduct
    isLoading: boolean
    error: string
}

const initialState: ProductType = {
    product: {} as IProduct,
    isLoading: false,
    error: ""
}
export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProduct.pending, (state) => { // 대기중
                state.isLoading = true
            })
            .addCase(fetchProduct.fulfilled, (state, action) => { // 이행됨
                state.isLoading = false
                state.product = action.payload
            })
            .addCase(fetchProduct.rejected, (state, action) => { // 거부됨
                state.isLoading = false
                state.error = action.payload as string // return thunkAPI.rejectWithValue("Error loading product")
            })
    }
})

export default productSlice.reducer