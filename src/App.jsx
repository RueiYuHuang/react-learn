import { Routes, Route} from 'react-router-dom'
import { CartProvider } from './context/CartContext'
// 主頁面
import Home from '@/pages/Home'
import Shop from '@/pages/Shop'
import Cart from '@/pages/Cart'
import Test from '@/pages/Test'
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
          <Route path='/cart' element={<Cart />}/> 
          <Route path='/test' element={<Test />}/> 
        </Routes>
      </CartProvider>
  )
}

export default App
