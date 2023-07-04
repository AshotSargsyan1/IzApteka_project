import { Figure } from "react-bootstrap"

import classes from './ImageForCompilation.module.css'

export const ImageForCompilation: React.FC = (): JSX.Element => {

    type compilationType = {
        imageUrl: string,
        bottomText: string
    }

    const imagesForcompilation: compilationType[] = [
        {
            imageUrl: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80',
            bottomText: 'Диета, спорт, питание'
        },
        {
            imageUrl: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80',
            bottomText: 'Диета, спорт, питание'
        },{
            imageUrl: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80',
            bottomText: 'Диета, спорт, питание'
        },{
            imageUrl: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80',
            bottomText: 'Диета, спорт, питание'
        },{
            imageUrl: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80',
            bottomText: 'Диета, спорт, питание'
        },{
            imageUrl: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80',
            bottomText: 'Диета, спорт, питание'
        }
    ]

    return (
        <Figure className={classes.compilationForImages}>
            {
                imagesForcompilation.map(imagesItem => {
                    return (
                        <div className={classes.wholeImageDiv}>
                            <div>
                                <Figure.Image className={classes.compilationImage}
                                    alt="Error"
                                    src={imagesItem.imageUrl}
                                />
                            </div>
                            <div className={classes.bottomSideDiv}>
                                <div className={classes.bottomSide}>
                                    <div className={classes.textDiv}>
                                        {imagesItem.bottomText}
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                })
            }
        </Figure >
    )
}
