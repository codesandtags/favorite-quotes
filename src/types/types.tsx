export interface Quote {
  id: string;
  text: string;
  author: {
    name: string;
    picture: string;
    title: string;
  };
  createdAt: string;
  categories: string[];
  likes: number;
  shared: number;
}
