// ==============================
// ===== DADOS DOS PRODUTOS =====
// ==============================
const dadosProdutos = {
  promocao: [
    { nome: "Boneca Mini Bell", precoAntigo: "R$ 90,00", precoAtual: "R$ 54,00", imagem: "https://images.tcdn.com.br/img/img_prod/1094375/boneca_bebe_reborn_luciana_912_1_2891b642b16cd2b68ba299b11582cc23.jpg" },
    { nome: "Jogo Minecraft", precoAntigo: "R$ 370,30", precoAtual: "R$ 223,18", imagem: "https://assets.nintendo.com/image/upload/q_auto/f_auto/store/software/switch/70070000012480/ef7962b9b677367bf56b471394433e5a0ed88cb909094f8d332a06667456605c" },
    { nome: "Uno Flip", precoAntigo: "R$ 90,90", precoAtual: "R$ 54,54", imagem: "https://m.magazineluiza.com.br/a-static/420x420/diversao-em-familia-para-criancas-mattel-uno-flip-jogo-de-tabuleiro-2025-cartas-de-jogo/aliexpress/202781085/12ba928cc8e4c0cdc8da25e5b0c17bfb.jpeg" },
    {
      nome: "Boneca Mini Alice",
      precoAntigo: "R$ 90,00",
      precoAtual: "R$ 54,00",
      imagem: "/boneca-alice.jpg",
    },
    { nome: "Jogo Roblox", precoAntigo: "R$ 370,30", precoAtual: "R$ 223,18", imagem: "/jogo-roblox.jpg" },
    { nome: "Uno Classic", precoAntigo: "R$ 90,90", precoAtual: "R$ 54,54", imagem: "/jogo-uno-classico.jpg" },
  ],
  brinquedos: [
    {
      nome: "Jogo Minecraft Edition",
      precoAntigo: "R$ 370,30",
      precoAtual: "R$ 223,18",
      imagem: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/store/software/switch/70010000000964/a28a81253e919298beab2295e39a56b7a5140ef15abdb56135655e5c221b2a3a",
    },
    {
      nome: "Jogo Minecraft Dungeons",
      precoAntigo: "R$ 370,30",
      precoAtual: "R$ 223,18",
      imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1672970/capsule_616x353.jpg?t=1717003107",
    },
    {
      nome: "Jogo Minecraft Story",
      precoAntigo: "R$ 370,30",
      precoAtual: "R$ 223,18",
      imagem: "https://store-images.s-microsoft.com/image/apps.58797.65337363835776187.57c3ca75-02a9-4c40-accd-8e06e0b41f4f.54f888e6-1399-46c9-87c7-ed38b236d5b6?q=90&w=480&h=270",
    },
    {
      nome: "Jogo Minecraft Legends",
      precoAntigo: "R$ 370,30",
      precoAtual: "R$ 223,18",
      imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1928870/capsule_616x353.jpg?t=1746133966",
    },
    {
      nome: "Jogo Minecraft Deluxe",
      precoAntigo: "R$ 370,30",
      precoAtual: "R$ 223,18",
      imagem: "https://image.api.playstation.com/vulcan/ap/rnd/202407/0401/165b1afdf14c26321af90746e4a42e23416bb74eafd34b0c.png",
    },
    {
      nome: "Jogo Minecraft Ultimate",
      precoAntigo: "R$ 370,30",
      precoAtual: "R$ 223,18",
      imagem: "https://assets.nintendo.com/image/upload/q_auto/f_auto/store/software/switch/70070000012480/ef7962b9b677367bf56b471394433e5a0ed88cb909094f8d332a06667456605c",
    },
  ],
  jogos: [
    { nome: "UNO Flip", precoAntigo: "R$ 274,40", precoAtual: "R$ 164,64", imagem: "https://m.magazineluiza.com.br/a-static/420x420/diversao-em-familia-para-criancas-mattel-uno-flip-jogo-de-tabuleiro-2025-cartas-de-jogo/aliexpress/202781085/12ba928cc8e4c0cdc8da25e5b0c17bfb.jpeg" },
    { nome: "UNO Classic", precoAntigo: "R$ 274,40", precoAtual: "R$ 164,64", imagem: "https://http2.mlstatic.com/D_NQ_NP_831739-MLA95934661257_102025-O.webp" },
    { nome: "UNO Extreme", precoAntigo: "R$ 274,40", precoAtual: "R$ 164,64", imagem: "https://m.media-amazon.com/images/I/715ZxTuidnL._AC_UF894,1000_QL80_.jpg" },
    {
      nome: "UNO Deluxe",
      precoAntigo: "R$ 274,40",
      precoAtual: "R$ 164,64",
      imagem: "https://m.media-amazon.com/images/I/715ZxTuidnL._AC_UF894,1000_QL80_.jpg",
    },
    {
      nome: "UNO Wild",
      precoAntigo: "R$ 274,40",
      precoAtual: "R$ 164,64",
      imagem: "https://m.media-amazon.com/images/I/61MgQDbLuyL._AC_UF894,1000_QL80_.jpg",
    },
    {
      nome: "UNO Spin",
      precoAntigo: "R$ 274,40",
      precoAtual: "R$ 164,64",
      imagem: "https://m.media-amazon.com/images/I/9152T5-A73L.jpg",
    },
  ],
  lancamentos: [
    {
      nome: "Max Turbo",
      precoAntigo: "R$ 126,80",
      precoAtual: "R$ 76,08",
      imagem: "https://mpbrinquedos.vteximg.com.br/arquivos/ids/159122-1000-1000/matcjn96a.jpg?v=635778464045500000",
    },
    {
      nome: "Max Turbo Voo",
      precoAntigo: "R$ 126,80",
      precoAtual: "R$ 76,08",
      imagem: "https://a-static.mlcdn.com.br/%7Bw%7Dx%7Bh%7D/ms-max-turbo-laminas-voo-mattel/ciatoy/3991/605999e16c39aaa5585ffcf6bd772713.jpeg",
    },
    {
      nome: "Max Turbo Soco Esmagador",
      precoAntigo: "R$ 126,80",
      precoAtual: "R$ 76,08",
      imagem: "https://static.wikia.nocookie.net/maxsteelbr/images/9/95/Gal_0001_bhf69-a_tcm429-177895.jpg/revision/latest?cb=20141002200128&path-prefix=pt-br",
    },
    {
      nome: "Max Turbo Camuflagem",
      precoAntigo: "R$ 126,80",
      precoAtual: "R$ 76,08",
      imagem: "https://static.wikia.nocookie.net/maxsteelbr/images/e/e4/Character_profileImage_stealth_tcm422-149619.png/revision/latest?cb=20140810022444&path-prefix=pt-br",
    },
    {
      nome: "Max Defensor Tóxico",
      precoAntigo: "R$ 126,80",
      precoAtual: "R$ 76,08",
      imagem: "https://mpbrinquedos.vteximg.com.br/arquivos/ids/174231-1000-1000/matdxl52a.jpg?v=636244836205000000",
    },
    {
      nome: "Ultra Blast Max Steel e Ultra Rocket Max Steel",
      precoAntigo: "R$ 126,80",
      precoAtual: "R$ 76,08",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh1BsL-ci55_WK2AyAtm0Qp0_IxDTFWuUsfw&s",
    },
  ],
}

