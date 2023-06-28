import { Link } from 'react-router-dom'
import classes from './LinkPathsComponent.module.css'

const LinkPathsComponent = () => {
    const linkPaths: string[] = [
        'Актуальные',
        'От простуды и гриппа',
        'Аптечка',
        'Витамины',
        'Здоровое питание'
    ]

    return (
        <div className={classes.handlerForLink}>
            {linkPaths.map((item: string) => {
                return <Link className={classes.linkPaths} to='#'>{item}</Link>
            })}
        </div>
    )
}

export default LinkPathsComponent