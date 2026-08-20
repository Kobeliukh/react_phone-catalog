import { Outlet } from 'react-router-dom';
import '@/App.scss';
import { Footer } from '@/modules/Footer';
import { Header } from '@/modules/Header';

export const App = () => (
  <div className="app">
    <Header />
    <Outlet />
    <Footer />
  </div>
);
