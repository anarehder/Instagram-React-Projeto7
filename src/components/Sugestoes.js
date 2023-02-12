import SugestaoPorUsuario from "./SugestaoPorUsuario";

export default function Sugestoes() {
  const razoes = ["Novo no Instagram","Segue você"];
  const dadosSugestoes = [
    { imagemUsr: "assets/img/brincadeira1.jpg", nomeUsr:"brincadeirasdivertidas", razao:razoes[0] },
    { imagemUsr: "assets/img/criancabanho.jpg", nomeUsr:"banholegal", razao:razoes[1] },
    { imagemUsr: "assets/img/montessori1.jpg", nomeUsr:"montessorikids", razao:razoes[1]  },
    { imagemUsr: "assets/img/fazenda.jpg", nomeUsr:"fazendaparaiso", razao:razoes[0] },
    { imagemUsr: "assets/img/esporte.jpg", nomeUsr:"horadoesporte", razao:razoes[1] }
  ];

    return (
        <div className="sugestoes">
          <div className="titulo">
            Sugestões para você;
            <div>Ver tudo</div>
          </div>
          {dadosSugestoes.map((sugest) => <SugestaoPorUsuario key={sugest.nomeUsr} imagemUsr={sugest.imagemUsr} nomeUsr={sugest.nomeUsr} razao={sugest.razao}/>)}
        </div>
    );
}