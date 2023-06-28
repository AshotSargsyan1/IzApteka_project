import { Link } from "react-router-dom"
import { Card } from "react-bootstrap"
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
        <div style={{display: 'flex'}}>
            {
                catalogLinks.map(item => {
                    return (
                        <Link to='#' className={classes.catalogDiv}>
                            {item}
                        </Link>
                    )
                })
            }
        </div >
    )
}

export default CatalogLinksComponent