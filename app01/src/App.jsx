import CaixaLegal from './CaixaLegal.jsx'
import Emoji from './Emoji.jsx'

function App() {

console.log ("passei aqui")
  return (
    <>
      <h1 className = "alert alert-danger">
        NATAÇão <Emoji/>
      </h1>
      

      
      <CaixaLegal label="MERDA" cor="warning"/>
      <CaixaLegal label="aaa" cor="danger"/>
      <CaixaLegal/>
    </>
  )
}

export default App
