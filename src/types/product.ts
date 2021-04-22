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
  product: Product
}
