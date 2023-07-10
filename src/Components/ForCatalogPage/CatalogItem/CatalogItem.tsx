import { Button, Card } from "react-bootstrap"
import { useTranslation } from "react-i18next"

import classes from './CatalogItem.module.css'
import { Iitem } from "models/interfaces/itemsCatalogInterfaces"

export const CatalogItem: React.FC<Iitem> = ({ title, company, price, image }): JSX.Element => {
    const { t } = useTranslation()
    return (
        <>
            <Card className={classes.card}>
                <Card.Img variant="top" src={image} className={classes.image} />
                <Card.Body className={classes.cardBody}>
                    <Card.Title className={classes.cardTitle}>{title}</Card.Title>
                    <Card.Text className={classes.smallTitle}>
                        {company}
                    </Card.Text>
                    <Card.Text className={classes.price}>{price} {t("item.rouble")}</Card.Text>
                    <Button variant="primary" className={classes.btn}>{t("mainPage.inBasket")}</Button>
                </Card.Body>
            </Card>
        </>
    )
}
