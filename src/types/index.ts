export interface ICar {
  id: string;
  image: string;
  name: string;
  model: string;
  variant: string;
  price: number;
  isNew: boolean;
  iklanId?: string;
}

export interface IIklan {
  id: string;
  image: string;
  name: string;
  content: string;
  discount: number;
}

export interface IBlog {
  id: string;
  title: string;
  desc: string;
  content: string;
  image: string;
}
