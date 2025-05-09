import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Layout from './components/Layout/Layout'
import OneMovie from './pages/OneMovie/OneMovie'

function App() {


  return (
    <>
      <div className='app'>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/movie/:id' element={<OneMovie />} />
          </Route>
        </Routes>
      </div >
    </>
  )
}

export default App
