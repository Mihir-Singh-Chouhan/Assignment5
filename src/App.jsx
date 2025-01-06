import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import PersonalDetail from './PersonalDetail'
import LandingPage from './pages/landingPage'

// const Header =() =>
//   {
//   const nav = useNavigate();
//   return (     
//         <header>
//         <button id = 'go-to' onClick={() => nav('/personal-details')}>Go To</button>
//         </header>
//   );
// }

function App() {

  return (
    <>
    <h1>This is a Multi-Step-form</h1>
    <Header/>
    <Routes>
      <Route path='/' element={<div>Landing page</div>} />
      <Route path='/landing-page' element={<LandingPage/>}/>
      <Route path='/personal-details' element={<PersonalDetail />} />
    </Routes>
    </>
  )
}

export default App
