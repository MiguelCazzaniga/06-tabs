import { v4 as uuidv4 } from "uuid"
import { FaAngleDoubleRight } from "react-icons/fa"

const Duties = ({ duties }) => {
  return duties.map((item) => {
    const id = uuidv4()
    return (
      <div key={id} className='duties'>
        <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
       
          <p className='job-description'>{item}</p>
       
      </div>
    )
  })
}
export default Duties
