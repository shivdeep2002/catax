
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './pages/Header'
import Footer from './pages/Footer'
function App() {
  

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
