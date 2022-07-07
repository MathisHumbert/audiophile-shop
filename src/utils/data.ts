interface CategoriesTypes {
  id: number;
  img: string;
  title: string;
  url: string;
}

interface FooterLinksTypes {
  id: number;
  title: string;
  url: string;
}

export const categoriesData: CategoriesTypes[] = [
  {
    id: 1,
    img: '/assets/shared/desktop/image-category-thumbnail-headphones.png',
    title: 'headphones',
    url: '/headphones',
  },
  {
    id: 2,
    img: '/assets/shared/desktop/image-category-thumbnail-speakers.png',
    title: 'speakers',
    url: '/speakers',
  },
  {
    id: 3,
    img: '/assets/shared/desktop/image-category-thumbnail-earphones.png',
    title: 'earphones',
    url: '/earphones',
  },
];

export const footerLinksData: FooterLinksTypes[] = [
  {
    id: 1,
    title: 'home',
    url: '/',
  },
  {
    id: 2,
    title: 'headphones',
    url: '/headphones',
  },
  {
    id: 3,
    title: 'speakers',
    url: '/speakers',
  },
  {
    id: 4,
    title: 'earphones',
    url: '/earphones',
  },
];
