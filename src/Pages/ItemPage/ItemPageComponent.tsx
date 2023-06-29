import { useState } from "react"
import classes from './ItemPageComponent.module.css'
import ItemPageHeaderComponent from "../../Components/ComponentsForItemPage/ItemPageHeaderComponent/ItemPageHeaderComponent"
import ItemPageBodyComponent from "../../Components/ComponentsForItemPage/ItemPageBodyComponent/ItemPageBodyComponent"
import AdvertisingComponent from "../../Components/MainPageComponents/CarouselComponent/AdvertisingComponent/AdvertisingComponent"

const ItemPageComponent: React.FC = (): JSX.Element => {

    const [itemCount, setItemCount] = useState<number>(2)

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

export default ItemPageComponent