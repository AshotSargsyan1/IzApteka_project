import { Accordion } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

import classes from './ItemPageBody.module.css'
import { CarouselC } from 'Components/MainPageComponents/Carousel'
import { IItem } from 'models/interfaces/itemsInterfaces'

export const ItemPageBody: React.FC<IItem> = (aboutItemSelector): JSX.Element => {

    const { t } = useTranslation()
    const {
        compound,
        pharmachologicEffect,
        contraindication,
        sideEffects
    } = aboutItemSelector

    console.log(sideEffects)

    return (
        <>
            <Accordion defaultActiveKey="0">
                <h1 className={classes.howUseSide}>{t("itemPageBody.instructionsForUse")}</h1>

                <Accordion.Item eventKey="0" className={classes.accordionItem}>
                    <Accordion.Header className={classes.compoundTitle}>{t("itemPageBody.compound")}</Accordion.Header>
                    <Accordion.Body className={classes.compoundP}>
                        {compound}
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1" className={classes.accordionItem}>
                    <Accordion.Header className={classes.effect}>{t("itemPageBody.pharmachologicEffect")}</Accordion.Header>
                    <Accordion.Body className={classes.aboutEffect}>
                        {pharmachologicEffect}
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2" className={classes.accordionItem}>
                    <Accordion.Header className={classes.indications}>{t("itemPageBody.indications")}</Accordion.Header>
                </Accordion.Item>

                <Accordion.Item eventKey="3" className={classes.accordionItem}>
                    <Accordion.Header className={classes.contraindication}>{t("itemPageBody.contraindications")}</Accordion.Header>
                    <Accordion.Body className={classes.aboutContraindication}>
                        {contraindication}
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4" style={{ border: 'none' }}>
                    <Accordion.Header className={classes.sideEffects}>{t("itemPageBody.sideEffects")}</Accordion.Header>
                    <Accordion.Body className={classes.aboutsideEffects}>
                        {t("item.aboutContradication")}
                        <ul className={classes.aboutsideEffectsList}>
                            {sideEffects.map(text => {
                                return <li>{text}</li>
                            })}
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <h2 className={classes.productsOfTheDay}>{t("mainPage.productsOfTheDay")}</h2>
            <CarouselC />
            <h2 className={classes.buyWithIt}>{t("itemPageBody.buyWithIt")}</h2>
            <CarouselC />
        </>
    )
}
