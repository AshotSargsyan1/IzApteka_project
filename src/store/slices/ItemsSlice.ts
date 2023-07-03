import { AnyAction, PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { server } from 'services'
import { TItem, TItemList } from "models/interfaces";



const initialState: TItemList = {
    itemList: []
}

export const itemsSliceThunk = createAsyncThunk<TItem[], undefined, { rejectValue: string }>(
    'ItemsSlice/ItemsSliceThunk',
    async (_, { rejectWithValue }) => {
        const response = await server.get('/items')
        if (!response) rejectWithValue('Server Error')
        const data = response.data
        return data
    }
)

export const CatalogSlice = createSlice({
    name: 'CatalogSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(itemsSliceThunk.fulfilled, (state, action) => {
                state.itemList = action.payload
            })
    }
})

export default CatalogSlice.reducer