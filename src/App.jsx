import { Routes, Route} from 'react-router-dom'
import { CartProvider } from './utils/useCart'
// 主頁面
import Home from '@/pages/Home'
import Shop from '@/pages/Shop'
import Cart from '@/pages/Cart'
// Shop 次頁面
import ClassA from '@/pages/Shop/ClassA'
import ClassB from '@/pages/Shop/ClassB'
import ClassC from '@/pages/Shop/ClassC'

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path='/' element={<Home />}/> 
        <Route path='/shop' element={<Shop />}>
          <Route index element={<ClassA />}/>
          <Route path='a' element={<ClassA />}/>
          <Route path='b' element={<ClassB />}/>
          <Route path='c' element={<ClassC />}/>   
        </Route>
        <Route path='/Cart' element={<Cart />}/> 
      </Routes>
    </CartProvider>
  )
}

export default App
