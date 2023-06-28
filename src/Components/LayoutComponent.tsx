import { Outlet } from 'react-router-dom'
import HeaderComponent from './HeaderComponent/HeaderComponent'
import FooterComponent from './FooterComponent/FooterComponent'

const LayoutComponent: React.FC = () => {
    return (
        <>
            <HeaderComponent />
            <Outlet />
            <FooterComponent />
        </>
    )
}

export default LayoutComponent