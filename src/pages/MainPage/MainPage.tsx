import { useTranslation } from 'react-i18next'
import { Button, ButtonGroup } from 'react-bootstrap'

import classes from './MainPage.module.css';
import {
    Advertising,
    ImageForCompilation,
    Partners,
    LinkPaths,
    CarouselC,
    LettersForNavigation,
    List
}
    from 'Components';

export const MainPage: React.FC = (): JSX.Element => {

    const { t } = useTranslation()

    return (
        <>
            <Advertising />
            <h3 className={classes.h3}>{t("mainPage.productsOfTheDay")}</h3>
            <LinkPaths />
            <CarouselC />
            <h3>{t("mainPage.makeAnOrder")}</h3>
            <LinkPaths />
            <CarouselC />
            <h3>{t("mainPage.searchForDrugs")}</h3>
            <ButtonGroup className={classes.buttonGroup} aria-label="Basic example">
                <Button variant='secondary' className={classes.pillButton}>Лекарствы и БАДы</Button>
                <Button variant='secondary' className={classes.pillButton}>Лекарствы и БАДы</Button>
                <Button variant='secondary' className={classes.pillButton}>Лекарствы и БАДы</Button>
            </ButtonGroup>
            <LettersForNavigation />
            <hr className={classes.hr} />
            <List />
            <h3>{t("mainPage.makeAnOrder")}</h3>
            <LinkPaths />
            <CarouselC />
            <h3 className={classes.collectionsH3}>{t("mainPage.collections")}</h3>
            <ImageForCompilation />
            <Partners />
            <div className={classes.whatIsApteka}>
                <h3 className={classes.whatIzAptekiH3}>{t("mainPage.whatIsIzApteki")}</h3>
                <div className={classes.p}>
                    <p>{t("mainPage.aboutIzApteki1")}</p>
                    <p>{t("mainPage.aboutIzApteki2")}</p>
                </div>
            </div>
            <h3 className={classes.makeAnOrderH3}>{t("mainPage.makeAnOrder")}</h3>
            <div className={classes.secondP}>
                <p><b className={classes.b}>{t("mainPage.favorablePrices")} </b> {t("mainPage.aboutFavorablePrices")}</p>
                <p><b className={classes.b}>{t("mainPage.convenience")} </b> {t("mainPage.aboutConvenience")}</p>
                <p><b className={classes.b}>{t("mainPage.range")} </b> {t("mainPage.aboutRange")}</p>
                <p><b className={classes.b}>{t("mainPage.itemCanReturned")}</b></p>
                <p className={classes.aboutLawP}>{t("mainPage.aboutLaw")}</p>
                <ul className={classes.infoList}>
                    <li>{t("mainPage.itemCanReturned")}</li>
                    <li>{t("mainPage.personalHygiene")}</li>
                    <li>{t("mainPage.tools")}</li>
                </ul>
            </div >
        </>
    )
}
