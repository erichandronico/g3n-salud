import { BrowserRouter } from 'react-router-dom';
// import { MainLayout } from './layouts/MainLayout/MainLayout.tsx';
import { AppRoutes } from './routes/index.tsx';

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App;