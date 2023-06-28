import { useState } from 'react';
import ItemComponent from '../ItemComponent/ItemComponent'
import { Carousel } from 'react-bootstrap'
import classes from './CarouselComponent.module.css'

export interface IitemsType {
    title: string,
    img: string,
    smallTitle: string,
    haveOrNotItem?: boolean,
    price: number
}
const CarouselComponent: React.FC = (): JSX.Element => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };
    const items: IitemsType[] = [
        {
            title: 'Хилак Форте Капли, 100мл',
            img: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80',
            smallTitle: 'Teva(Israel)',
            haveOrNotItem: false,
            price: 527
        }
    ]

    return (
        <div className={classes.carouselDiv}>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <div style={{ display: 'flex' }}>
                        <ItemComponent {...items[0]} />
                        <ItemComponent {...items[0]} />
                        <ItemComponent {...items[0]} />
                        <ItemComponent {...items[0]} />
                        <ItemComponent {...items[0]} />
                        <ItemComponent {...items[0]} />
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div style={{ display: 'flex' }}>
                        <ItemComponent {...items[0]} />
                        <ItemComponent {...items[0]} />
                        <ItemComponent {...items[0]} />
                        <ItemComponent {...items[0]} />
                        <ItemComponent {...items[0]} />
                        <ItemComponent {...items[0]} />
                    </div>
                </Carousel.Item>
                <Carousel.Item >

                    <div style={{ display: 'flex' }}>
                        <ItemComponent {...items[0]} />
                        <ItemComponent {...items[0]} />
                        <ItemComponent {...items[0]} />
                        <ItemComponent {...items[0]} />
                        <ItemComponent {...items[0]} />
                        <ItemComponent {...items[0]} />
                    </div>

                </Carousel.Item>
                <Carousel.Item >
                    <div style={{ display: 'flex' }}>
                        <ItemComponent {...items[0]} />
                        <ItemComponent {...items[0]} />
                        <ItemComponent {...items[0]} />
                        <ItemComponent {...items[0]} />
                        <ItemComponent {...items[0]} />
                        <ItemComponent {...items[0]} />
                    </div>

                </Carousel.Item>
                <Carousel.Item >
                    <div style={{ display: 'flex' }}>
                        <ItemComponent {...items[0]} />
                        <ItemComponent {...items[0]} />
                        <ItemComponent {...items[0]} />
                        <ItemComponent {...items[0]} />
                        <ItemComponent {...items[0]} />
                        <ItemComponent {...items[0]} />
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div style={{ display: 'flex' }}>
                        <ItemComponent {...items[0]} />
                        <ItemComponent {...items[0]} />
                        <ItemComponent {...items[0]} />
                        <ItemComponent {...items[0]} />
                        <ItemComponent {...items[0]} />
                        <ItemComponent {...items[0]} />
                    </div>
                </Carousel.Item>
            </Carousel >
        </div >
    )
}

export default CarouselComponent