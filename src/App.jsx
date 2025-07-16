import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PlatformPage from './pages/PlatformPage';
import FleetPage from './pages/FleetPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import { Global, css } from '@emotion/react';

function App() {
  return (
    <>
      <Global
        styles={css`
          html, body {
            overflow-x: hidden;
            width: 100%;
            -webkit-overflow-scrolling: touch;
            margin: 0;
            padding: 0;
          }
        `}
      />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="platform" element={<PlatformPage />} />
          <Route path="fleet" element={<FleetPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;