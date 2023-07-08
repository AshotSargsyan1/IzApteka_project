import React, { useEffect } from 'react'

import classes from './Catalogs.module.css'
import { useAppDispatch, useAppSelector } from 'hooks'
import { ItemsCatalogSliceThunk } from 'store/slices/ItemsCatalogSlice'
import { useNavigate } from 'react-router-dom'
import { IItemForCatalog, IaboutCategory } from 'models/interfaces/itemsCatalogInterfaces'

export const Catalogs: React.FC = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const catalogSelector = useAppSelector(state => state.itemsCatalog.list)
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(ItemsCatalogSliceThunk())
    }, [])

    console.log(catalogSelector)
    return (
        <div className={classes.itemsMainDiv}>
            <div>
                <h2>{catalogSelector[0]?.name}</h2>
                <ul>
                    {catalogSelector[0]?.list.map((item: any) => {
                        return <li onClick={() => {
                            navigate(`/catalog/${item.id}`)
                        }}>{item.name}</li>
                    })}
                </ul>
            </div>
            <div>
                <h2>{catalogSelector[1]?.name}</h2>
                <ul>
                    {catalogSelector[1]?.list.map((item: any) => {
                        return <li onClick={() => {
                            navigate(`/catalog/${item.id}`)
                        }}>{item.name}</li>
                    })}
                </ul>

                <h2>{catalogSelector[2]?.name}</h2>
                <ul>
                    {catalogSelector[2]?.list.map((item: any) => {
                        return <li onClick={() => {
                            navigate(`/catalog/${item.id}`)
                        }}>{item.name}</li>
                    })}
                </ul>
            </div>

            <div>
                <h2>{catalogSelector[3]?.name}</h2>
                <ul>
                    {catalogSelector[3]?.list.map((item: any) => {
                        return <li onClick={() => {
                            navigate(`/catalog/${item.id}`)
                        }}>{item.name}</li>
                    })}
                </ul>

                <h2>{catalogSelector[4]?.name}</h2>
                <ul>
                    {catalogSelector[4]?.list.map((item: any) => {
                        return <li onClick={() => {
                            navigate(`/catalog/${item.id}`)
                        }}>{item.name}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}
