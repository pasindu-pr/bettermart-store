export interface Product {
  id: string;
  name: string;
  brand: string;
  description: string;
  category: string;
  image: string[];
  price: number;
  stockCount: number;
  reviews: string[];
  createdAt: string;
}

export interface CreateProduct {
  name: string;
  brand: string;
  category: string;
  image: string[];
  price: number;
  stockCount: number;
  description: string;
}
