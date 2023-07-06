import { useTranslation } from 'react-i18next'

import classes from './CatalogPage.module.css'
import { Catalogs } from 'Components'

export const CatalogPage: React.FC = (): JSX.Element => {
    

    const { t } = useTranslation()

    
    return (
        <>
            <div className={classes.pathTitle}>Главная</div>
            <h2 className={classes.titleCatalog}>{t("catalogPage.catalogItems")}</h2>
            <Catalogs />
        </>
    )
}
