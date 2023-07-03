import { useTranslation } from 'react-i18next'
import { Button, ButtonGroup } from 'react-bootstrap'

import classes from './MainPage.module.css';
import { ImageForCompilationComponent } from 'Components/MainPageComponents/ImageForCompilation'
import { PartnersComponent } from 'Components/MainPageComponents/PartnersComponent'
import { LinkPathsComponent } from 'Components/MainPageComponents/LinkPathsComponent'
import { CarouselComponent } from 'Components/MainPageComponents/CarouselComponent'
import { LettersForNavigation } from 'Components/MainPageComponents/LettersForNavigation'
import { AdvertisingComponent } from 'Components/AdvertisingComponent';
import { ListComponent } from 'Components/MainPageComponents/ListComponent';

export const MainPage: React.FC = (): JSX.Element => {

    const { t } = useTranslation()

    return (
        <>
            <AdvertisingComponent />
            <h3 className={classes.h3}>{t("mainPage.productsOfTheDay")}</h3>
            <LinkPathsComponent />
            <CarouselComponent />
            <h3>{t("mainPage.makeAnOrder")}</h3>
            <LinkPathsComponent />
            <CarouselComponent />
            <h3>{t("mainPage.searchForDrugs")}</h3>
            <ButtonGroup className={classes.buttonGroup} aria-label="Basic example">
                <Button variant='secondary' className={classes.pillButton}>Лекарствы и БАДы</Button>
                <Button variant='secondary' className={classes.pillButton}>Лекарствы и БАДы</Button>
                <Button variant='secondary' className={classes.pillButton}>Лекарствы и БАДы</Button>
            </ButtonGroup>
            <LettersForNavigation />
            <hr className={classes.hr} />
            <ListComponent />
            <h3>{t("mainPage.makeAnOrder")}</h3>
            <LinkPathsComponent />
            <CarouselComponent />
            <h3 style={{ margin: '75px 0px 25px' }}>{t("mainPage.collections")}</h3>
            <ImageForCompilationComponent />
            <PartnersComponent />
            <div className={classes.whatIsApteka}>
                <h3 style={{ marginTop: 0 }}>{t("mainPage.whatIsIzApteki")}</h3>
                <div className={classes.p}>
                    <p>{t("mainPage.aboutIzApteki1")}</p>
                    <p>{t("mainPage.aboutIzApteki2")}</p>
                </div>
            </div>
            <h3 style={{ margin: '25px 0 15px 0' }}>{t("mainPage.makeAnOrder")}</h3>
            <div className={classes.secondP}>
                <p><b className={classes.b}>{t("mainPage.favorablePrices")} </b> {t("mainPage.aboutFavorablePrices")}</p>
                <p><b className={classes.b}>{t("mainPage.convenience")} </b> {t("mainPage.aboutConvenience")}</p>
                <p><b className={classes.b}>{t("mainPage.range")} </b> {t("mainPage.aboutRange")}</p>
                <p><b className={classes.b}>{t("mainPage.itemCanReturned")}</b></p>
                <p style={{ margin: 0 }}>{t("mainPage.aboutLaw")}</p>
                <ul className={classes.infoList}>
                    <li>{t("mainPage.itemCanReturned")}</li>
                    <li>{t("mainPage.personalHygiene")}</li>
                    <li>{t("mainPage.tools")}</li>
                </ul>
            </div >
        </>
    )
}
