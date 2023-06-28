import { Link } from "react-router-dom"
import { Navbar, Image, Button, Dropdown, InputGroup, Form } from 'react-bootstrap'
import classes from './BasketAndSearchComponent.module.css'
import CatalogLinksComponent from "../CatalogLinksComponent/CatalogLinksComponent"
const BasketAndSearchComponent: React.FC = (): JSX.Element => {
    return (
        <div>
            <Navbar className="bg-body-tertiary" style={{ margin: '38px 0px 41px 0px' }}>
                <div className={classes.logoWrapper}>
                    <Link to='/'>
                        <Navbar.Brand>
                            <Image src='/assets/logo.svg' alt="Error" className={classes.logo} />
                            <Image src='/assets/logo2.png' alt="Error" className={classes.logo2} />
                        </Navbar.Brand>
                    </Link>
                </div>
                <Navbar.Collapse
                //className="justify-content-end"
                >
                    <Button variant="light" className={classes.basketAndNameButton}>
                        <svg xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '10px' }} fill="#00395D" width="22" height="20" className="bi bi-basket-fill" viewBox="0 0 16 16">
                            <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717L5.07 1.243zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3z" />
                        </svg>
                        Корзина

                    </Button>
                    <Button className={classes.basketAndNameButton} variant="light" >
                        Максим Ф․
                    </Button>
                </Navbar.Collapse>
            </Navbar>

            <div style={{display: 'flex'}}>
                <InputGroup className={classes.searchInput}>
                    <InputGroup.Text className={classes.searchInputText} id="inputGroup-sizing-default">
                        Каталог
                    </InputGroup.Text>
                    <Form.Control
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        placeholder="Введите название, производителя, симптом или активное вещество"
                        className={classes.searchInput2}
                    />

                    <Dropdown className={classes.dropdownButton}>
                        <Dropdown.Toggle variant="white" className={classes.dropdownButton} id="dropdown-basic">
                            Продукт
                        </Dropdown.Toggle>
                    </Dropdown>
                </InputGroup>
                <Button variant='primary' className={classes.findButton}>Найти</Button>
            </div>
            <CatalogLinksComponent />

        </div>

    )
}

export default BasketAndSearchComponent