import Hamburguer from '../componentes/Hamburguer'
const url1 = "https://static01.nyt.com/images/2023/05/25/multimedia/SS-Smashburger-update-vzhf/SS-Smashburger-update-vzhf-jumbo.jpg"
function Feijaotropeiro () {
    return(
        <div>
            <h1>Hamburguer</h1>
            <img src={url1} alt="Hamburguer"/>
            <Hamburguer/>
        </div>
        
    )
}
export default Feijaotropeiro