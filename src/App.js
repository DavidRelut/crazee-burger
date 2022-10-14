import LoginPage from './components/pages/login/LoginPage';
import { Routes, Route } from 'react-router-dom';
import OrderPage from './components/pages/order/OrderPage';
import ErrorPage from './components/pages/order/ErrorPage';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element=  {<LoginPage />} />
        <Route path='/order/:name' element={<OrderPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App;
