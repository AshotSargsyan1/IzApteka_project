import { Accordion, ListGroup, ListGroupItem } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export const AccordionSide: React.FC<any> = ({ data }): JSX.Element => {

    const navigate = useNavigate()

    return (
        <>
            {
                data.map((category: any) => {
                    return (
                        <Accordion.Item eventKey={(Math.random()).toString()}>
                            <Accordion defaultActiveKey={(Math.random()).toString()}>
                                <Accordion.Header>{category.name}</Accordion.Header>
                                <Accordion.Body>
                                    {category.list.map((item: any) => {
                                        return <Accordion defaultActiveKey={(Math.random()).toString()}>
                                            <Accordion.Item eventKey={(Math.random()).toString()} onClick={() => {
                                                navigate(`/catalog/${item.id}`)
                                            }}>
                                                <Accordion defaultActiveKey={(Math.random()).toString()}>
                                                    <Accordion.Header>{item.name}</Accordion.Header>
                                                    <Accordion.Body>
                                                        {
                                                            item.items.length ?
                                                                <ListGroup>
                                                                    {item.items.map((item: any) => {
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
                        </Accordion.Item >
                    )
                })
            }
        </>
    )
}