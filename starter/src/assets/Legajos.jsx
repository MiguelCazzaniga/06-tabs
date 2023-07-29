import Duties from "./Duties"


const Legajos = ({trabajos,botonActivo}) => {
    const leg = (trabajos.filter((item) => item.id ===botonActivo))
    console.log("leg: ",leg[0])
    return (
    <div>
        {leg.map((item)=>{
            return(
                <div key={item.id} className="legajo">
                    <h3 className="item_title">{item.title}</h3>
                    <p className="btn">{item.company}</p>
                    <p>{item.dates}</p>
                
                   <Duties duties={item.duties}></Duties>
                    

                </div>
            )
        })}
      

      
    </div>
  )
}
export default Legajos