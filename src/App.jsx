
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserRoutes from './routes/UserRoutes'
// import DoctorRoutes from './routes/DoctorRoutes'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<UserRoutes />} />
        {/* <Route path='/doctor/*' element={<DoctorRoutes />} /> */}

      </Routes>
    </BrowserRouter>
  )
}

export default App
