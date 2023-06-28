import classes from './ContactSideComponent.module.css'
import { Link } from 'react-router-dom'

const ContactSideComponent: React.FC = (): JSX.Element => {
    return (
        <div className={classes.mainRow}>
            <div className={classes.cityMainLetter}>
                <p className={classes.cityLetter}>Город։</p>
                <p className={classes.cityName}>Москва</p>
            </div>
            <div style={{
                display: 'flex',
            }}>
                <Link to='#' className={classes.contactUs}>Самовывоз</Link>
                <Link to='#' className={classes.contactUs}>Доставка</Link>
                <p className={classes.contactUs}>+7 (495) 123-45-67</p>
            </div>
        </div >
    )
}

export default ContactSideComponent