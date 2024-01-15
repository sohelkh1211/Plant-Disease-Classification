import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Plant1 from './assets/Plant1-transformed.jpeg'
import Preloader from './components/Preloader'
import Provider from './components/Provider'
//------------------------------------------------------
import Test from './components/test'
//------------------------------------------------------

function App() {
  return (
    <BrowserRouter>
      <div className='relative z-0'>
        <Routes>
          <Route path='/' element={
          <Provider >
            <Preloader />
          </Provider>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App