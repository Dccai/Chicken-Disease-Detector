import React,{useState} from 'react';
import './ChickenDiseaseDetector.css';
export function ChickenDiseaseDetector(){
    const dictionary={
        0:"Coccidiosis",
        1:"Healthy",
     2:"New Castle Disease",
     3:"Salmonella"
    };
    let [file,setFiles]=useState([]);
    let [result,setResult]=useState('Add Images');
    let [images,setImages]=useState([]);
    let [error,setError]=useState(false);
    function showFiles(e){
        e.preventDefault();
        let srcs=[];
        for (let x of Object.keys(e.target.files)){
            srcs=[...srcs,e.target.files[x].name]
        }
        setFiles(srcs);
    }
    function handleSubmit(e){
        e.preventDefault();
        let resultArray=[];
        let imageArray=[];
        for (let x=0;x<e.currentTarget.images.files.length;x++){
            let reader =new FileReader();
            reader.readAsDataURL(e.currentTarget.images.files[x])
            reader.onload=async()=>{
                let objec={data:reader.result};
                await fetch('/chickendisease',{method:"POST",headers:{'Content-Type':'application/json'},body:JSON.stringify(objec)}).then(
                    response=>response.json()
                ).then(a=>{
                    resultArray=[...resultArray,dictionary[a.result]];
                    setResult(resultArray);
                    imageArray=[...imageArray,reader.result];
                    setImages(imageArray);
                }
                ).catch(e=>{
                    console.log(e)
                    setError(true)});
            }
        }
    }
    return (
        <div id="chickenDiseasePage">
            {error&&<div id='errorpopup'><div id="popup">Invalid Image File! Make Sure The Image File Is Not Corrupted And Is An Image! <br/> <button id="errorButton" onClick={()=>{setError(false)}}>Close</button>
            
            </div></div>}
            <form onSubmit={handleSubmit}>
                <div id="chickenDiseaseFormBox" onClick={()=>document.querySelector(".input-field").click()}>
                <input className="input-field" onChange={showFiles}type='file' name="images" accept='images/*'multiple hidden/>
                {file.map(a=>{
                return( <h3 className='filesShowName'>{a}</h3>);}
                )}
                </div>
                <button className='buttonSlide buttonSlideLeft' type="submit">Submit</button>
            </form>
            {images.length===0?<h1 className='resultsh1'>Add Images Of Poultry Fecal Matter</h1>:<h1 className='resultsh1'>{images.length>=2?'Results':'Result'}</h1>}
            {images.length===0?<div style={{width:'550px'}}className='resultsh1before'></div>:<div className='resultsh1before'></div>}
            <div id="resultsGridDisplay">
            {images.map((a,h)=><div key={h} className='resultsGrid'><img className='resultsImage' src={a}/><h3 className="resultsLabel">{result[h]}</h3></div>)}
            </div>
        </div>
    )
}