import { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap'
import { useAppDispatch, useAppSelector } from 'hooks/index';

import classes from './Carousel.module.css'
import './Carousel.css'
import { IItem, IItemList } from 'models/interfaces/itemsInterfaces';
import { itemsSliceThunk } from 'store/slices/ItemsSlice';
import { Item } from 'Components/MainPageComponents/Item/Item';

export const CarouselC: React.FC = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const itemsList: IItemList = useAppSelector(state => state.itemsList)

    useEffect(() => {
        dispatch(itemsSliceThunk())
    }, [])

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };

    function splitArray(itemsList: IItemList, chunkSize: number) {
        const { itemList } = itemsList
        const result: IItem[][] = [];
        let ifSmallThenChunkSize: IItem[] = [];

        for (let i = 0; i < itemList.length; i += chunkSize) {
            const chunk: IItem[] = itemList.slice(i, i + chunkSize);

            if (chunk.length === chunkSize) {
                result.push(chunk);
            } else {
                ifSmallThenChunkSize = chunk;
            }
        }

        if (ifSmallThenChunkSize.length > 0) {
            result.push(ifSmallThenChunkSize);
        }

        return result;
    }

    const chunkLength: number = 6;

    const resultArray = splitArray(itemsList, chunkLength);

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className={classes.carouselDiv}>
            {resultArray.map(item => {
                return <Carousel.Item>
                    <div className={classes.items}>
                        {item.map(item => {
                            return <Item {...item} />
                        })}
                    </div>
                </Carousel.Item>
            })}

        </Carousel>
    )
}