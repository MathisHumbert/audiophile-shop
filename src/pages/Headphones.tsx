import MainCenter from '../components/shared/MainCenter';
import Categories from '../components/shared/Categories';
import About from '../components/shared/About';
import ProductCategoryInfos from '../components/shared/ProductCategoryInfos';
import ProductCategoryHeader from '../components/shared/ProductCategoryHeader';

import { headphonesPageData } from '../utils/data';

export default function Headphones() {
  return (
    <>
      <ProductCategoryHeader title='headphones' />
      <MainCenter>
        <>
          <ProductCategoryInfos products={headphonesPageData} />
          <Categories />
          <About />
        </>
      </MainCenter>
    </>
  );
}
