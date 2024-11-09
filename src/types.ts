export interface GroceryItem {
  id: number;
  name: string;
  price: number;
  producer: string;
  isAvailable: boolean;
  rating: number;
}

export interface BasketItem extends GroceryItem {
  quantity: number;
}
