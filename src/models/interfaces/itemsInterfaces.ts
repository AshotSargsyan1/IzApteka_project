export type IItem = {
    id: number,
    img: string,
    itemName: string,
    pharmCompany: string,
    price: number,
    manufacturer: string,
    dosage: string,
    articul: string,
    compound: string,
    pharmachologicEffect: string,
    contraindication: string,
    haveOrNotItem: boolean,
    sideEffects: string[]
}

export type IItemList = {
    itemList: IItem[],
    aboutItem: IItem
}