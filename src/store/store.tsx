import { configureStore } from '@reduxjs/toolkit'
import CatalogSlice from './slices/CatalogSlice'
import ItemsSlice from './slices/ItemsSlice'

export const store = configureStore({
    reducer: {
        catalogList: CatalogSlice,
        itemsList: ItemsSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch