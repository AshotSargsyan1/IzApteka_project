import { Link } from "react-router-dom"
import { Navbar, Image, Button, Dropdown, InputGroup, Form } from 'react-bootstrap'
import { useTranslation } from "react-i18next"

import classes from './BasketAndSearch.module.css'
import { CatalogLinks } from "Components"

export const BasketAndSearch: React.FC = (): JSX.Element => {

    const { t } = useTranslation()

    return (
        <div className={classes.basketAndSearchMainDiv}>
            <Navbar className="bg-body-tertiary" style={{ display: 'flex', justifyContent: "space-between", marginBottom: '40px' }}>
                <div>
                    <Navbar.Brand>
                        <Link to='/'>
                            <Image src='/assets/images/logo1.svg' alt="Error" className={classes.logo2} />
                        </Link>
                    </Navbar.Brand>
                </div>
                <div>
                    <Navbar.Collapse>
                        <Button variant="light" style={{ marginRight: '30px' }} className={classes.basketAndNameButton}>
                            <svg width="22" height="20" viewBox="0 0 22 20" style={{ marginRight: '10px' }} fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Group">
                                    <path id="Vector" d="M15.4606 5.27277H17.3892L14.5302 0.409961C14.2999 0.0159208 13.7895 -0.118411 13.392 0.114431C12.9946 0.342795 12.8591 0.848777 13.0939 1.24282L15.4606 5.27277Z" fill="#00395D" />
                                    <path id="Vector_2" d="M8.91533 1.24278C9.14568 0.84874 9.0147 0.342758 8.61724 0.114394C8.21979 -0.11397 7.70942 0.0158838 7.47908 0.409923L4.62012 5.27721H6.54867L8.91533 1.24278Z" fill="#00395D" />
                                    <path id="Vector_3" d="M20.5818 6.76367H1.41367C0.632314 6.76367 0 7.39055 0 8.1652V9.71897C0 10.4936 0.632314 11.1205 1.41367 11.1205H1.85629L3.22028 18.4505C3.39191 19.3147 4.18682 19.9998 5.01334 19.9998H5.55533H9.11435C9.47567 19.9998 9.94539 19.9998 10.4241 19.9998H10.8577H11.2913C11.7701 19.9998 12.2398 19.9998 12.6011 19.9998H16.1601H16.7021C17.5286 19.9998 18.3235 19.3147 18.4952 18.4505L19.8682 11.116H20.5863C21.3677 11.116 22 10.4891 22 9.71449V8.16072C21.9955 7.39055 21.3632 6.76367 20.5818 6.76367ZM7.80456 14.0892V17.2505C7.80456 17.7028 7.4342 18.0431 7.00513 18.0431C6.54896 18.0431 6.20571 17.6759 6.20571 17.2505V15.9251V12.8176C6.20571 12.3653 6.57606 12.025 7.00513 12.025C7.4613 12.025 7.80456 12.3922 7.80456 12.8176V14.0892ZM10.3699 14.0892V17.2505C10.3699 17.7028 9.99959 18.0431 9.57052 18.0431C9.11435 18.0431 8.77109 17.6759 8.77109 17.2505V15.9251V12.8176C8.77109 12.3653 9.14145 12.025 9.57052 12.025C9.99959 12.025 10.3699 12.3922 10.3699 12.8176V14.0892ZM12.9489 15.9251V17.2505C12.9489 17.6759 12.6056 18.0431 12.1495 18.0431C11.7204 18.0431 11.35 17.7028 11.35 17.2505V14.0892V12.8176C11.35 12.3922 11.7204 12.025 12.1495 12.025C12.5785 12.025 12.9489 12.3653 12.9489 12.8176V15.9251ZM15.5143 15.9251V17.2505C15.5143 17.6759 15.171 18.0431 14.7148 18.0431C14.2858 18.0431 13.9154 17.7028 13.9154 17.2505V14.0892V12.8176C13.9154 12.3922 14.2587 12.025 14.7148 12.025C15.1439 12.025 15.5143 12.3653 15.5143 12.8176V15.9251Z" fill="#00395D" />
                                </g>
                            </svg>
                            {t("basketAndSearch.basket")}
                            <div className={classes.countDiv}>6</div>
                        </Button>
                        <Button className={classes.basketAndNameButton} variant="light" >
                            Максим Ф․
                        </Button>
                    </Navbar.Collapse>
                </div>
            </Navbar>

            <div className={classes.searchSide}>
                <InputGroup className={classes.searchInput}>
                    <InputGroup.Text className={classes.searchInputText} id="inputGroup-sizing-default">
                        {t("basketAndSearch.catalog")}
                    </InputGroup.Text>
                    <Form.Control
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        placeholder="Введите название, производителя, симптом или активное вещество"
                        className={classes.searchInput2}
                    />

                    <Dropdown className={classes.dropdownButton}>
                        <Dropdown.Toggle variant="white" className={classes.dropdownButton} id="dropdown-basic">
                            {t("basketAndSearch.product")}
                        </Dropdown.Toggle>
                    </Dropdown>
                </InputGroup>
                <Button variant='primary' className={classes.findButton}> {t("basketAndSearch.find")}</Button>
            </div>
            <CatalogLinks />

        </div >

    )
}
