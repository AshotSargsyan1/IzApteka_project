import { Link } from "react-router-dom"
import classes from './CatalogLinksComponent.module.css'

const CatalogLinksComponent = () => {
    const catalogLinks: string[] = [
        'Сиропы',
        'Витамины',
        'От кашля',
        'Желудок',
        'Головная боль',
        'Сухая кожа',
        'Шампуни',
        'Капли',
        'Крем от морщин'
    ]

    return (
        <div className={classes.catalogsWrapper}>
            {
                catalogLinks.map(item => {
                    return (
                        <Link to='#' className={classes.catalogDiv}>
                            {item}
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default CatalogLinksComponent