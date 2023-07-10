import { Figure } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

import classes from './Partners.module.css'

export const Partners: React.FC = () => {

    const { t } = useTranslation()

    const imagesForCompilation: string[] = [
        '/assets/images/logo5.png',
        '/assets/images/logo6.png',
        '/assets/images/logo7.png',
        '/assets/images/logo8.png',
    ]

    return (
        <div className={classes.ownPartners}>
            <h3 className={classes.ourPartnersH3}>{t("partners.ourPartners")}</h3>
            <Figure className={classes.compilationForImages}>
                {
                    imagesForCompilation.map(img => {
                        return <Figure.Image className={classes.compilationImage}
                            alt='Error'
                            src={img}
                        />
                    })
                }
            </Figure>
        </div>
    )
}
