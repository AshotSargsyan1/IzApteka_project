import BasketAndSearchComponent from "../ComponentsForHeader/BasketAndSearchComponent/BasketAndSearchComponent"
import ContactSideComponent from "../ComponentsForHeader/ContactSideComponent/ContactSideComponent"

const HeaderComponent: React.FC = (): JSX.Element => {
    return (
        <>
            <ContactSideComponent />
            <BasketAndSearchComponent />
        </>
    )
}

export default HeaderComponent