import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchOrder = createAsyncThunk(
    "order/fetchOrder",
    async (userId, thunkAPI) => {
        try {
            const response = await axios.get(`https://65700b4c09586eff66409cd9.mockapi.io/orders?search=${userId}`)
            return response.data //payload 생성
        } catch (error) {
            return thunkAPI.rejectWithValue("Error receiving order")
        }
    }
)

const initialState = {
    order: [],
    isLoading: false,
    error: ""
}

export const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrder.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchOrder.fulfilled, (state, action) => {
                state.isLoading = false
                state.product = action.payload
            })
            .addCase(fetchOrder.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload // return thunkAPI.rejectWithValue("Error loading product")
            })
    }
})

export default orderSlice.reducer