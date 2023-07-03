export type CatalogList = {
    list: string[]
}

export type TItem = {
    img: string,
    itemName: string,
    pharmCompany: string,
    price: number,
    id: number
}

export type TItemList = {
    itemList: TItem[]
}