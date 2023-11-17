import TeamSection from './pages/TeamPage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TopNavBar from './TopNavBar.jsx'
import Homepage from './pages/Homepage.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TopNavBar/>}>
          <Route index element={<Homepage />}/>
          <Route path='Team' element={<TeamSection />}>
            <Route path='test/*' element={<TeamSection />}/>
          </Route>
          <Route path='*' element={<ErrorPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
