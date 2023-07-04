import { Button, Figure } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

import classes from './ItemPageHeader.module.css'
import { IItem } from 'models/interfaces/itemsInterfaces'

export const ItemPageHeader: React.FC<IItem> = (aboutItemSelector): JSX.Element => {

    const { t } = useTranslation()
    const {
        img,
        itemName,
        pharmCompany,
        price,
        dosage,
        articul,
        haveOrNotItem
    } = aboutItemSelector

    return (
        <div className={classes.headerSide}>
            <Figure className={classes.mainImg}>
                <Figure.Image src={img} />
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
                        <p>{itemName}</p>
                        <p>{pharmCompany}</p>
                        <p>{dosage}</p>
                        <p>{articul}</p>
                    </div>
                </div>
                <div>
                    <div className={classes.pillPrice}>
                        <div className={classes.priceDiv}>
                            <span style={{ marginRight: '4px' }}>{t("itemPageHeader.from")}</span>
                            <span className={classes.price}>{price} {t("item.rouble")}</span>
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
