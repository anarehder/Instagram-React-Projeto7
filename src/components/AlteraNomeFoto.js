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
            <img src={fotoUsuario} alt="imagem de perfil" onClick={alteraFoto} data-test="profile-image"/>
            <div className="texto">
              <span>
                <strong data-test="name">{nomeUsuario}</strong>
                <ion-icon name="pencil" onClick={alteraNome} data-test="edit-name"></ion-icon>
              </span>
            </div>
          </div>
      )
}