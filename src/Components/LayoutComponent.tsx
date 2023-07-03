import { Outlet } from 'react-router-dom'

import {HeaderComponent} from './HeaderComponent'

const LayoutComponent: React.FC = () => {
    return (
        <>
            <HeaderComponent />
            <Outlet />
        </>
    )
}

export default LayoutComponent