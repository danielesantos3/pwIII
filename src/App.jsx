import './App.css'
import HelloWorld from '../componentes/HelloWorld'
import Bolinhodearroz from '../components/Bolinhodearroz'
import Bolosalgado from '../components/Bolosalgado'
import Caldoverde from '../components/Caldoverde'
import Feijaotropeiro from '../components/Feijaotropeiro'
import Hamburguer from '../components/Hamburguer'
import Moqueca from '../components/Moqueca'

function App() {

  const name = 'Comidas'
  const url = "https://static.itdg.com.br/images/640-440/49dc1a832774c48f9935c335508861c4/320105-original.jpg"
  const url1 = "https://static01.nyt.com/images/2023/05/25/multimedia/SS-Smashburger-update-vzhf/SS-Smashburger-update-vzhf-jumbo.jpg"
  const url2 = "https://www.comidaereceitas.com.br/wp-content/uploads/2019/10/Feijao-tropeiro-tradicional-freepix-780x520.jpg"
  const url3 = "https://bodedono.com.br/wp-content/uploads/2024/11/moqueca.jpg"
  const url4 = "https://s2-receitas.glbimg.com/d51cHB7NuxyXBrEkCpp1aKrQixc=/0x0:1366x768/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2024/b/9/le3LrdQTu4r3xZvInLAA/caldo-verde-receita.jpg"
  const url5 = "https://static.tvgazeta.com.br/uploads/2024/09/Pratico-e-saboroso-bolo-salgado.webp"
  const url7 = "https://salgadosparavender.com.br/wp-content/uploads/2024/05/coxinha-para-vender.jpg"

  return (
    <div className="App">
      <h1>{name}</h1>
      <img src={url} alt='Bolinhodearroz'/>
      <img src={url1} alt='Hamburguer'/>
      <img src={url2} alt='Feijaotropeiro'/>
      <img src={url3} alt='Moqueca'/>
      <img src={url4} alt='Caldoverde'/>
      <img src={url5} alt='Bolosalgado'/>
      <img src={url7} alt='Coxinha'/>

    </div>
  )
}

export default App