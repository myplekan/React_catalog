import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Footer } from './components/Footer/Footer.tsx';
import { Header } from './components/Header/Header.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { PhonesPage } from './pages/PhonesPage.tsx';
import { ProductDetailsPage } from './pages/ProductDetailsPage.tsx';
import { FavouritesPage } from './pages/FavouritesPage.tsx';
import { CartPage } from './pages/CartPage.tsx';
import { TabletsPage } from './pages/TabletsPage.tsx';
import { AccessoriesPage } from './pages/AccessoriesPage.tsx';
import { PhoneNotFoundPage } from './pages/PhoneNotFoundPage.tsx';
import { NotFoundPage } from './pages/NotFoundPage.tsx';

const App = () => (
  <div className="App">
    <Header />

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/phones">
        <Route index element={<PhonesPage />} />
        <Route path=":productId" element={<ProductDetailsPage />} />
        <Route path="not-found" element={<PhoneNotFoundPage />} />
      </Route>
      <Route path="/tablets" element={<TabletsPage />} />
      <Route path="/accessories" element={<AccessoriesPage />} />
      <Route path="/favourites" element={<FavouritesPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>

    <Footer />
  </div>
);

export default App;
