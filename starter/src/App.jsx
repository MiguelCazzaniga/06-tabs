import { useEffect, useState } from "react";
import Botones from "./assets/Botones";
import Legajos from "./assets/Legajos";


const url = 'https://course-api.com/react-tabs-project';


const App = () => {
  const [jobs, setJobs]=useState([])
  const [trabajos,setTrabajos]=useState([])
  const [botonActivo,setBotonActivo]=useState("")

 const fetchData=async()=>{
    const response=await fetch(url);
    const newData=await response.json()
    setJobs(newData)
    botones(newData)
   
 }

  useEffect(()=>{
    fetchData()
  },[])

  const botones=(itemBoton)=>{
    let botonJuego=[]
    itemBoton.forEach(item=>botonJuego
      .push(
        {active:false,
        id:item.id,
        title:item.title,
        company:item.company,
        dates:item.dates,
        duties:item.duties
      }))
    setTrabajos(botonJuego)
    setBotonActivo(botonJuego[0].id)
  }
  const cambiaBoton=(id)=>setBotonActivo(id)
  return (
    <main>
      <section className='hoja'>
        
          <Botones
            trabajos={trabajos}
            botonActivo={botonActivo}
            cambiaBoton={cambiaBoton}
           
          ></Botones>
       
        <div className='legajos'>
          <Legajos trabajos={trabajos} botonActivo={botonActivo}></Legajos>
        </div>
      </section>
    </main>
  ) 
    
};
export default App;
