import PostUnico from "./PostUnico";

export default function Posts() {

  const dadosPost = [
    { imagemUsr: "assets/img/davi.jpg", nomeUsr: "davi.rehder", imgPost: "assets/img/davi_feed.jpg", altPost: "davi", 
    imgCurtida: "assets/img/lulufofinha.jpeg", nomePrimeiraCurtida: "lulufofinha", qntdCurtidas: "16.622" },
    { imagemUsr: "assets/img/lulufofinha.jpeg", nomeUsr: "lulufofinha", imgPost: "assets/img/criancabrincando.jpg", altPost: "crianca-brincando", 
    imgCurtida: "assets/img/escoladacrianca.jpg", nomePrimeiraCurtida: "escoladacrianca", qntdCurtidas: "4.250" },
    { imagemUsr: "assets/img/bebe_tinta.jpg", nomeUsr: "bebedivertido", imgPost: "assets/img/bebe_tinta.jpg", altPost: "bebe-com-tinta", 
    imgCurtida: "assets/img/bebe_tinta_2.jpg", nomePrimeiraCurtida: "criancaquebrinca", qntdCurtidas: "7.957" }
  ];

  return (
    <div className="posts">
      {dadosPost.map((post) => <PostUnico key={post.nomeUsr} imagemUsr={post.imagemUsr} 
      nomeUsr={post.nomeUsr} imgPost = {post.imgPost} altPost = {post.altPost} 
      imgCurtida = {post.imgCurtida} nomePrimeiraCurtida = {post.nomePrimeiraCurtida} qntdCurtidas= {post.qntdCurtidas} />)}
    </div>
  );
}