import { Button, Figure } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

import classes from './ItemPageHeaderComponent.module.css'

export const ItemPageHeaderComponent: React.FC = (): JSX.Element => {

    const { t } = useTranslation()

    return (
        <div className={classes.headerSide}>
            <Figure className={classes.mainImg}>
                <Figure.Image src='/assets/images/logo9.png' />
            </Figure>
            <div className={classes.aboutPill}>
                <div className={classes.pillTitleDiv}>
                    <div className={classes.aboutPill2FirstSide}>
                        <p>{t("itemPageHeader.activeSubstance")}</p>
                        <p>{t("itemPageHeader.manufacturer")}</p>
                        <p>{t("itemPageHeader.dosage")}</p>
                        <p>{t("itemPageHeader.articul")}</p>
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
                            <span style={{ marginRight: '4px' }}>{t("itemPageHeader.from")}</span>
                            <span className={classes.price}>324 ₽</span>
                        </div>
                        <div>
                            <div className={classes.buySide}>
                                <img className={classes.incrAndDecrBtn} src='/assets/images/logo3.svg' />
                                <span>2</span>
                                <img className={classes.incrAndDecrBtn} src='/assets/images/logo4.svg' />
                            </div>
                            <Button className={classes.addBasketBtn}>{t("itemPageHeader.inBasket")}</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
