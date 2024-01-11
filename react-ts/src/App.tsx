import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FetchFact from './components/FetchFact'
import Header from './Pages/Header'
import WriteFact from './components/WriteFact';
function App() {

  return (
    <>
    <Router>
    <Header/>
      <Routes>
        <Route path='/randomfact' element={<FetchFact/>}/>
        <Route path='/writefact' element={<WriteFact/>}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
