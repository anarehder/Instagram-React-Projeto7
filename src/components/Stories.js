import StoriePorUsuario from "./StoriePorUsuario";

export default function Stories() {
  const dadosStories = [
    { imagemUsr: "assets/img/lulufofinha.jpeg", nomeUsr:"lulufofinha" },
    { imagemUsr: "assets/img/escoladacrianca.jpg", nomeUsr:"escoladacrianca" },
    { imagemUsr: "assets/img/bebe_tinta.jpg", nomeUsr:"bebedivertido" },
    { imagemUsr: "assets/img/bebe_tinta_2.jpg", nomeUsr:"criancaquebrinca" },
    { imagemUsr: "assets/img/natacao.jpg", nomeUsr:"natacaoinfantil" },
    { imagemUsr: "assets/img/montessori.png", nomeUsr:"montessoribebes" },
    { imagemUsr: "assets/img/banho.jpg", nomeUsr:"horadobanho" },
    { imagemUsr: "assets/img/parque.jpg", nomeUsr:"parquinholegal" }
  ];

  return ( 
    <div className="stories">
      {dadosStories.map((stories) => <StoriePorUsuario key={stories.nomeUsr} imagemUsr={stories.imagemUsr} nomeUsr={stories.nomeUsr}/>)}
      <div className="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}