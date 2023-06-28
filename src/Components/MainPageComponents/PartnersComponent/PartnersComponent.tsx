import { Figure } from 'react-bootstrap'
import classes from './PartnersComponent.module.css'

const PartnersComponent: React.FC = () => {

    const imagesForCompilation: string[] = [
        '/assets/logo5.png',
        '/assets/logo6.png',
        '/assets/logo7.png',
        '/assets/logo8.png',
    ]

    return (
        <div className={classes.ownPartners}>
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

export default PartnersComponent