import AlteraNomeFoto from "./AlteraNomeFoto";

export default function Usuario(props) {
  const nomeUsuarioInicial = "davi.rehder";
  const fotoUsuarioInicial = "assets/img/davi.jpg";

  return (
    <AlteraNomeFoto key={nomeUsuarioInicial} nomeUsuario = {nomeUsuarioInicial} fotoUsuario = {fotoUsuarioInicial}/>
  );
}