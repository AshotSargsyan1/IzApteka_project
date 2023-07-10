import { Outlet } from 'react-router-dom'

import { Header } from 'Components'

export const MainLayout: React.FC = (): JSX.Element => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}
