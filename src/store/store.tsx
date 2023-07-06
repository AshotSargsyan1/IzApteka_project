import { configureStore } from '@reduxjs/toolkit'
import CatalogSlice from './slices/CatalogSlice'
import ItemsSlice from './slices/ItemsSlice'
import ItemsCatalogSlice from './slices/ItemsCatalogSlice'

export const store = configureStore({
    reducer: {
        catalogList: CatalogSlice,
        itemsList: ItemsSlice,
        itemsCatalog: ItemsCatalogSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch