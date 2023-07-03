import { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap'
import { useAppDispatch, useAppSelector } from 'hooks/index';

// import { CatalogList, itemsSliceThunk } from '../../../store/Slices/ItemsSlice';
import { ItemComponent } from '../ItemComponent'
import classes from './CarouselComponent.module.css'
import './Carousel.css'




export interface IitemsType {
    itemName: string,
    img: string,
    pharmCompany: string,
    haveOrNotItem?: boolean,
    price: number,
    id: number
}

export const CarouselComponent: React.FC = (): JSX.Element => {
    const dispatch = useAppDispatch()
    // const itemsList: CatalogList = useAppSelector(state => state.itemsList)
    // useEffect(() => {
    //     dispatch(itemsSliceThunk())
    // }, [])

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className={classes.carouselDiv}>
            <Carousel.Item>
                <div className={classes.items}>
                    {/* <ItemComponent {...itemsList.itemList[0]} />
                    <ItemComponent {...itemsList.itemList[0]} />
                    <ItemComponent {...itemsList.itemList[0]} />
                    <ItemComponent {...itemsList.itemList[0]} />
                    <ItemComponent {...itemsList.itemList[0]} />
                    <ItemComponent {...itemsList.itemList[0]} /> */}
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className={classes.items}>
                    {/* <ItemComponent {...itemsList.itemList[0]} />
                    <ItemComponent {...itemsList.itemList[0]} />
                    <ItemComponent {...itemsList.itemList[0]} />
                    <ItemComponent {...itemsList.itemList[0]} />
                    <ItemComponent {...itemsList.itemList[0]} />
                    <ItemComponent {...itemsList.itemList[0]} /> */}
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className={classes.items}>
                    {/* <ItemComponent {...itemsList.itemList[0]} />
                    <ItemComponent {...itemsList.itemList[0]} />
                    <ItemComponent {...itemsList.itemList[0]} />
                    <ItemComponent {...itemsList.itemList[0]} />
                    <ItemComponent {...itemsList.itemList[0]} />
                    <ItemComponent {...itemsList.itemList[0]} /> */}
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className={classes.items}>
                    {/* <ItemComponent {...itemsList.itemList[0]} />
                    <ItemComponent {...itemsList.itemList[0]} />
                    <ItemComponent {...itemsList.itemList[0]} />
                    <ItemComponent {...itemsList.itemList[0]} />
                    <ItemComponent {...itemsList.itemList[0]} />
                    <ItemComponent {...itemsList.itemList[0]} /> */}
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className={classes.items}>
                    {/* <ItemComponent {...itemsList.itemList[0]} />
                    <ItemComponent {...itemsList.itemList[0]} />
                    <ItemComponent {...itemsList.itemList[0]} />
                    <ItemComponent {...itemsList.itemList[0]} />
                    <ItemComponent {...itemsList.itemList[0]} />
                    <ItemComponent {...itemsList.itemList[0]} /> */}
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className={classes.items}>
                    {/* <ItemComponent {...itemsList.itemList[0]} />
                    <ItemComponent {...itemsList.itemList[0]} />
                    <ItemComponent {...itemsList.itemList[0]} />
                    <ItemComponent {...itemsList.itemList[0]} />
                    <ItemComponent {...itemsList.itemList[0]} />
                    <ItemComponent {...itemsList.itemList[0]} /> */}
                </div>
            </Carousel.Item>
        </Carousel>
    )
}