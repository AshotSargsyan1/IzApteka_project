import { AnyAction, PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { ICatalog, IaboutCategory } from "models/interfaces/itemsCatalogInterfaces";

import { server } from 'services'

const initialState: ICatalog = {
    list: [
        {
            id: 0,
            name: '',
            list: [{
                id: 0,
                name: '',
                items: [
                    {
                        image: '',
                        title: '',
                        company: '',
                        price: 0
                    }
                ]
            }
            ]
        }
    ]
}


export const ItemsCatalogSliceThunk = createAsyncThunk<IaboutCategory[], undefined, { rejectValue: string }>(
    'ItemsCatalogSlice/ItemsCatalogSliceThunk',
    async (_, { rejectWithValue }) => {
        const response = await server.get('/catalog')
        if (!response) rejectWithValue('Server Error')
        const data = response.data
        return data
    }
)

export const ItemsCatalogSlice = createSlice({
    name: 'ItemsCatalogSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(ItemsCatalogSliceThunk.fulfilled, (state, action) => {
                state.list = action.payload
            })
    }
})

export default ItemsCatalogSlice.reducer