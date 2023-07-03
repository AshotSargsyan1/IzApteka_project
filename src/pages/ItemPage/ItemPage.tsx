import { useParams } from "react-router-dom"
import { useAppDispatch } from 'hooks/index'

import classes from './ItemPage.module.css'
import { ItemPageHeaderComponent } from "Components/ComponentsForItemPage/ItemPageHeaderComponent"
import { ItemPageBodyComponent } from "Components/ComponentsForItemPage/ItemPageBodyComponent"
import { AdvertisingComponent } from "Components/AdvertisingComponent"


export const ItemPage: React.FC = (): JSX.Element => {
    const { id } = useParams<string>()

    return (
        <>
            <AdvertisingComponent />
            <span className={classes.locationSpan}>Главная &gt; Каталог  &gt; Лекарства &gt; Противовоспалительные стедства &gt;  Нурофен Экспресс 20 таб.</span>
            <h1 className={classes.itemName}>Нурофен Экспресс, капсулы обезболивающие 200 мг, 16 шт.</h1>
            <ItemPageHeaderComponent />
            <ItemPageBodyComponent />
        </>
    )
}
