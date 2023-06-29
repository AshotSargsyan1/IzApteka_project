import classes from './MainPageComponent.module.css';
import ImageForCompilationComponent from '../../Components/MainPageComponents/ImageForCompilation/ImageForCompilationComponent'
import PartnersComponent from '../../Components/MainPageComponents/PartnersComponent/PartnersComponent'
import LinkPathsComponent from '../../Components/MainPageComponents/LinkPathsComponent/LinkPathsComponent'
import CarouselComponent from '../../Components/MainPageComponents/CarouselComponent/CarouselComponent'
import { Button, ButtonGroup } from 'react-bootstrap'
import LettersForNavigation from '../../Components/MainPageComponents/LettersForNavigation/LettersForNavigation'
import AdvertisingComponent from '../../Components/MainPageComponents/CarouselComponent/AdvertisingComponent/AdvertisingComponent';
import ListComponent from '../../Components/MainPageComponents/ListComponent/ListComponent';


const MainPageComponent: React.FC = (): JSX.Element => {

    return (
        <>
            <AdvertisingComponent />
            <h3 className={classes.h3}>Товары дня</h3>
            <LinkPathsComponent />
            <CarouselComponent />
            <h3>Как сделать заказ</h3>
            <LinkPathsComponent />
            <CarouselComponent />
            <h3>Поиск лекарств</h3>
            <ButtonGroup className={classes.buttonGroup} aria-label="Basic example">
                <Button variant='secondary' className={classes.pillButton}>Лекарствы и БАДы</Button>
                <Button variant='secondary' className={classes.pillButton}>Лекарствы и БАДы</Button>
                <Button variant='secondary' className={classes.pillButton}>Лекарствы и БАДы</Button>
            </ButtonGroup >
            <LettersForNavigation />
            <hr className={classes.hr} />
            <ListComponent />
            <h3>Как сделать заказ</h3>
            <LinkPathsComponent />
            <CarouselComponent />
            <h3 style={{ margin: '75px 0' }}>Подборки</h3>
            <ImageForCompilationComponent />
            <PartnersComponent />
            <div className={classes.whatIsApteka}>
                <h3 style={{ marginTop: 0 }}>Что такое IzApteki.ru</h3>
                <div className={classes.p}>
                    <p>
                        IzApteki.ru — это онлайн сервис по заказу лекарственных препаратов и товаров для здоровья. Сервис помогает найти товары аптечного ассортимента по лучшей цене и оформить заказ в ближайшей аптеке.
                    </p>
                    <p>
                        IzApteki.ru – агрегатор аптечных сетей. Товары и цены, представленные на сайте, предоставляются партнерами портала в реальном времени, благодаря этому сервис IzApteki.ru помогает выбрать и заказать лекарственные препраты, витамины, БАДы, медицинские изделия и приборы, средства гигиены, косметику, товары для мам и малышей, диетическое питание, памперсы – все то, что продается в аптеках.
                    </p>
                </div>
            </div>
            <h3 style={{ margin: '25px 0 15px 0' }}>Как сделать заказ</h3>
            <div className={classes.secondP}>
                <p><b style={{ fontWeight: 700 }}>Выгодные цены: </b> мы постоянно анализируем рынок и предлагаем только самые выгодные предложения наших партнеров.</p>
                <p><b className={classes.b}>Удобство: </b>Сервис представлен в 36 регионах России. На данный момент в сети наших партнеров уже свыше 1100 аптек, а значит вы всегда сможете найти пункт выдачи рядом с вашим домом.</p>
                <p><b className={classes.b}>Ассортимент: </b>Izapteki.ru предлагает свыше 30 000 товарных единиц, больше нет необходимости искать лекарства по разным аптекам, найти и заказать даже самые редкие лекарства вы можете в одном месте.</p>
                <p><b className={classes.b}>Товар может быть возвращен только до момента оплаты заказа.</b></p>
                <p style={{ margin: 0 }}>Согласно Постановлению Правительства РФ от 19.01.1998 г. №55 не подлежат обмену и возврату следующие товары надлежащего качества: </p>
                <ul className={classes.infoList}>
                    <li>лекарственные средства;</li>
                    <li>предметы личной гигиены, средства гигиены полости рта;</li>
                    <li>инструменты, приборы и аппаратура медицинские, предметы санитарии и гигиены из металла, резины, текстиля и других материалов,предметы по уходу за детьми,линзы очковые,парфюмерно-косметические товары.</li>
                </ul>
            </div >
        </>


    )
}

export default MainPageComponent