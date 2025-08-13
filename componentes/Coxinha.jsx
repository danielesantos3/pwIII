import Caldoverde from '../componentes/Caldoverde'
import Feijaotropeiro from './Feijaotropeiro'
const url4 = "https://s2-receitas.glbimg.com/d51cHB7NuxyXBrEkCpp1aKrQixc=/0x0:1366x768/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2024/b/9/le3LrdQTu4r3xZvInLAA/caldo-verde-receita.jpg"
function Coxinha () {
    return(
        <div>
            <h1>Caldo Verde</h1>
            <img src={url4} alt="Caldoverde"/>
            <Feijaotropeiro/>
        </div>
        
    )
}
export default Coxinha