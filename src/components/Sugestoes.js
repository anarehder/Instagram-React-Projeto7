import SugestaoPorUsuario from "./SugestaoPorUsuario";

export default function Sugestoes() {

  const dadosSugestoes = [
    { imagemUsr: "assets/img/brincadeira1.jpg", nomeUsr:"brincadeirasdivertidas", razao:"Novo no Instagram" },
    { imagemUsr: "assets/img/criancabanho.jpg", nomeUsr:"banholegal", razao:"Segue você" },
    { imagemUsr: "assets/img/montessori1.jpg", nomeUsr:"montessorikids", razao:"Segue você" },
    { imagemUsr: "assets/img/fazenda.jpg", nomeUsr:"fazendaparaiso", razao:"Novo no Instagram" },
    { imagemUsr: "assets/img/esporte.jpg", nomeUsr:"horadoesporte", razao:"Segue você" }
  ]

    return (
        <div className="sugestoes">
          <div className="titulo">
            Sugestões para você;
            <div>Ver tudo</div>
          </div>
          {dadosSugestoes.map((sugest) => <SugestaoPorUsuario key={sugest.nomeUsr} imagemUsr={sugest.imagemUsr} nomeUsr={sugest.nomeUsr} razao={sugest.razao}/>)}
        </div>
    )
}