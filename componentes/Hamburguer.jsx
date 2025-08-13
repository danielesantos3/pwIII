import Moqueca from '../componentes/Moqueca'
const url3 = "https://bodedono.com.br/wp-content/uploads/2024/11/moqueca.jpg"
function Hamburguer () {
    return(
        <div>
            <h1>Moqueca</h1>
            <img src={url3} alt="Moqueca"/>
            <Moqueca/>
        </div>
        
    )
}
export default Hamburguer