import React,{useState} from 'react';
import { Navigate } from 'react-router-dom';
import {Parallax,ParallaxLayer} from"@react-spring/parallax";
import './Main.css';
export function Main(){
    //<div id="backgroundImage"></div>
    let [chickenDetect,goDetect]=useState(false);
    let [dict,goDict]=useState(false);
    if(chickenDetect){
        return <Navigate to="/ChickenDiseaseDetector" replace={true}/>;
    }
    if(dict){
        return <Navigate to="/DiseaseDict" replace={true}/>;
    }
    return(
        <div className="Main">
            <Parallax className="parallax" pages={2}>
            <ParallaxLayer offset={0} speed={0.5}id="backgroundImage"/>
            <ParallaxLayer id="bottom" speed={1.2}offset={0}factor={2} >
            <div id="invisible"><h1 id="mainTitle">Chicken Disease Detector</h1><h3 id="mainSubTitle">Easy To Use / Completely Free / Image Detection</h3></div>
            <div id="gridDisplay">
            <div className='grid explain'>
                <h1 id="explainh1">Empower Your Poultry Health And Farm Success</h1>
                <p className="explainp">We prioritize the health and well-being of your poultry. Our cutting edge poultry disease detection uses images of poultry feces to detect poultry diseases that would otherwise require labor-intensive, time-consuming lab testing. Discover how our technology can benefit your farm:</p>
                <h3 className='explainh3'>Boost Profitability</h3>
                <p className="explainp">Early detection prevents economic losses from disease outbreaks.</p>
                <h3 className='explainh3'>Sustainability Support</h3>
                <p className="explainp">Minimize waste and environmental impact by avoiding large-scale culling due to disease outbreaks.</p>
                <h3 className='explainh3'>Animal Welfare And Productivity</h3>
                <p className="explainp">Reduce suffering and ensure happier, more productive birds through early treatment.</p>
                <h3 className='explainh3'>Tailored Control Methods</h3>
                <p className="explainp">Swift indentification allows for customized interventions, saving resources.</p>
            </div>
            <div className='grid first'>
            <div className="textCover">
            <h1 id="detectorTitle">Chicken Disease Detector</h1>
            <button className="detectButton" onClick={()=>{goDetect(true)}}>Go Detect Disease</button>
            </div>
            </div>
            <div className='grid second'>
                <div className="textCover">
                <h1 id="diseaseDict">About The Poultry Diseases</h1>
                <button className="dictButton" onClick={()=>{goDict(true)}}>Learn More About The Detectable Diseases</button>
                </div>
                </div>
            </div></ParallaxLayer>
            </Parallax>
            </div>
    );
}