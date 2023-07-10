import { Routes, Route } from "react-router-dom"
import { useEffect } from "react"
import { useTranslation } from 'react-i18next'

import { MainPage, MainLayout, ItemPage, CatalogPage, CatalogItemPage } from "pages"
import { Footer } from "Components"
import classes from './MainRoute.module.css'

export const MainRoute: React.FC = () => {
    const { i18n } = useTranslation();

    useEffect(() => {
        i18n.changeLanguage('ru');
    }, [i18n]);
    return (
        <>
            <div className={classes.containerForMainSide}>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route path='/' element={<MainPage />} />
                        <Route path='/item/:id' element={<ItemPage />} />
                        <Route path='/catalog' element={<CatalogPage />} />
                        <Route path='/catalog/:id' element={<CatalogItemPage />} />
                    </Route>
                </Routes>
            </div>
            <div className={classes.footerSide}>
                <Footer />
            </div>
        </>
    )
}
