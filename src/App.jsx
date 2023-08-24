// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Main , Route , Routes} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Error from './Components/Error'
import Skill from './Components/Skill'
import Projects from './Components/Projects'


function App() {

  return (
    <>
    <Main>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/About' element={<About />} />
          <Route exact path='/Contact' element={<Contact />} />
          <Route exact path='/Skill' element={<Skill  />  } />
          <Route exact path='/Projects' element={<Projects />} />
          <Route path='/*' element={<Error />}/>
        </Routes>
    </Main>
      
    </>
  )
}

export default App
