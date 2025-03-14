import Emoji from "./Emoji.jsx";

function CaixaLegal({ label, cor }) {

    let nome = "Margotputa"
   
    return(
        <>
            <span className = {"badge text-bg-"+cor+" mx-1"}>
                {label} kkk <Emoji /> {nome}
            </span>
        </>

    )
}

export default CaixaLegal