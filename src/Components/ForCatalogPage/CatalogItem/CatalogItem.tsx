import { Button, Card } from "react-bootstrap"
import { useTranslation } from "react-i18next"

import classes from './CatalogItem.module.css'

export const CatalogItem: React.FC = (): JSX.Element => {

    const { t } = useTranslation()

    return (
        <>
            <Card className={classes.card}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title className={classes.cardTitle}>Adidas Cool&Dry спрей мужской, 150 мл</Card.Title>
                    <Card.Text className={classes.smallTitle}>
                        Neofarm inc. (Poland)
                    </Card.Text>
                    <Card.Text className={classes.price}>324 {t("item.rouble")}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </>
    )
}
