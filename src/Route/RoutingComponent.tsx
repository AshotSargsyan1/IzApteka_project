import { Routes, Route } from "react-router-dom"
import MainPageComponent from "../Pages/MainPage/MainPageComponent"
import LayoutComponent from "../Components/LayoutComponent"
import ItemPageComponent from "../Pages/ItemPage/ItemPageComponent"

const RoutingComponent: React.FC = () => {
    return (
        <Routes>
            <Route element={<LayoutComponent />}>
                <Route path='/' element={<MainPageComponent />} />
                <Route path='/item' element={<ItemPageComponent />} />
            </Route>
        </Routes>


    )
}

export default RoutingComponent