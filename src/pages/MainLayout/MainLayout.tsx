import { Outlet } from 'react-router-dom'

import { Header } from 'Components'

export const MainLayout: React.FC = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}
