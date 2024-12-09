import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Escocia from './assets/components/Escocia'
import Home from './assets/components/Home'
import Rodape from './assets/components/Rodape'
import Header from './assets/components/Header'
import Aruba from './assets/components/Aruba'
import Grandcanyon from './assets/components/Grandcanyon'
import Muralha from './assets/components/Muralha'
function App() {

  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='Escocia' element={<Escocia/>} />
          <Route path='Aruba' element={<Aruba/>} />
          <Route path='Grandcanyon' element={<Grandcanyon/>} />
          <Route path='Muralha' element={<Muralha/>} />
        </Routes>
        <Rodape></Rodape>
      </Router>
    </>
  )
}

export default App
