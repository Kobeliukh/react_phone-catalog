import { App } from '@/App';
import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes,
} from 'react-router-dom';
import { HomePage } from '@/modules/HomePage';
import { PhonesPage } from '@/modules/PhonesPage';
import { TabletsPage } from '@/modules/TabletsPage';
import { AccessoriesPage } from '@/modules/AccessoriesPage';
import { CartPage } from '@/modules/CartPage';
import { FavoritesPage } from '@/modules/FavoritesPage';
import { NotFoundPage } from '@/modules/NotFoundPage';
import { ProductsProvider } from './shared/contexts/ProductsContext';
import { FavoritesProvider } from './shared/contexts/FavoritesContext';

export const Root = () => (
  <Router>
    <ProductsProvider>
      <FavoritesProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="phones" element={<PhonesPage />} />
            <Route path="tablets" element={<TabletsPage />} />
            <Route path="accessories" element={<AccessoriesPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="favorites" element={<FavoritesPage />} />

            <Route path="home" element={<Navigate to={'/'} replace />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </FavoritesProvider>
    </ProductsProvider>
  </Router>
);
