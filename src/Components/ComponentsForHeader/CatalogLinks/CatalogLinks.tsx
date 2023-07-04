import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "hooks/index"
import { useEffect } from "react"

import classes from './CatalogLinks.module.css'
import { getCatalogsThunk } from "store/slices/CatalogSlice"

export const CatalogLinks = () => {

    const dispatch = useAppDispatch()
    const catalogList = useAppSelector(state => state.catalogList.list)

    useEffect(() => {
        dispatch(getCatalogsThunk())
    }, [])

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
