import { Accordion, ListGroup, ListGroupItem } from 'react-bootstrap'

import { useState } from 'react'

export const AccordionSide: React.FC<any> = ({ type, data, dataForParseProp }): JSX.Element => {

    const [clickedData, setClickedData] = useState({
        listName: '',
        name: ''
    })

    return (
        <>
            {
                type.map((name: any, index: any) => {
                    return (
                        <Accordion.Item eventKey={index} onClick={() => {
                            setClickedData((prev) => ({
                                ...prev, listName: name
                            }))
                        }}>
                            <Accordion>
                                <Accordion.Header>{(data as any)[name].listName}</Accordion.Header>
                                <Accordion.Body>
                                    {(data as any)[name].list.map((item: any, index: any) => {
                                        return <Accordion>
                                            <Accordion.Item eventKey={index} onClick={() => {
                                                setClickedData((prev) => ({
                                                    ...prev, name: item
                                                }))
                                                console.log(item)
                                            }}>
                                                <Accordion>
                                                    <Accordion.Header>{item.name}</Accordion.Header>
                                                    <Accordion.Body>
                                                        {item.items.hasOwnProperty('list') &&
                                                            <ListGroup>
                                                                {item.items.list.map((item: any) => {
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
            {dataForParseProp(clickedData)}
        </>
    )
}