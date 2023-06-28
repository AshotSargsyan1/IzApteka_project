import { Button, Figure } from 'react-bootstrap'
import classes from './ItemPageHeaderComponent.module.css'

const ItemPageHeaderComponent: React.FC = (): JSX.Element => {
    return (
        <div className={classes.headerSide}>
            <Figure className={classes.mainImg}>
                <Figure.Image src='/assets/logo9.png' />
            </Figure>
            <div className={classes.aboutPill}>
                <div className={classes.pillTitleDiv}>
                    <div className={classes.aboutPill2FirstSide}>
                        <p>Действующее вещество:</p>
                        <p>Производитель:</p>
                        <p>Дозировка:</p>
                        <p>Артикул:</p>
                    </div>
                    <div className={classes.aboutPill2SecondSide}>
                        <p>Ибупрофен</p>
                        <p>Рекитт Бенкизер Хелскэр Лимитед (Великобритания)</p>
                        <p>200 мг.</p>
                        <p>Номер артикула</p>
                    </div>
                </div>
                <div>
                    <div className={classes.pillPrice}>
                        <div className={classes.priceDiv}>
                            <span style={{ marginRight: '4px' }}>от</span>
                            <span className={classes.price}>324 ₽</span>
                        </div>
                        <div>
                            <div className={classes.buySide}>
                                <img className={classes.incrAndDecrButton} src='/assets/logo3.svg' />
                                <span>2</span>
                                <img className={classes.incrAndDecrButton} src='/assets/logo4.svg' />
                            </div>
                            <Button className={classes.addBasketBtn}>В корзину</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemPageHeaderComponent