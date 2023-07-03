import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next"

import classes from './ContactSideComponent.module.css'

export const ContactSideComponent: React.FC = (): JSX.Element => {

    const { t } = useTranslation()

    return (
        <div className={classes.mainRow}>
            <div className={classes.cityMainLetter}>
                <p className={classes.cityLetter}>{t("contactSide.city")}</p>
                <p className={classes.cityName}>Москва</p>
            </div>
            <div style={{
                display: 'flex',
            }}>
                <Link to='#' className={classes.contactUs}>{t("contactSide.pickup")}</Link>
                <Link to='#' className={classes.contactUs}>{t("contactSide.delivery")}</Link>
                <p className={classes.contactUs}>+7 (495) 123-45-67</p>
            </div>
        </div >
    )
}
