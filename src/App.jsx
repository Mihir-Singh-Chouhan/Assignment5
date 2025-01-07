import { Routes, Route, useNavigate } from 'react-router-dom'
import PersonalDetail from './PersonalDetail'
import ProfessionalDetail from './ProfessionalDetail';
import './App.css'
import ReviewPage from './ReviewPage';


function App() {

  const nav = useNavigate();
      function gotoPage()
      {
        nav("personal-details");
      }  
  return (
    <>
    <h1>This is a Multi-Step-form</h1>
  
    <Routes>
      <Route path='/' element={<><div>Landing page</div>
        <button id='go-to' onClick={gotoPage}>Go</button></>
      } />
      <Route path='/personal-details' element={<PersonalDetail />} />
      <Route path='/professional-details' element={<ProfessionalDetail />}></Route>
      <Route path='/review-details' element={<ReviewPage/>}></Route>
    </Routes>
    </>
  )
}

export default App
