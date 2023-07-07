export interface Iitem {
    title: string,
    company: string,
    price: number
}

export interface IItemForCatalog {
    id: number,
    name: string,
    items: {
        list: Iitem[]
    }
}

export interface IAboutItemObject {
    listName: string,
    list: IItemForCatalog[]
}

export interface ICatalog {
    medications: IAboutItemObject,
    vitaminsAndDietarySupplements: IAboutItemObject,
    beauty: IAboutItemObject,
    hygiene: IAboutItemObject,
    motherAndChild: IAboutItemObject
}

export interface IItemsCatalog {
    list: ICatalog
}