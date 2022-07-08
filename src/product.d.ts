export interface ProductTypes {
  id: number;
  slug: string;
  name: string;
  shortName: string;
  image: ProductImage;
  category: string;
  categoryImage: ProductImage;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: ProductIncludes[];
  gallery: ProductGallery;
  others: ProductOthers[];
}

interface ProductImage {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface ProductIncludes {
  quantity: number;
  item: string;
}

export interface ProductGallery {
  first: ProductImage;
  second: ProductImage;
  third: ProductImage;
}

export interface ProductOthers {
  slug: string;
  name: string;
  image: ProductImage;
}

export interface ProductCategory {
  id: number;
  img: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  isNew: boolean;
  title: string;
  text: string;
  url: string;
}
