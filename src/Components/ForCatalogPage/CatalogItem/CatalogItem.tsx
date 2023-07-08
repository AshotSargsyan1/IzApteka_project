import { Button, Card } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import { Iitem } from 'models/interfaces/itemsCatalogInterfaces'

import classes from './CatalogItem.module.css'

export const CatalogItem: React.FC<any> = ({ title, company, price }): JSX.Element => {
    const { t } = useTranslation()

    return (
        <>
            <Card className={classes.card}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title className={classes.cardTitle}>{title}</Card.Title>
                    <Card.Text className={classes.smallTitle}>
                        {company}
                    </Card.Text>
                    <Card.Text className={classes.price}>{price} {t("item.rouble")}</Card.Text>
                </Card.Body>
                <Button variant="primary" className={classes.btn}>В корзину</Button>
            </Card>
        </>
    )
}
