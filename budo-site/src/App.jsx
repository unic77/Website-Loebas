import TeamSection from './TeamSection.jsx'
import ErrorPage from './ErrorPage.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TopNavBar from './TopNavBar.jsx'
import Hero from './Hero.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TopNavBar/>}>
          <Route index element={<Hero />}/>
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
