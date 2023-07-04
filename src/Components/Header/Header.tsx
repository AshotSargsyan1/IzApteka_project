import { BasketAndSearch, ContactSide } from "Components"

export const Header: React.FC = (): JSX.Element => {
    return (
        <>
            <ContactSide />
            <BasketAndSearch />
        </>
    )
}