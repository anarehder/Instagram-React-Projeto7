import { useState } from "react";

export default function PostUnico(props){
    const coracaoCurtido = "heart";
    const coracaoVazio = "heart-outline";
    const tagSalvo = "bookmark";
    const tagVazio = "bookmark-outline";
    const [salvarPost, setSalvarPost] = useState(tagVazio);
    const [corCoracao, setCorCoracao] = useState("null");
    const [postCurtido, setPostCurtido] = useState(coracaoVazio);
    const [quantCurtidas, setQuantCurtidas]= useState(props.qntdCurtidas);

    function salvar() {
        setSalvarPost(salvarPost === tagVazio ? tagSalvo : tagVazio);
    }

    let totalCurtidas = Number(props.qntdCurtidas.replace(".",""));

    function curtir() {
        setPostCurtido(postCurtido === coracaoVazio ? coracaoCurtido : coracaoVazio);
        if(postCurtido === coracaoVazio){
            setCorCoracao("curtido");
            totalCurtidas = Number(quantCurtidas.replace(".","")) + 1;
            setQuantCurtidas(totalCurtidas.toLocaleString('pt-BR'));
        } else{
            setCorCoracao("null");
            totalCurtidas = Number(quantCurtidas.replace(".","")) - 1;
            setQuantCurtidas(totalCurtidas.toLocaleString('pt-BR'));
        }
    }

    function curtirImg(){
        if(postCurtido === coracaoVazio){
            setPostCurtido(coracaoCurtido);
            setCorCoracao("curtido");
            totalCurtidas = Number(quantCurtidas.replace(".","")) + 1;
            setQuantCurtidas(totalCurtidas.toLocaleString('pt-BR'));
        }
    }

    return (
        <div className="post" data-test="post">
        <div className="topo">
        <div className="usuario">
            <img src={props.imagemUsr} alt={props.nomeUsr}/>
            {props.nomeUsr}
        </div>
        <div className="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
        </div>

        <div className="conteudo">
        <img src={props.imgPost} alt={props.altPost} onClick={curtirImg} data-test="post-image"/>
        </div>

        <div className="fundo">
        <div className="acoes">
            <div>
            <ion-icon class={corCoracao} onClick={curtir} data-test="like-post" name={postCurtido}></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
        <div>
            <ion-icon onClick={salvar} name={salvarPost} data-test="save-post"></ion-icon>
        </div>
        </div>

        <div className="curtidas">
        <img src={props.imgCurtida} alt={props.nomePrimeiraCurtida}/>
            <div className="texto">
            Curtido por <strong>{props.nomePrimeiraCurtida}</strong> e <strong data-test="likes-number">outras {quantCurtidas} pessoas</strong>
            </div>
        </div>
        </div>
    </div>
  );
}