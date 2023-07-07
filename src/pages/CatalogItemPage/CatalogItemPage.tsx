import classes from './CatalogItemPage.module.css'
import { CatalogItem } from 'Components/ForCatalogPage/CatalogItem'
import { Accordion, Button, Form, InputGroup, ListGroup, ListGroupItem } from 'react-bootstrap'
import { useAppDispatch, useAppSelector } from 'hooks'
import { useEffect, useRef, useState } from 'react'
import { ItemsCatalogSliceThunk } from 'store/slices/ItemsCatalogSlice'
import { AccordionSide } from 'Components'

export const CatalogItemPage = () => {


  const dispatch = useAppDispatch()
  const [dropdownBtnNames, setDropdownBtnNames] = useState<any>([]);
  const selector = useAppSelector(state => state.itemsCatalog.list)
  const [dataForParse, setDataForParse] = useState<any>({
    lsitName: '',
    name: ''
  })

  useEffect(() => {
    dispatch(ItemsCatalogSliceThunk())
  }, [])
let a;
  useEffect(() => {
    const dropdownBtns: string[] = []
    if (Object.keys(selector).length) {
      for (const names in selector) {
        dropdownBtns.push(names)
      }
      setDropdownBtnNames(dropdownBtns);

    }

  }, [selector]);



  return (
    <div>
      <span className={classes.pathSpan}>Главная &gt;  Каталог &gt;  Гигиена</span>
      <div className={classes.mainDiv}>
        <div className={classes.catalogNavigationSide}>
          <hr style={{ marginTop: 0 }} />
          <div className={classes.checkboxDiv}>
            <p>Только доступные к доставке</p>
            <Form>
              <Form.Check
                type={'checkbox'}
                id={'default-checkbox'}
                className={classes.checkboxForm}
              />
            </Form>
          </div>
          <hr />

          <Accordion defaultActiveKey="0">
            <AccordionSide type={dropdownBtnNames} data={selector} dataForParseProp={(data: any) => {
              setDataForParse(data)
            }} />
          </Accordion>



        </div>
        <div className={classes.searchAndItems}>
          <div className={classes.inputDiv}>
            <InputGroup className={classes.inputGroup}>
              <Form.Control
                className={classes.input}
                placeholder="Поиск в каталоге"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button variant="primary" id="button-addon2" className={classes.searchButton}>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path d="M35.7061 34.2955L29.9363 28.5257C31.3665 26.782 32.2286 24.5486 32.2286 22.1143C32.2286 16.5306 27.698 12 22.1143 12C16.5257 12 12 16.5306 12 22.1143C12 27.698 16.5257 32.2286 22.1143 32.2286C24.5486 32.2286 26.7771 31.3714 28.5208 29.9412L34.2906 35.7061C34.6824 36.098 35.3143 36.098 35.7061 35.7061C36.098 35.3192 36.098 34.6824 35.7061 34.2955ZM22.1143 30.2155C17.6424 30.2155 14.0082 26.5812 14.0082 22.1143C14.0082 17.6473 17.6424 14.0082 22.1143 14.0082C26.5812 14.0082 30.2204 17.6473 30.2204 22.1143C30.2204 26.5812 26.5812 30.2155 22.1143 30.2155Z" fill="#F5F5F5" />
                </svg>
              </Button>
            </InputGroup>
          </div>
          <div className={classes.items}>
            {/* {dataForParse.listName != '' && dataForParse.name != '' ? a = (selector as any)[dataForParse.listName] : null} */}
            {/* {console.log(a)} */}
            <CatalogItem />
          </div>
        </div>
      </div>
    </div>
  )
}
