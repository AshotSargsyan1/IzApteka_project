import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from 'hooks/index'
import { useEffect } from "react"


import classes from './ItemPage.module.css'
import { ItemPageHeader } from "Components/ComponentsForItemPage/ItemPageHeader"
import { ItemPageBody } from "Components/ComponentsForItemPage/ItemPageBody"
import { Advertising } from "Components/Advertising"
import { getAboutItemSliceThunk } from "store/slices/ItemsSlice"


export const ItemPage: React.FC = (): JSX.Element => {
    const { id } = useParams<string>()

    const dispatch = useAppDispatch()
    const aboutItemSelector = useAppSelector(state => state.itemsList.aboutItem)

    useEffect(() => {
        dispatch(getAboutItemSliceThunk(Number(id)))
    }, [dispatch, aboutItemSelector])


    return (
        <>
            <Advertising />
            <span className={classes.locationSpan}>Главная &gt; Каталог  &gt; Лекарства &gt; Противовоспалительные стедства &gt;  Нурофен Экспресс 20 таб.</span>
            <h1 className={classes.itemName}>{aboutItemSelector.itemName}</h1>
            <ItemPageHeader {...aboutItemSelector}/>
            <ItemPageBody {...aboutItemSelector}/>
        </>
    )
}
