export interface IProducts {
  id: number;
  price: number;
  rating: number;
  title: string;
}

export type Filter = Pick<IProducts, "price" | "rating" | "title">;
