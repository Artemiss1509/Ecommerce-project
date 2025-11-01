import { Routes, Route } from 'react-router'
import { HomePage } from './Pages/HomePage.jsx'
import { CheckoutPage } from './Pages/CheckoutPage.jsx'
import { OrdersPage } from './Pages/OrdersPage.jsx'
import { TrackingPage } from './Pages/TrackingPage.jsx' 
import { NoPage } from './Pages/NoPage.jsx'


import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/orders' element={<OrdersPage />} />
        <Route path='/tracking' element={<TrackingPage />} />
        <Route path='*' element={<NoPage />} />
      </Routes>

    </>
  )
}

export default App
