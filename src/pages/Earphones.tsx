import MainCenter from '../components/shared/MainCenter';
import Categories from '../components/shared/Categories';
import About from '../components/shared/About';
import ProductCategoryInfos from '../components/shared/ProductCategoryInfos';
import ProductCategoryHeader from '../components/shared/ProductCategoryHeader';

import { earphonesPageData } from '../utils/data';

export default function Earphones() {
  return (
    <>
      <ProductCategoryHeader title='earphones' />
      <MainCenter>
        <>
          <ProductCategoryInfos products={earphonesPageData} />
          <Categories />
          <About />
        </>
      </MainCenter>
    </>
  );
}
