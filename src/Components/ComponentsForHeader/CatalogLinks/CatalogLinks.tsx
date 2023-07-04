import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "hooks/index"
import React, { useEffect } from "react"

import classes from './CatalogLinks.module.css'
import { getCatalogsThunk } from "store/slices/CatalogSlice"

export const CatalogLinks: React.FC = (): JSX.Element => {

    const dispatch = useAppDispatch()
    const catalogList = useAppSelector(state => state.catalogList.list)

    useEffect(() => {
        dispatch(getCatalogsThunk())
    }, [dispatch])

    return (
        <div className={classes.catalogsWrapper}>
            {
                catalogList.map((item: string) => {
                    return (
                        <Link to='#' className={classes.catalogDiv}>
                            {item}
                        </Link>
                    )
                })
            }
        </div>
    )
}
