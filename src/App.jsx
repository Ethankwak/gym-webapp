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
    <div className="w-full h-full flex">
      <div className='flex-1'>
      <Navbar />
       <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path="/exercise/:id" element={<ExerciseDetail />}/>
       </Routes>
       <Footer />
       </div>
       <div className='w-1/2 min-w-max' >
       <img src='banner.jpg' alt='banner' className='
         sticky
         top-0
         h-3/4
         w-auto
         pr-8
         rounded-bl-100px
         ml-auto
        '

        />
       </div>
    </ div>
  )
}

export default App;
