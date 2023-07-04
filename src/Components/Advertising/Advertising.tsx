import { useTranslation } from 'react-i18next'

import classes from './Advertising.module.css'

export const Advertising: React.FC = (): JSX.Element => {

    const { t } = useTranslation()

    return (
        <div className={classes.advertisingDiv}>
            <div className={classes.advertisingTextDiv}>
                <h2 className={classes.advertisingTextMainText}><b className={classes.advertisingText}>{t("advertising.delivery")} </b>{t("advertising.deliveryTime")}<br />
                {t("advertising.deliveryPrice")}</h2>
            </div>
            <small className={classes.small}>{t("advertising.aboutDeliveryPrice")}</small>
            <img className={classes.firstPill} src='/assets/images/pills.png' />
            <img className={classes.firstPill2} src='/assets/images/pills.png' />
            <img className={classes.firstPill3} src='/assets/images/pills.png' />
            <img className={classes.firstPill4} src='/assets/images/pills.png' />
            <img className={classes.firstPill5} src='/assets/images/pills.png' />
            <img className={classes.firstPill6} src='/assets/images/pills.png' />
        </div>
    )
}
