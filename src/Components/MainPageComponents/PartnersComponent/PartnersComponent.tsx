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
            <h3 style={{marginBottom: '25px'}}>Наши партнёры</h3>
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