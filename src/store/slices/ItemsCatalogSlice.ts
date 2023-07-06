import { AnyAction, PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ICatalog, IItemsCatalog } from "models/interfaces/itemsCatalogInterfaces";

import { server } from 'services'

const initialState: IItemsCatalog = {
    list: {
        medications: {
            listName: '',
            list: []
        },
        vitaminsAndDietarySupplements: {
            listName: '',
            list: []
        },
        beauty: {
            listName: '',
            list: []
        },
        hygiene: {
            listName: '',
            list: []
        },
        motherAndChild: {
            listName: '',
            list: []
        },
    }
}

export const ItemsCatalogSliceThunk = createAsyncThunk<ICatalog, undefined, { rejectValue: string }>(
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