export default function StoriePorUsuario(props){
    return(
        <div className="story">
            <div className="imagem">
                <img src={props.imagemUsr} alt={props.nomeUsr}/>
            </div>
            <div className="usuario">
                {props.nomeUsr}
            </div>
        </div>
    )
}
