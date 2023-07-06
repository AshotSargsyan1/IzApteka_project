import React, { useEffect } from 'react'

import classes from './Catalogs.module.css'
import { useAppDispatch, useAppSelector } from 'hooks'
import { ItemsCatalogSliceThunk } from 'store/slices/ItemsCatalogSlice'
import { useNavigate } from 'react-router-dom'
import { IAboutItemObject } from 'models/interfaces/itemsCatalogInterfaces'

export const Catalogs: React.FC = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const catalogSelector = useAppSelector(state => state.itemsCatalog.list)
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(ItemsCatalogSliceThunk())
    }, [])

    function createListSide(listChunk: IAboutItemObject) {
        return (
            <div className={classes.columnsList}>
                <h2 className={classes.titles}>{listChunk.listName}</h2>
                <ul>
                    {listChunk.list.map(item => {
                        return <li onClick={() => {
                            navigate(`/catalog/${item.id}`)
                        }} className={classes.links}>{item.name}</li>
                    })}
                </ul>
            </div>
        )
    }


    return (
        <div className={classes.itemsMainDiv}>
            {createListSide(catalogSelector.medications)}
            <div>
                {createListSide(catalogSelector.vitaminsAndDietarySupplements)}
                {createListSide(catalogSelector.beauty)}
            </div>
            <div>
                {createListSide(catalogSelector.hygiene)}
                {createListSide(catalogSelector.motherAndChild)}
            </div>
        </div>
    )
}
