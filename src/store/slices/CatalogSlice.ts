import { AnyAction, PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { server } from 'services'
import { CatalogList } from "models/interfaces";

const initialState: CatalogList = {
    list: []
}

export const getCatalogsThunk = createAsyncThunk<string[], undefined, { rejectValue: string }>(
    'getCatalogs/getCatalogsThunk',
    async (_, { rejectWithValue }) => {
        const response = await server.get('/catalogs')
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
            .addCase(getCatalogsThunk.fulfilled, (state, action) => {
                state.list = action.payload
            })
    }
})

export default CatalogSlice.reducer