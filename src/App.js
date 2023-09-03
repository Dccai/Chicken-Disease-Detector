import React from 'react';
import {BrowserRouter,Link,Route,Routes} from 'react-router-dom';
import './App.css';
import { ChickenDiseaseDetector } from './Pages/ChickenDiseaseDetector/ChickenDiseaseDetector';
import { Main } from './Pages/Main/Main';
import { About } from './Pages/About/About';
import { DiseaseDict } from './Pages/DiseaseDict/DiseaseDict';
function App() {
  function Navbar(){
    return(
      <div id="head">
        <div id='chickContainer'>
        <div id="chicken">
          <div id="chickHead">
            <div id="chickHair"></div>
          </div>
        <div id="chickBeak"></div>
        <div id="chickBody"></div>
        <div id="chickTail"></div>
        <div className="chickLeg One"></div>
        <div className="chickLeg Two"></div>
        </div> <h1 id="logoTitle">Chicken Saviour</h1></div>
        <Link className="link homeHead"to="/">Home</Link>
        <Link className="link"to="/About">About</Link>
      </div>
    )
  }
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/ChickenDiseaseDetector"element={<ChickenDiseaseDetector/>}/>
      <Route path="/"element={<Main/>}/>
      <Route path="/About"element={<About/>}/>
      <Route path="/DiseaseDict"element={<DiseaseDict/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
