import classes from './AdvertisingComponent.module.css'

const AdvertisingComponent: React.FC = (): JSX.Element => {
    return (
        <div className={classes.advertisingDiv}>
            <div className={classes.advertisingTextDiv}>
                <h2 className={classes.advertisingTextMainText}><b className={classes.advertisingText}>Быстрая доставка курьером </b>от 30 минут<br />
                    всего от 145 рублей*</h2>
            </div>
            <small className={classes.small}>*Стоимость доставки зависит от выбранной аптеки и периода времени доставки</small>
        </div>
    )
}

export default AdvertisingComponent