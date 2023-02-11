import { useState } from "react";

export default function PostUnico(props){
    
    const [salvarPost, setSalvarPost] = useState("bookmark-outline");
    const [corCoracao, setCorCoracao] = useState("null");
    const [postCurtido, setPostCurtido] = useState("heart-outline");
    const [quantCurtidas, setQuantCurtidas]= useState(props.qntdCurtidas);

    function salvar() {
        setSalvarPost(salvarPost === "bookmark-outline" ? "bookmark" : "bookmark-outline");
    }

    let totalCurtidas = Number(props.qntdCurtidas.replace(".",""));

    function curtir() {
        setPostCurtido(postCurtido === "heart-outline" ? "heart" : "heart-outline");
        if(postCurtido === "heart-outline"){
            setCorCoracao("curtido");
            totalCurtidas = Number(quantCurtidas.replace(".","")) + 1;
            setQuantCurtidas(totalCurtidas.toLocaleString('pt-BR'));
            
        }
        else{
            setCorCoracao("null");
            totalCurtidas = Number(quantCurtidas.replace(".","")) - 1;
            setQuantCurtidas(totalCurtidas.toLocaleString('pt-BR'));
        }  
    }

    function curtirImg(){
        if(postCurtido === "heart-outline"){
            setPostCurtido("heart");
            setCorCoracao("curtido");
            totalCurtidas = Number(quantCurtidas.replace(".","")) + 1;
            setQuantCurtidas(totalCurtidas.toLocaleString('pt-BR'));
        }
    }
   
    return (
        <div className="post">
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
        <img src={props.imgPost} alt={props.altPost} onClick={curtirImg}/>
        </div>

        <div className="fundo">
        <div className="acoes">
            <div>
            <ion-icon class={corCoracao} onClick={curtir} data-test="like-post" name={postCurtido}></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
        <div>
            <ion-icon onClick={salvar} name={salvarPost}></ion-icon>
        </div>
        </div>

        <div className="curtidas">
        <img src={props.imgCurtida} alt={props.nomePrimeiraCurtida}/>
            <div className="texto">
            Curtido por <strong>{props.nomePrimeiraCurtida}</strong> e <strong>outras {quantCurtidas} pessoas</strong>
            </div>
        </div>
        </div>
    </div>
  );
}