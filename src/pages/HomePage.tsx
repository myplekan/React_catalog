import React from 'react';

import { Banner } from '../components/Banner/Banner.tsx';
import { ProductsSlider } from '../components/ProductsSlider/ProductsSlider.tsx';

export const HomePage = () => {
  return (
    <main className="main">
      <Banner />

      <ProductsSlider />
    </main>
  );
};
