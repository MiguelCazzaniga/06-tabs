const Botones = ({trabajos,cambiaBoton}) => {
    console.log("trabajos",trabajos)
    
    return (
    <section className="botonera" >
   
      {trabajos.map(({active,id,company,dates,duties}) => {
        return <button 
        key={id}
        onClick={()=>cambiaBoton(id)}
        className="boton_nav"
        >{company} </button>
      })}
   
    
    </section>
  )
}
export default Botones