// =======================================
// ===== CARREGAR PRODUTOS NA PÁGINA =====
// =======================================
function carregarProdutos(categoria) {
  const gradeProdutos = document.getElementById("gradeProdutos")
  if (!gradeProdutos) return

  const produtos = dadosProdutos[categoria] || []

  gradeProdutos.innerHTML = produtos
    .map(
      (produto) => `
        <div class="cartao-produto">
            <img src="${produto.imagem}" alt="${produto.nome}" class="imagem-produto">
            <h3 class="nome-produto">${produto.nome}</h3>
            ${produto.precoAntigo ? `<p class="preco-antigo">de ${produto.precoAntigo}</p>` : ""}
            <p class="preco-atual">por ${produto.precoAtual}</p>
            <button class="botao-comprar" onclick="adicionarAoCarrinho('${produto.nome}', '${produto.precoAtual}')">
                Comprar
            </button>
        </div>
    `,
    )
    .join("")
}

// ===============================
// ===== SISTEMA DE CARRINHO =====
// ===============================
let carrinho = []

function adicionarAoCarrinho(nome, preco) {
  carrinho.push({ nome, preco })
  localStorage.setItem("carrinho", JSON.stringify(carrinho))
  alert(`${nome} foi adicionado ao carrinho!`)
}

function carregarCarrinho() {
  const carrinhoSalvo = localStorage.getItem("carrinho")
  if (carrinhoSalvo) {
    carrinho = JSON.parse(carrinhoSalvo)
  }
}

// ===============================
// ===== FORMULÁRIO DE LOGIN =====
// ===============================
const formularioLogin = document.getElementById("formularioLogin")
if (formularioLogin) {
  formularioLogin.addEventListener("submit", (e) => {
    e.preventDefault()
    const usuario = document.getElementById("usuario").value
    const senha = document.getElementById("senha").value

    if (usuario && senha) {
      alert("Login realizado com sucesso!")
      window.location.href = "promocao.html"
    }
  })
}
// ==================================
// ===== FORMULÁRIO DE CADASTRO =====
// ==================================
const formularioCadastro = document.getElementById("formularioCadastro")
if (formularioCadastro) {
  formularioCadastro.addEventListener("submit", (e) => {
    e.preventDefault()
    const telefone = document.getElementById("telefone").value

    if (telefone) {
      alert("Cadastro iniciado! Verifique seu telefone.")
      window.location.href = "cadastro.html"
    }
  })
}
// ====================
// ===== PESQUISA =====
// ====================
const botoesCompraSocial = document.querySelectorAll(".botao-social")
botoesCompraSocial.forEach((botao) => {
  botao.addEventListener("click", () => {
    alert("Funcionalidade de login social em desenvolvimento!")
  })
})
// =========================
// ===== INICIALIZAÇÃO =====
// =========================
document.addEventListener("DOMContentLoaded", () => {
  carregarCarrinho()
  // ==============================================================
  // ==Adicionar evento de clique no logo para voltar à página inicial==
  // ===============================================================
  const logoHeader = document.querySelector("https://pt.quizur.com/_image?href=https://img.quizur.com/f/img63699dff9113f5.68181030.jpeg?lastEdited=1667866158&w=600&h=600&f=webp")
  if (logoHeader) {
    logoHeader.addEventListener("click", () => {
      window.location.href = "brinquedos.html"
    })
  }
})
