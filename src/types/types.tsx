export interface Quote {
  id: number;
  text: string;
  author: {
    name: string;
    picture: string;
    title: string;
  };
  createdAt: string;
}
