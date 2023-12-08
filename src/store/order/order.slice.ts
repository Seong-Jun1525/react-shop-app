import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IOrder } from "./order.type";

export const fetchOrder = createAsyncThunk(
    "order/fetchOrder",
    async (userId: string, thunkAPI) => {
        try {
            const response = await axios.get<IOrder[]>(`https://65700b4c09586eff66409cd9.mockapi.io/orders?search=${userId}`)
            return response.data //payload 생성
        } catch (error) {
            return thunkAPI.rejectWithValue("Error receiving order")
        }
    }
)

type OrderState = {
    order: IOrder[]
    isLoading: boolean
    error: string
}

const initialState: OrderState = {
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
                state.order = action.payload
            })
            .addCase(fetchOrder.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload as string // return thunkAPI.rejectWithValue("Error loading product")
            })
    }
})

export default orderSlice.reducer