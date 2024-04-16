import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home.jsx';
import ExerciseDetail from './pages/ExerciseDetail.jsx';
import Footer from './components/footer.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-full  h-screen flex flex-col ">
      <div className='flex-1'>
      <Navbar />
       <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path="/exercise/:id" element={<ExerciseDetail />}/>
       </Routes>
       <Footer />
       </div>
      
    </ div>
  )
}

export default App;
