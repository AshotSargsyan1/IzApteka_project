import { Accordion, ListGroup, ListGroupItem } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import { IItemForCatalog, IaboutCategory, Iitem } from 'models/interfaces/itemsCatalogInterfaces'

export const AccordionSide: React.FC<any> = ({ data }): JSX.Element => {

    const navigate = useNavigate()

    return (
        <>
            {
                data.map((category: IaboutCategory) => {
                    return (
                        <Accordion.Item eventKey={(Math.random()).toString()}>
                            <Accordion defaultActiveKey={(Math.random()).toString()}>
                                <Accordion.Header>{category.name}</Accordion.Header>
                                <Accordion.Body>
                                    {category.list.map((item: IItemForCatalog) => {
                                        return <Accordion defaultActiveKey={(Math.random()).toString()}>
                                            <Accordion.Item eventKey={(Math.random()).toString()} onClick={() => {
                                                navigate(`/catalog/${item.id}`)
                                            }}>
                                                <Accordion defaultActiveKey={(Math.random()).toString()}>
                                                    <Accordion.Header>{item.name}</Accordion.Header>
                                                    <Accordion.Body>
                                                        {
                                                            item.items?.length ?
                                                                <ListGroup>
                                                                    {item?.items.map((item: Iitem) => {
                                                                        return <ListGroupItem>{item.title}</ListGroupItem>
                                                                    })}
                                                                </ListGroup>
                                                                :
                                                                <ListGroup>
                                                                    <ListGroupItem>Нету товаров</ListGroupItem>
                                                                </ListGroup>
                                                        }
                                                    </Accordion.Body>
                                                </Accordion>
                                            </Accordion.Item>
                                        </Accordion>
                                    })}
                                </Accordion.Body>
                            </Accordion>
                        </Accordion.Item>
                    )
                })
            }
        </>
    )
}