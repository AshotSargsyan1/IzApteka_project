import { Col, Row } from "react-bootstrap"
import classes from './FooterComponent.module.css'
import { Link } from "react-router-dom"

const FooterComponent: React.FC = (): JSX.Element => {

    return (
        <div className={classes.footerMainDiv}>
            <div className={classes.brandSide}>
                <div className={classes.imgSide}>
                    <img src='/assets/logo.svg' alt="Error" className={classes.logo} />
                    <img src='/assets/logo2.png' alt="Error" className={classes.logo2} />
                </div>
                <p className={classes.ourCity}>Ваш город։ &nbsp;<u>Москва</u></p>
                <p className={classes.phoneNumber}>+7 (495) 123-45-67</p>
            </div>
            <div className={classes.footerTitles}>
                <Link className={classes.link} to='#'>Лекарства</Link>
                <Link className={classes.link} to='#'>БАД</Link>
                <Link className={classes.link} to='#'>Линзы</Link>
                <Link className={classes.link} to='#'>Новорождённые</Link>
                <Link className={classes.link} to='#'>Гигиена</Link>
            </div>
            <div className={classes.footerTitles}>
                <Link className={classes.link} to='#'>Доставка</Link>
                <Link className={classes.link} to='#'>Самовывоз</Link>
                <Link className={classes.link} to='#'>Поставщикам</Link>
                <Link className={classes.link} to='#'>Юридическим лицам</Link>
                <Link className={classes.link} to='#'>Лицензия и реквизиты</Link>
            </div>
            <div className={classes.footerTitles}>
                <Link className={classes.link} to='#'>О компании</Link>
                <Link className={classes.link} to='#'>Вакансии</Link>
                <Link className={classes.link} to='#'>Задать вопрос</Link>
                <Link className={classes.link} to='#'>Пользовательское соглашение</Link>
            </div>
        </div>
    )
}

export default FooterComponent