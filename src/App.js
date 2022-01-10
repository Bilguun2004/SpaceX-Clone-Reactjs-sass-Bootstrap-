import logo from './logo.svg';
import './App.css';
import Falcon9 from "./components/Falcon9"
import Home from './components/Home';
import { Controller, Scene } from 'react-scrollmagic';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='falcon-9' element={<Falcon9/>}/>
      </Routes>
    </BrowserRouter>
    // <Home/>
    // <Falcon9/>
  //   <div>
  //     <div className='box'>
  //       fghgfh
  //     </div>
  //   <Controller>
  //     <Scene style={{position:'relative'}} duration={6000} pin>
  //       <div className='stick'>Sticky Example</div>
  //     </Scene>
  //   </Controller>
  //   <div style={{heigth:'100vh'}}>
  //       fghgfh
  //     </div>
  // </div>
  );
}

export default App;
