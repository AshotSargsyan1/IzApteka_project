import { BasketAndSearchComponent } from "../ComponentsForHeader/BasketAndSearchComponent"
import { ContactSideComponent } from "../ComponentsForHeader/ContactSideComponent"

export const HeaderComponent: React.FC = (): JSX.Element => {
    return (
        <>
            <ContactSideComponent />
            <BasketAndSearchComponent />
        </>
    )
}