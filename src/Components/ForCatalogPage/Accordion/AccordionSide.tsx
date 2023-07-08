import { Accordion, ListGroup, ListGroupItem } from 'react-bootstrap'


export const AccordionSide: React.FC<any> = ({ data }): JSX.Element => {

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
                                            <Accordion.Item eventKey={(Math.random()).toString()}>
                                                <Accordion defaultActiveKey={(Math.random()).toString()}>
                                                    <Accordion.Header>{item.name}</Accordion.Header>
                                                    <Accordion.Body>
                                                        {
                                                            item.items.length &&
                                                            <ListGroup>
                                                                {item.items.map((item: any) => {
                                                                    return <ListGroupItem>{item.title}</ListGroupItem>
                                                                })}
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