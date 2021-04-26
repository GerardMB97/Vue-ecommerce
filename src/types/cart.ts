import { Product } from "./product";

export interface CartProduct  {
  category: string,
  description: string,
  id: number,
  image: string,
  price: number,
  title: string,
  quantity: number,
  totalPrice: number,
}

export interface CartState {
  products: CartProduct[],
}

export interface ADD_PRODUCT {
  ({products, product, quantity}:{products:CartProduct[], product:Product, quantity:number}):void
}

export interface deleteProduct {
  (cartItem:CartProduct):void
}


