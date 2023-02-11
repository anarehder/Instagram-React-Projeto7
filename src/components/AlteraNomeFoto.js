import { useState } from "react";

export default function AlteraNomeFoto (props) {
    // inicializando com o nome de usuario e fotos iniciais
      const [nomeUsuario, setNomeUsuario] = useState(props.nomeUsuario);
      const [fotoUsuario, setFotoUsuario] = useState(props.fotoUsuario);
  
      function alteraNome(){
          const novoNomeUsuario = prompt("Digite seu nome de usuário:");
          const comprimentoNome = novoNomeUsuario.trim().length;
          setNomeUsuario(comprimentoNome === 0 ? nomeUsuario : novoNomeUsuario);
      }
    
      function alteraFoto(){
          const novaFotoUsuario = prompt("Insira o link da nova foto de perfil");
          const comprimentoFoto = novaFotoUsuario.trim().length;
          setFotoUsuario(comprimentoFoto === 0 ? fotoUsuario : novaFotoUsuario);
          // setFoto(!novaFotoUsuario ? foto : novaFotoUsuario);
      }
  
      return (
          <div className="usuario">
            <img src={fotoUsuario} alt="imagem de perfil" onClick={alteraFoto}/>
            <div className="texto">
              <span>
                <strong>{nomeUsuario}</strong>
                <ion-icon name="pencil" onClick={alteraNome} ></ion-icon>
              </span>
            </div>
          </div>
      )
}