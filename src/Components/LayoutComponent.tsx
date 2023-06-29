import { Outlet } from 'react-router-dom'
import HeaderComponent from './HeaderComponent/HeaderComponent'
import FooterComponent from './FooterComponent/FooterComponent'

const LayoutComponent: React.FC = () => {
    return (
        <>
            <HeaderComponent />
            <Outlet />
        </>
    )
}

export default LayoutComponent