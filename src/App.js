import React,{useState} from 'react';
import Name from './Name'
import "./app.css"
export default function App(){
const [name,setName]=useState("");
const [country,setCountry]=useState("");
const [capital,setCapital]=useState("");
const [send,setSend]=useState(false);

  const Change=(e)=>{
  e.preventDefault();
setSend(true);
}
const Edit=()=>{
  setSend(false);
}

  const  renderName = () => {
     if (send) {
       return <div className="container ct2"><Name name={name} country={country} capital={capital} /><br/><button onClick={Edit}  className="btn btn-primary">EDIT</button></div>;
     } else{
       return(<React.Fragment>
       <div className="container ct">
       <form><div class="mb-3 row">
         <label className=" col-sm-2 col-form-label">Name</label>
         <div className="col-sm-10">
           <input type="text" name="name" className="form-control form-control-sm" value={name} onChange={(e)=>setName(e.target.value)} />
         </div>
       </div>
       <div class="mb-3 row">
       <label className=" col-sm-2 col-form-label" >Country</label>
         <div class="col-sm-10">
         <input type="text" name="country"  className="form-control form-control-sm" value={country} onChange={(e)=>{setCountry(e.target.value)}}/>
         </div>
       </div>
       <div class="mb-3 row">
         <label className=" col-sm-2 col-form-label">Capital</label>
         <div class="col-sm-10">
           <input type="text" name="capital" className="form-control form-control-sm"value={capital} onChange={(e)=>{setCapital(e.target.value)}} />
         </div>
       </div>
       
       
       <button onClick={Change} className="  btn btn-primary mar">SUBMIT</button>
     </form>
     </div>
    
    
   </React.Fragment>)
     }
   }
   return (
 
     
      renderName()

    
   )
     }

