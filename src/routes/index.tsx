import { Route, Routes } from 'react-router-dom';
import { Pregingreso } from '../Preingreso/Preingreso';

// import Perfil from './Perfil';
// import Login from './Login';
// import NotFound from './NotFound';

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Pregingreso />} />
    {/* <Route path="/perfil" element={<Perfil />} />
    <Route path="/login" element={<Login />} /> */}
    {/* <Route path="*" element={<NotFound />} /> */}
  </Routes>
);