import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import classes from './LinkPaths.module.css'

export const LinkPaths: React.FC = (): JSX.Element => {

    const { t } = useTranslation()

    const linkPaths: string[] = [
        t("linksPaths.actual"),
        t("linksPaths.fromColdsAndFru"),
        t("linksPaths.firstAidKit"),
        t("linksPaths.vitamins"),
        t("linksPaths.healthyEating")
    ]

    return (
        <div className={classes.handlerForLink}>
            {linkPaths.map((item: string): JSX.Element => {
                return <Link className={classes.linkPaths} to='#'>{item}</Link>
            })}
        </div>
    )
}
