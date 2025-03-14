function Emoji() {

    let emojis = ['🚷', '👨🏻‍❤️‍👨🏻', '👨🏽‍🦽‍➡️', '👨🏼‍🌾']
    let idx = parseInt(Math.random()*4)

    function fazAlgo(){
        console.log("vaitomanocu" +emojis[idx])
    }

    return(
        <>
            <span onClick={fazAlgo}>🖕🏻🖕🏻🖕🏻🖕🏻{emojis[idx]} </span>
        
        </>
    )
}

export default Emoji