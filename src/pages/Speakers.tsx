import MainCenter from '../components/shared/MainCenter';
import Categories from '../components/shared/Categories';
import About from '../components/shared/About';
import ProductCategoryInfos from '../components/shared/ProductCategoryInfos';
import ProductCategoryHeader from '../components/shared/ProductCategoryHeader';

import { speakersPageData } from '../utils/data';

export default function Speakers() {
  return (
    <>
      <ProductCategoryHeader title='speakers' />
      <MainCenter>
        <>
          <ProductCategoryInfos products={speakersPageData} />
          <Categories />
          <About />
        </>
      </MainCenter>
    </>
  );
}
