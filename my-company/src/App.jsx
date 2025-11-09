import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Services from './components/Services';

function App(){

    return(
      <>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/About' element={<About />} />
            <Route path='/Services' element={<Services />} />
          </Routes>
        </Router>
      </>
    )
}

export default App;