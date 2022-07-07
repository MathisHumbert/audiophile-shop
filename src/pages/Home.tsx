import React from 'react';

import Hero from '../components/home/Hero';
import MainCenter from '../components/shared/MainCenter';
import Categories from '../components/shared/Categories';
import ProductsInfoContainer from '../components/home/ProductsInfoContainer';
import About from '../components/shared/About';

export default function Home() {
  return (
    <div>
      <Hero />
      <MainCenter>
        <>
          <Categories onClick={() => {}} />
          <ProductsInfoContainer />
          <About />
        </>
      </MainCenter>
    </div>
  );
}
