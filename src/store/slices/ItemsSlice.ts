import { AnyAction, PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { server } from 'services'
import { IItem, IItemList } from "models/interfaces/itemsInterfaces"



const initialState: IItemList = {
    itemList: [],
    aboutItem: {
        id: 0,
        img: '',
        itemName: '',
        pharmCompany: '',
        price: 0,
        manufacturer: '',
        dosage: '',
        articul: '',
        compound: '',
        pharmachologicEffect: '',
        contraindication: '',
        haveOrNotItem: false,
        sideEffects: ['']
    }
}

export const itemsSliceThunk = createAsyncThunk<IItem[], undefined, { rejectValue: string }>(
    'ItemsSlice/ItemsSliceThunk',
    async (_, { rejectWithValue }) => {
        const response = await server.get('/items')
        if (!response) rejectWithValue('Server Error')
        const data = response.data
        return data
    }
)

export const getAboutItemSliceThunk = createAsyncThunk<IItem, number, { rejectValue: string }>(
    'getAboutItemSlice/getAboutItemSliceThunk',
    async (id, { rejectWithValue }) => {
        const response = await server.get(`/items/${id}`)
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
            
            .addCase(getAboutItemSliceThunk.fulfilled, (state, action) => {
                console.log(action.payload)
                state.aboutItem = action.payload
            })
    }
})

export default CatalogSlice.reducer