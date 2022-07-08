import { ProductCategory } from '../product';

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

export const earphonesPageData: ProductCategory[] = [
  {
    id: 1,
    img: {
      mobile:
        '/assets/product-yx1-earphones/mobile/image-category-page-preview.jpg',
      tablet:
        '/assets/product-yx1-earphones/tablet/image-category-page-preview.jpg',
      desktop:
        '/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg',
    },
    isNew: true,
    title: 'YX1 WIRELESS EARPHONES',
    text: 'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
    url: '/products/yx1-earphones',
  },
];

export const headphonesPageData: ProductCategory[] = [
  {
    id: 1,
    img: {
      mobile:
        '/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg',
      tablet:
        '/assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg',
      desktop:
        '/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg',
    },
    isNew: true,
    title: 'XX99 Mark II  Headphones',
    text: 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
    url: '/products/xx99-mark-two-headphones',
  },
  {
    id: 2,
    img: {
      mobile:
        '/assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg',
      tablet:
        '/assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg',
      desktop:
        '/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg',
    },
    isNew: false,
    title: 'XX99 Mark I Headphones',
    text: 'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
    url: '/products/xx99-mark-one-headphones',
  },
  {
    id: 3,
    img: {
      mobile:
        '/assets/product-xx59-headphones/mobile/image-category-page-preview.jpg',
      tablet:
        '/assets/product-xx59-headphones/tablet/image-category-page-preview.jpg',
      desktop:
        '/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg',
    },
    isNew: false,
    title: 'XX59 Headphones',
    text: 'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
    url: '/products/xx59-headphones',
  },
];

export const speakersPageData: ProductCategory[] = [
  {
    id: 1,
    img: {
      mobile:
        '/assets/product-zx9-speaker/mobile/image-category-page-preview.jpg',
      tablet:
        '/assets/product-zx9-speaker/tablet/image-category-page-preview.jpg',
      desktop:
        '/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg',
    },
    isNew: true,
    title: 'ZX9 speaker',
    text: 'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
    url: '/products/zx9-speaker',
  },
  {
    id: 2,
    img: {
      mobile:
        '/assets/product-zx7-speaker/mobile/image-category-page-preview.jpg',
      tablet:
        '/assets/product-zx7-speaker/tablet/image-category-page-preview.jpg',
      desktop:
        '/assets/product-zx7-speaker/dekstop/image-category-page-preview.jpg',
    },
    isNew: false,
    title: 'ZX7 speaker',
    text: 'Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
    url: '/products/zx7-speaker',
  },
];
