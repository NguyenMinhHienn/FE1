export default interface IProduct {
  id: string;
  name: string;
  price: number | null;
  image: string;
  category: string;
  status: boolean | null;
  description: string;
}

export interface ProductAdd {
  name: string;
  price: number | null;
  image: string;
  category: string;
  status: boolean | null;
  description: string;
}