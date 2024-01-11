import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FetchFact from './components/FetchFact'
import Header from './Pages/Header'
import WriteFact from './components/WriteFact';
import WriteDetail from './components/WriteDetail';
function App() {

  return (
    <>
    <Router>
    <Header/>
      <Routes>
        <Route path='/randomfact' element={<FetchFact/>}/>
        <Route path='/writefact' element={<WriteFact/>}/>
        <Route path='/yourfact/:id' element={<WriteDetail/>} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
