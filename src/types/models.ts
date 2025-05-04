export interface Model {
  id: string;
  name: string;
  price: string;
  year: number;
  power: string;
  acceleration: string;
  description: string;
  model3D: string;
  image: string;
  specs: {
    [key: string]: string;
  };
}