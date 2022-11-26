import LoginPage from './components/pages/Login/LoginPage';
import { Routes, Route } from 'react-router-dom';
import OrderPage from './components/pages/Order/OrderPage';
import ErrorPage from './components/pages/Error/ErrorPage';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/order/:name' element={<OrderPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App;
