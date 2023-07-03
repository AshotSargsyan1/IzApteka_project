import { Routes, Route } from "react-router-dom"
import { useEffect } from "react"
import { useTranslation } from 'react-i18next'

import { MainPage } from "pages/MainPage"
import LayoutComponent from "Components/LayoutComponent"
import { ItemPage } from "pages/ItemPage"
import { FooterComponent } from "Components/FooterComponent"
import classes from './MainRoute.module.css'

const MainRoute: React.FC = () => {
    const { i18n } = useTranslation();

    useEffect(() => {
        i18n.changeLanguage('ru');
    }, [i18n]);
    return (
        <>
            <div className={classes.containerForMainSide}>
                <Routes>
                    <Route element={<LayoutComponent />}>
                        <Route path='/' element={<MainPage />} />
                        <Route path='/item/:id' element={<ItemPage />} />
                    </Route>
                </Routes>
            </div>
            <div className={classes.footerSide}>
                <FooterComponent />
            </div>
        </>
    )
}

export default MainRoute