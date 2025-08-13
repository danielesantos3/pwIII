import Bolinhodearroz from '../componentes/Bolinhodearroz'
import Caldoverde from './Caldoverde'
const url = "https://static.itdg.com.br/images/640-440/49dc1a832774c48f9935c335508861c4/320105-original.jpg"
function Bolosalgado () {
    return(
        <div>
            <h1>Bolinho de Arroz</h1>
            <img src={url} alt="Bolinhodearroz"/>
            <Caldoverde/>
        </div>
        
    )
}
export default Bolosalgado 