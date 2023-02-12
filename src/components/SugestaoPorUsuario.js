export default function SugestaoPorUsuario(props){
    return(
        <div className="sugestao">
            <div className="usuario">
                <img src={props.imagemUsr} alt={props.nomeUsr}/>
                <div className="texto">
                    <div className="nome">{props.nomeUsr}</div>
                    <div className="razao">{props.razao}</div>
                </div>
            </div>
            <div className="seguir">Seguir</div>
        </div>
    );
}
