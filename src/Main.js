import React from "react";
import "./index.css"
function Main({currData}){

    const price =(curr , e)=>{
        const priceb =document.querySelector(".prizebtn");
        e.target.innerHTML = "₹ "+curr;
    }
    return (
    <>
        <div className="main">
        {currData.map((currElem)=>{
           const {id , model , category , prize , imgs , spec} = currElem;
                return (

        <>
                <div className = "container" key = {id}>
                    <span className="idno"> {id} </span><br />
                     <div className="imgbtn">
                         <div><img src={imgs}   className="imgs" height={100}  width={100}/></div>
                          <div><button className="prizebtn" onClick = {(e)=>price(prize ,e)}>See Price </button></div>
                         </div>
                    <div>
                   <h1>{model}</h1>
                   <hr style={{color:"#f1f1f1"}}></hr>
                   <p className="featurespara">features :</p>
                   <div className="featurs">
                       <p> ram :- {spec.ram}, </p>
                       <p> rom :- {spec.rom},</p>
                       <p> front_camera :- {spec.front_camera}, </p>
                       <p> rear_camera :- {spec.rear_camera} </p>
                   </div>
               </div>
            </div> 
            
        </>
                )
        })
    }
    </div>
    </>

        )}

export default Main;