import { Button, Card } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import { Iitem } from 'models/interfaces/itemsCatalogInterfaces'

import classes from './CatalogItem.module.css'

export const CatalogItem: React.FC = (): JSX.Element => {
    const { t } = useTranslation()

    return (
        <>
            <Card className={classes.card}>
                {/* <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title className={classes.cardTitle}>{item.title}</Card.Title>
                    <Card.Text className={classes.smallTitle}>
                        {item.company}
                    </Card.Text>
                    <Card.Text className={classes.price}>{item.price} {t("item.rouble")}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body> */}
                <Button variant="primary" className={classes.btn}>В корзину</Button>
            </Card>
        </>
    )
}
