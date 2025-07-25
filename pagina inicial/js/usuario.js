    // Trocar avatar
    const inputFoto = document.getElementById('input-foto');
    const avatar = document.getElementById('avatar');
    document.querySelector('.trocar-foto').addEventListener('click', () => inputFoto.click());
    inputFoto.addEventListener('change', e => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = ev => {
        avatar.src = ev.target.result;
        localStorage.setItem('perfilAvatar', ev.target.result);
      };
      reader.readAsDataURL(file);
    });

    const savedAvatar = localStorage.getItem('perfilAvatar');
    if (savedAvatar) avatar.src = savedAvatar;

    // Mostrar nome do usuário
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const nomeElemento = document.getElementById('user-nome');
    if (currentUser && currentUser.nome) {
      nomeElemento.textContent = currentUser.nome;
    }

    // Dados de compras (simulados)
    const minhasCompras = [
      {
        nome: "Mouse Gamer Razer Viper V3",
        preco: 299.99,
        imagem: "https://cdn.awsli.com.br/2653/2653291/produto/248955913/mouse-gamer-sem-fio-razer-viper-v3-hyperspeed-preto-rz01-04910100-r3u1-541f9580-0e3hto9mig.jpg",
        link: "/paginas-dos-produtos/páginas/mousegamer.html"
      },
      {
        nome: "RTX 5070",
        preco: 2499.99,
        imagem: "https://images4.kabum.com.br/produtos/fotos/714574/placa-de-video-rtx-5070-windforce-oc-sff-12g-gigabyte-nvidia-geforce-12gb-gddr7-192bits-dlss-ray-tracing-9vn5070wo-00-g10_1740569969_g.jpg",
        link: "/paginas-dos-produtos/páginas/rtx5070.html"
      },
      {
        nome: "Monitor Gamer 24''",
        preco: 539.99,
        imagem: "https://http2.mlstatic.com/D_NQ_NP_955530-MLA84534338900_052025-O.webp",
        link: "/paginas-dos-produtos/páginas/monitor24.html"
      }
    ];

    // Produtos cadastrados
    const produtosUsuario = JSON.parse(localStorage.getItem('produtosUsuario')) || [];

    function renderItems(lista, containerId) {
      const container = document.getElementById(containerId);
      container.innerHTML = '';

      if (lista.length === 0) {
        container.innerHTML = `<p style="color:#888;text-align:center;">Nenhum produto encontrado 😢</p>`;
        return;
      }

      lista.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card-item';
        card.innerHTML = `
          <img src="${item.imagem}" alt="${item.nome}">
          <p><strong>${item.nome}</strong></p>
          <p>Preço: R$ ${item.preco.toFixed(2).replace('.', ',')}</p>
          <a href="#">Ver Produto</a>
        `;
        container.appendChild(card);
      });
    }

    renderItems(minhasCompras, 'compras');
    renderItems(produtosUsuario, 'vendas');

    function logout() {
      localStorage.clear();
      window.location.href = "/pagina inicial/html/index.html";
    }