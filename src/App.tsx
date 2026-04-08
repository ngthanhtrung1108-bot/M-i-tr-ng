import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Causes from './pages/Causes';
import Solutions from './pages/Solutions';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="thuc-trang" element={<Causes />} />
          <Route path="giai-phap" element={<Solutions />} />
          <Route path="lien-he" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
