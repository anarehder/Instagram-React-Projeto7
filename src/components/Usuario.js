import AlteraNomeFoto from "./AlteraNomeFoto";

export default function Usuario(props) {
  const nomeUsuarioInicial = "catanacomics";
  const fotoUsuarioInicial = "assets/img/catanacomics.svg";

  return (
    <AlteraNomeFoto key={nomeUsuarioInicial} nomeUsuario = {nomeUsuarioInicial} fotoUsuario = {fotoUsuarioInicial}/>
  );
}