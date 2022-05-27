import React,{ useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import es from 'date-fns/locale/es';
import { format } from 'date-fns'

registerLocale('es', es)
const Add = (props) => {
    const[title,setTitle]=useState('');
    const[link,setLink]=useState('');
    const[dateS,setDateS]=useState(undefined);
    //console.log("2112"+title,link,formatDate(dateS));
    const[errortitre,seteTitle]=useState('');
    const[errorlien,seteLink]=useState('');
    const[errordates,seteDateS]=useState('');
    const[values,setValue]=useState({titre:"",lien:"",dates:undefined});
    
    /*const handleChange=(event)=>{
setValue({...values,[event.target.name]:event.target})

    }*/
    const handleSubmit=(e)=>{ console.log("here");
      e.preventDefault();
      if(title==="")
      {
       seteTitle("required");
        }
      else
      {   seteTitle("");}


      if(link==="")
      {seteLink("required");console.log("here");}
      else
      {seteLink("");}

      console.log(formatDate(dateS));
      if(dateS===undefined)
      {seteDateS("required");console.log(formatDate(dateS));}
      else
      {seteDateS("");}


      if(title!==""&&link!==""&&dateS!==undefined)
      {props.AddMovie(title,link,formatDate(dateS));console.log("khlet");
      setTitle("");
      setLink("");
      setDateS(undefined);
      seteTitle("");
      seteLink("");
      seteDateS("");
     }
          }

    const formatDate = (dateString) => {
      const options = { year: "numeric", month: "long", day: "numeric" }
      return new Date(dateString).toLocaleDateString(undefined, options)
    }

    
  return (
    <div>  
    
    <form className='addcard'>
    <br></br>
        <input
          type="text" placeholder="Movie Title" value={title} onChange= {(e)=> { setTitle(e.target.value)}}
        />
       
      <label>{errortitre}</label>
      <br></br> <br></br>
       
        <input
          type="text" placeholder="Poster URL" value={link} onChange= {(e)=> { setLink(e.target.value)}}
        />
       
      <label>{errorlien}</label>
      <br></br><br></br>
      <DatePicker value={dateS} selected={dateS}onChange={(date) =>  setDateS(date)}  dateFormat='dd/MM/yyyy'  inline/>
      <label>{errordates}</label>
      <br></br><br></br>
      <button type = 'submit' onClick={handleSubmit}>Add Task </button>
      </form>
    
    
    
    
    
    
    
    
    
    
    
    
    
    </div>
  )
}

export default Add