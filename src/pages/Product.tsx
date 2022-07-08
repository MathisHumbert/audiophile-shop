import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ProductTypes } from '../product';
import ProductInfos from '../components/product/ProductInfos';
import ProductFeatures from '../components/product/ProductFeatures';
import ProductBox from '../components/product/ProductBox';
import ProductGallery from '../components/product/ProductGallery';
import OtherProducts from '../components/product/OtherProducts';
import Categories from '../components/shared/Categories';
import About from '../components/shared/About';
import MainCenter from '../components/shared/MainCenter';
import GoBack from '../components/shared/GoBack';

export default function Product() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [product, setProduct] = useState<ProductTypes | null>(null);
  const { product_id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch('/data.json');
      const data: ProductTypes[] = await res.json();
      let product_data = data.find((item) => item.slug === product_id);

      if (!!product_data) {
        setProduct(product_data);
      } else {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchProduct();
  }, [product_id]);

  if (isLoading || product === null) {
    return (
      <div className='loading-container'>
        <div className='loading'></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className='error-container'>
        <h1 className='error'>
          Something went wrong. <br /> Try again
        </h1>
      </div>
    );
  }

  return (
    <MainCenter>
      <>
        <GoBack />
        <ProductInfos {...product} />
        <div className='features-box'>
          <ProductFeatures features={product.features} />
          <ProductBox box={product.includes} />
        </div>
        <ProductGallery gallery={product.gallery} />
        <OtherProducts featured={product.others} />
        <Categories />
        <About />
      </>
    </MainCenter>
  );
}
