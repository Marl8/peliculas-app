import { ImSpinner6 } from "react-icons/im";
import "./Spinners.css"

export const Spinners = ()=>{
    return (
    <div className="spinner">
        <h4 className="me-2">Cargando</h4>
        <ImSpinner6 className='spinning' size={30}/>
    </div>
    )
}
