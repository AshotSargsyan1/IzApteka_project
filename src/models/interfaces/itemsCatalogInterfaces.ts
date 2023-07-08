export interface IaboutCategory {
    id: number,
    name: string,
    list: IItemForCatalog[]
}

export interface Iitem {
    title: string,
    company: string,
    price: number
}

export interface IItemForCatalog {
    id: number,
    name: string,
    items?: Iitem[] | []
}

export interface ICatalog {
    list: IaboutCategory[]
}
