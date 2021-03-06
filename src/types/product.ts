export interface Product  {
  category: string,
  description: string,
  id: number,
  image: string,
  price: number,
  title: string
}

export interface ProductState {
  products: Product[],
}

export interface GET_PRODUCTS {
  ():Promise<void>
}
