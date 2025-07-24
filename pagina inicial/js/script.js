 function showCartPreview() {
      const cart = JSON.parse(localStorage.getItem("cartList")) || [];
      const preview = document.getElementById("cart-preview");
      const total = document.getElementById("cart-preview-total");
      preview.innerHTML = "";
      let totalValor = 0;

      cart.slice(-3).forEach(item => {
        totalValor += item.preco;
        const li = document.createElement("li");
        li.style.marginBottom = "10px";
        li.innerHTML = `
          <img src="${item.imagem}" alt="${item.nome}" style="width:40px; vertical-align:middle; margin-right:10px;"> 
          <a href="${item.link}" style="color:#333; text-decoration:none;">${item.nome}</a>
        `;
        preview.appendChild(li);
      });

      total.textContent = "R$ " + totalValor.toFixed(2).replace('.', ',');
      document.getElementById("floating-cart").style.display = "block";
    }

    function atualizarContadorCarrinho() {
      const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
      const contador = document.getElementById('cart-count');
      if (contador) {
        contador.textContent = carrinho.length;
        contador.style.display = carrinho.length > 0 ? 'inline-block' : 'none';
      }
    }

    window.addEventListener('DOMContentLoaded', atualizarContadorCarrinho);

    




     function addToCart(produto) {
      let cartList = JSON.parse(localStorage.getItem("cartList")) || [];
      cartList.push(produto);
      localStorage.setItem("cartList", JSON.stringify(cartList));

      let cartCount = parseInt(localStorage.getItem("cartCount") || "0");
      cartCount++;
      localStorage.setItem("cartCount", cartCount);
      document.getElementById("cart-count").textContent = cartCount;

      showCartPreview();
    }

    function showCartPreview() {
      const cart = JSON.parse(localStorage.getItem("cartList")) || [];
      const preview = document.getElementById("cart-preview");
      const total = document.getElementById("cart-preview-total");
      preview.innerHTML = "";
      let totalValor = 0;

      cart.slice(-3).forEach(item => {
        totalValor += item.preco;
        const li = document.createElement("li");
        li.style.marginBottom = "10px";
        li.innerHTML = `
          <img src="${item.imagem}" alt="${item.nome}" style="width:40px; vertical-align:middle; margin-right:10px;"> 
          <a href="${item.link}" style="color:#333; text-decoration:none;">${item.nome}</a>
        `;
        preview.appendChild(li);
      });

      total.textContent = "R$ " + totalValor.toFixed(2).replace('.', ',');
      document.getElementById("floating-cart").style.display = "block";
    }

    window.onload = function () {
      const savedCount = parseInt(localStorage.getItem("cartCount")) || 0;
      document.getElementById("cart-count").textContent = savedCount;
      if (savedCount > 0) showCartPreview();
    }



     const produtosEKLIPSE = [
    {
      nome: "PC Gamer Neologic Ryzen 5 5600GT",
      link: "/paginas-dos-produtos/páginas/Computador.html"
    },
    {
      nome: "Mouse Gamer Razer Viper V3",
      link: "/paginas-dos-produtos/páginas/mouse.html"
    },
    {
      nome: "RTX 5070",
      link: "/paginas-dos-produtos/páginas/Rtx5070.html"
    },
    {
      nome: "Monitor Gamer 24'",
      link: "/paginas-dos-produtos/páginas/MonitorGamer24'.html"
    },
    {
      nome: "Placa Mãe ASUS TUF",
      link: "/paginas-dos-produtos/páginas/Placa Mãe ASUS TUF.html"
    },
    {
      nome: "Teclado Gamer Logitech",
      link: "/paginas-dos-produtos/páginas/teclado.html"
    },
    {
      nome: "Headset Redragon",
      link: "/paginas-dos-produtos/páginas/fone.html"
    },
    {
      nome: "Memória RAM 32GB DDR4",
      link: "/paginas-dos-produtos/páginas/memoriaram.html"
    },

    // 🖥️ PCs
    {
      nome: "PC Gamer Ryzen 5 4600G",
      link: "/paginas-dos-produtos/páginas/pc1.html"
    },
    {
      nome: "PC Gamer Intel i5 + Monitor",
      link: "/paginas-dos-produtos/páginas/pc2.html"
    },
    {
      nome: "PC Gamer i5 + GTX 750 Ti",
      link: "/paginas-dos-produtos/páginas/pc3.html"
    },
    {
      nome: "PC Gamer i5 + GT 1030 2GB",
      link: "/paginas-dos-produtos/páginas/pc4.html"
    },
    {
      nome: "PC Gamer Ryzen 7 5700G",
      link: "/paginas-dos-produtos/páginas/pc5.html"
    },
    {
      nome: "PC Intel Core i7 + GTX 1660",
      link: "/paginas-dos-produtos/páginas/pc6.html"
    },
    {
      nome: "PC Gamer Ryzen 3 3200G",
      link: "/paginas-dos-produtos/páginas/pc7.html"
    },
    {
      nome: "PC Intel Core i3 + RX 550",
      link: "/paginas-dos-produtos/páginas/pc8.html"
    },
    {
      nome: "PC Gamer Completo c/ Monitor 22",
      link: "/paginas-dos-produtos/páginas/pc9.html"
    },
    {
      nome: "PC Gamer Slim com RGB",
      link: "/paginas-dos-produtos/páginas/pc10.html"
    },
    {
      nome: "PC AMD Ryzen 5 + RX 6600",
      link: "/paginas-dos-produtos/páginas/pc11.html"
    },
    {
      nome: "PC Intel Xeon Gamer 32GB + GTX 1050",
      link: "/paginas-dos-produtos/páginas/pc12.html"
    },

    // 🧩 Hardware
    {
      nome: "Placa de Vídeo RTX 4060 Ti",
      link: "/paginas-dos-produtos/páginas/hardware1.html"
    },
    {
      nome: "Processador AMD Ryzen 5 5600X",
      link: "/paginas-dos-produtos/páginas/hardware2.html"
    },
    {
      nome: "Placa-Mãe B550M",
      link: "/paginas-dos-produtos/páginas/hardware3.html"
    },
    {
      nome: "Fonte 600W 80 Plus Bronze",
      link: "/paginas-dos-produtos/páginas/hardware4.html"
    },
    {
      nome: "Cooler Master Hyper 212",
      link: "/paginas-dos-produtos/páginas/hardware5.html"
    },
    {
      nome: "SSD NVMe 1TB",
      link: "/paginas-dos-produtos/páginas/hardware6.html"
    },
    {
      nome: "Memória RAM Corsair 16GB DDR4",
      link: "/paginas-dos-produtos/páginas/hardware7.html"
    },
    {
      nome: "Gabinete Gamer RGB Mid Tower",
      link: "/paginas-dos-produtos/páginas/hardware8.html"
    },
    {
      nome: "Water Cooler 240mm",
      link: "/paginas-dos-produtos/páginas/hardware9.html"
    },
    {
      nome: "HD 2TB Seagate",
      link: "/paginas-dos-produtos/páginas/hardware10.html"
    },
    {
      nome: "Adaptador Wi-Fi PCI Express",
      link: "/paginas-dos-produtos/páginas/hardware11.html"
    },
    {
      nome: "Controladora RGB 5V",
      link: "/paginas-dos-produtos/páginas/hardware12.html"
    },

    // 🎧 Periféricos
    {
      nome: "Teclado Mecânico RGB Redragon",
      link: "/paginas-dos-produtos/páginas/periferico1.html"
    },
    {
      nome: "Mouse Gamer Logitech G203",
      link: "/paginas-dos-produtos/páginas/periferico2.html"
    },
    {
      nome: "Headset Gamer HyperX Cloud Stinger",
      link: "/paginas-dos-produtos/páginas/periferico3.html"
    },
    {
      nome: "Mousepad Gamer RGB XL",
      link: "/paginas-dos-produtos/páginas/periferico4.html"
    },
    {
      nome: "Controle Xbox One Wireless",
      link: "/paginas-dos-produtos/páginas/periferico5.html"
    },
    {
      nome: "Cadeira Gamer Reclinável",
      link: "/paginas-dos-produtos/páginas/periferico6.html"
    },
    {
      nome: "Webcam Full HD Logitech",
      link: "/paginas-dos-produtos/páginas/periferico7.html"
    },
    {
      nome: "Microfone Condensador USB",
      link: "/paginas-dos-produtos/páginas/periferico8.html"
    },
    {
      nome: "Hub USB 4 Portas",
      link: "/paginas-dos-produtos/páginas/periferico9.html"
    },
    {
      nome: "Carregador Wireless Gamer",
      link: "/paginas-dos-produtos/páginas/periferico10.html"
    },
    {
      nome: "Teclado + Mouse Sem Fio",
      link: "/paginas-dos-produtos/páginas/periferico11.html"
    },
    {
      nome: "Base para Notebook com Cooler",
      link: "/paginas-dos-produtos/páginas/periferico12.html"
    },

    // 🖥️ Monitores
    {
      nome: "Monitor Gamer AOC 24'' 165Hz",
      link: "/paginas-dos-produtos/páginas/monitor1.html"
    },
    {
      nome: "Monitor LG Ultrawide 29''",
      link: "/paginas-dos-produtos/páginas/monitor2.html"
    },
    {
      nome: "Monitor Samsung Curvo 27''",
      link: "/paginas-dos-produtos/páginas/monitor3.html"
    },
    {
      nome: "Monitor 4K LG 27'' HDR",
      link: "/paginas-dos-produtos/páginas/monitor4.html"
    },
    {
      nome: "Monitor Gamer 144Hz 24'' Full HD",
      link: "/paginas-dos-produtos/páginas/monitor5.html"
    },
    {
      nome: "Monitor Dell 23.8'' IPS",
      link: "/paginas-dos-produtos/páginas/monitor6.html"
    },
    {
      nome: "Monitor Philips 21.5'' LED",
      link: "/paginas-dos-produtos/páginas/monitor7.html"
    },
    {
      nome: "Monitor Acer Nitro 23.8''",
      link: "/paginas-dos-produtos/páginas/monitor8.html"
    },
    {
      nome: "Monitor ASUS TUF 165Hz",
      link: "/paginas-dos-produtos/páginas/monitor9.html"
    },
    {
      nome: "Monitor Gamer Curvo 32''",
      link: "/paginas-dos-produtos/páginas/monitor10.html"
    },
    {
      nome: "Monitor LG 24'' IPS Full HD",
      link: "/paginas-dos-produtos/páginas/monitor11.html"
    },
    {
      nome: "Monitor Portátil 15.6'' USB-C",
      link: "/paginas-dos-produtos/páginas/monitor12.html"
    },

    // 🎒 Acessórios
    {
      nome: "Suporte para Fone de Ouvido RGB",
      link: "/paginas-dos-produtos/páginas/acessorio1.html"
    },
    {
      nome: "Organizador de Cabos Gamer",
      link: "/paginas-dos-produtos/páginas/acessorio2.html"
    },
    {
      nome: "Limpador de Tela Multifunção",
      link: "/paginas-dos-produtos/páginas/acessorio3.html"
    },
    {
      nome: "Espelho LED para Stream",
      link: "/paginas-dos-produtos/páginas/acessorio4.html"
    },
    {
      nome: "Porta Copo Gamer Iluminado",
      link: "/paginas-dos-produtos/páginas/acessorio5.html"
    },
    {
      nome: "Extensor USB 3.0 com Suporte",
      link: "/paginas-dos-produtos/páginas/acessorio6.html"
    },
    {
      nome: "Adaptador Bluetooth USB",
      link: "/paginas-dos-produtos/páginas/acessorio7.html"
    },
    {
      nome: "Filtro de Tela Anti-Reflexo",
      link: "/paginas-dos-produtos/páginas/acessorio8.html"
    },
    {
      nome: "Cabo DisplayPort 1.4 2m",
      link: "/paginas-dos-produtos/páginas/acessorio9.html"
    },
    {
      nome: "Suporte Articulado para Monitor",
      link: "/paginas-dos-produtos/páginas/acessorio10.html"
    },
    {
      nome: "Almofada Ergonômica para Pulso",
      link: "/paginas-dos-produtos/páginas/acessorio11.html"
    },
    {
      nome: "Etiqueta RGB para Teclado",
      link: "/paginas-dos-produtos/páginas/acessorio12.html"
    }
  ];



function mostrarSugestoes() {
    const input = document.getElementById("search");
    const lista = document.getElementById("sugestoes");
    const termo = input.value.toLowerCase().trim();

    if (termo.length === 0) {
      lista.style.display = "none";
      return;
    }

    const resultados = produtosEKLIPSE.filter(p =>
      p.nome.toLowerCase().includes(termo)
    );

    lista.innerHTML = "";

    if (resultados.length > 0) {
      resultados.forEach(produto => {
        const item = document.createElement("li");
        item.textContent = produto.nome;
        item.onclick = () => {
          window.location.href = produto.link;
        };
        lista.appendChild(item);
      });
      lista.style.display = "block";
    } else {
      lista.innerHTML = "<li>Produto não encontrado 😢</li>";
      lista.style.display = "block";
    }
  }

  // Esconde lista ao clicar fora
  document.addEventListener("click", function (e) {
    const lista = document.getElementById("sugestoes");
    if (!e.target.closest(".search-wrapper")) {
      lista.style.display = "none";
    }
  });




  function updateRange() {
    const min = document.getElementById("range-min").value;
    const max = document.getElementById("range-max").value;
    document.getElementById("output-min").textContent = `R$ ${min}`;
    document.getElementById("output-max").textContent = `R$ ${max}`;
    document.getElementById("preco-min").value = min;
    document.getElementById("preco-max").value = max;
  }

  function aplicarFiltros() {
    const filtrosAtivos = Array.from(document.querySelectorAll('.filtro:checked')).map(cb => cb.dataset.filtro);
    const precoMin = parseFloat(document.getElementById('preco-min').value || 0);
    const precoMax = parseFloat(document.getElementById('preco-max').value || Infinity);

    document.querySelectorAll('.product-grid .card').forEach(card => {
      const precoTexto = card.querySelector('.preco-destaque')?.textContent || "0";
      const precoNumerico = parseFloat(precoTexto.replace(/[^\d,]/g, '').replace(',', '.')) || 0;

      const temFiltroCategoria = filtrosAtivos.length === 0 || filtrosAtivos.every(filtro => card.classList.contains(filtro));
      const dentroFaixaPreco = precoNumerico >= precoMin && precoNumerico <= precoMax;

      if (temFiltroCategoria && dentroFaixaPreco) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  function resetarFiltros() {
    document.querySelectorAll('.filtro').forEach(cb => cb.checked = false);
    document.getElementById("range-min").value = 500;
    document.getElementById("range-max").value = 6000;
    document.getElementById("preco-min").value = "";
    document.getElementById("preco-max").value = "";
    updateRange();

    document.querySelectorAll('.product-grid .card').forEach(card => {
      card.style.display = 'flex';
    });
  }


  // Inicializa os valores do range na tela ao carregar
  window.onload = () => {
    updateRange();
  }


  let cartCount = 0;

  function addToCart() {
    cartCount++;
    document.getElementById("cart-count").textContent = cartCount;
  }

    function updateRange() {
      const min = document.getElementById("range-min").value;
      const max = document.getElementById("range-max").value;
      document.getElementById("output-min").textContent = `R$ ${min}`;
      document.getElementById("output-max").textContent = `R$ ${max}`;
      document.getElementById("preco-min").value = min;
      document.getElementById("preco-max").value = max;
    }

    function aplicarFiltros() {
      const filtrosAtivos = Array.from(document.querySelectorAll('.filtro:checked')).map(cb => cb.dataset.filtro);
      const precoMin = parseFloat(document.getElementById('preco-min').value.replace('R$', '').replace(',', '.')) || 0;
      const precoMax = parseFloat(document.getElementById('preco-max').value.replace('R$', '').replace(',', '.')) || Infinity;

      document.querySelectorAll('.product-grid .card').forEach(card => {
        const precoEl = card.querySelector('.preco-destaque');
        const precoTexto = precoEl ? precoEl.textContent.replace(/[^\d,]/g, '').replace(',', '.') : '0';
        const preco = parseFloat(precoTexto);

        const temFiltro = filtrosAtivos.length === 0 || filtrosAtivos.every(f => card.classList.contains(f));
        const dentroDoPreco = preco >= precoMin && preco <= precoMax;

        if (temFiltro && dentroDoPreco) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    }

    function resetarFiltros() {
      document.querySelectorAll('.filtro').forEach(cb => cb.checked = false);
      document.getElementById("range-min").value = 500;
      document.getElementById("range-max").value = 6000;
      updateRange();
      document.getElementById("preco-min").value = "";
      document.getElementById("preco-max").value = "";
      document.querySelectorAll('.product-grid .card').forEach(card => card.style.display = 'flex');
    }

    function updateRange() {
      const min = document.getElementById("range-min").value;
      const max = document.getElementById("range-max").value;
      document.getElementById("output-min").textContent = `R$ ${min}`;
      document.getElementById("output-max").textContent = `R$ ${max}`;
      document.getElementById("preco-min").value = min;
      document.getElementById("preco-max").value = max;
    }

    function aplicarFiltros() {
      const filtrosAtivos = Array.from(document.querySelectorAll('.filtro:checked')).map(cb => cb.dataset.filtro);
      const precoMin = parseFloat(document.getElementById('preco-min').value) || 0;
      const precoMax = parseFloat(document.getElementById('preco-max').value) || Infinity;

      document.querySelectorAll('.product-grid .card').forEach(card => {
        const precoTexto = card.querySelector('.preco-destaque')?.textContent.replace(/[^\d,]/g, '').replace(',', '.');
        const preco = parseFloat(precoTexto) || 0;

        const temFiltro = filtrosAtivos.every(f => card.classList.contains(f));
        const dentroDoPreco = preco >= precoMin && preco <= precoMax;

        if (temFiltro && dentroDoPreco) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    }

    function resetarFiltros() {
      document.querySelectorAll('.filtro').forEach(cb => cb.checked = false);
      document.getElementById("range-min").value = 500;
      document.getElementById("range-max").value = 6000;
      updateRange();
      document.getElementById("preco-min").value = "";
      document.getElementById("preco-max").value = "";
      document.querySelectorAll('.product-grid .card').forEach(card => card.style.display = 'flex');
    }



    function abrirPopup() {
  const jaViu = localStorage.getItem("popupVisto");
  if (!jaViu) {
    document.getElementById("popupPromo").style.display = "flex";
    localStorage.setItem("popupVisto", "true");
  }
}

function fecharPopup() {
  document.getElementById("popupPromo").style.display = "none";
}

window.addEventListener('DOMContentLoaded', function () {
  setTimeout(abrirPopup, 3000); // aparece após 3 segundos
});



// === COOKIES ===
function setCookie(nome, valor, dias) {
  const data = new Date();
  data.setTime(data.getTime() + (dias * 24 * 60 * 60 * 1000));
  const expira = "expires=" + data.toUTCString();
  document.cookie = nome + "=" + valor + ";" + expira + ";path=/";
}

function getCookie(nome) {
  const nomeIgual = nome + "=";
  const cookies = decodeURIComponent(document.cookie).split(';');
  for (let c of cookies) {
    while (c.charAt(0) === ' ') c = c.substring(1);
    if (c.indexOf(nomeIgual) === 0) return c.substring(nomeIgual.length, c.length);
  }
  return "";
}

// === POP-UP COM CUPOM USANDO COOKIE ===
window.addEventListener("DOMContentLoaded", function () {
  if (!getCookie("cupomVisto")) {
    document.getElementById("popup-cupom").style.display = "block";
    setCookie("cupomVisto", "true", 7); // só aparece 1x a cada 7 dias
  }
});


 // Exibir o manual do usuário ao carregar a página
    window.onload = function() {
      document.getElementById("manualModal").style.display = "block";
    };

    // Função para fechar o manual
    function fecharManual() {
      document.getElementById("manualModal").style.display = "none";
    }


    document.getElementById('cadastroForm').addEventListener('submit', function(e) {
      e.preventDefault();

      const nome = document.getElementById('nome').value.trim();
      const email = document.getElementById('email').value.trim();
      const senha = document.getElementById('senha').value;

      const msg = document.getElementById('cadastroMessage');

      if (!nome || !email || !senha) {
        msg.textContent = '⚠️ Preencha todos os campos!';
        msg.style.color = 'orange';
        return;
      }

      let users = JSON.parse(localStorage.getItem('users')) || [];

      const jaExiste = users.some(u => u.email.toLowerCase() === email.toLowerCase());
      if (jaExiste) {
        msg.textContent = '❌ Este e-mail já está cadastrado!';
        msg.style.color = 'red';
        return;
      }

      users.push({ nome, email, senha });
      localStorage.setItem('users', JSON.stringify(users));

      msg.textContent = '✅ Cadastro realizado com sucesso! Redirecionando...';
      msg.style.color = '#28a745';

      setTimeout(() => {
        window.location.href = '/pagina inicial/html/login.html';
      }, 1800);
    });


     function toggleFaq(el) {
      el.classList.toggle("ativo");
    }


     document.getElementById('loginForm').addEventListener('submit', function(e) {
      e.preventDefault();

      const email = document.getElementById('email').value.trim();
      const senha = document.getElementById('senha').value;
      const msg = document.getElementById('loginMessage');

      const users = JSON.parse(localStorage.getItem('users')) || [];

      const usuario = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.senha === senha);

      if (usuario) {
        localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
        msg.textContent = '✅ Login realizado! Redirecionando...';
        msg.style.color = '#28a745';
        setTimeout(() => {
          window.location.href = '/pagina inicial/html/index.html'; // ou onde quiser direcionar
        }, 1500);
      } else {
        msg.textContent = '❌ E-mail ou senha incorretos!';
        msg.style.color = 'red';
      }
    });



     document.addEventListener('DOMContentLoaded', () => {
      const form = document.getElementById('feedbackForm');
      const mensagem = document.getElementById('feedbackMensagem');

      form.addEventListener('submit', (e) => {
        e.preventDefault();

        const tipo = document.getElementById('problema').value;
        const descricao = document.getElementById('descricao').value;

        if (tipo && descricao.trim()) {
          // Aqui você pode integrar com uma API ou backend
          console.log("Feedback enviado:", { tipo, descricao });

          mensagem.textContent = '✅ Obrigado pelo seu feedback! Em breve entraremos em contato.';
          mensagem.style.color = '#28a745';

          form.reset();
        } else {
          mensagem.textContent = '⚠️ Por favor, preencha todos os campos.';
          mensagem.style.color = '#e67e22';
        }
      });
    });



    // Trocar foto do perfil
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

    // Dados simulados
    const minhasCompras = [
      {
        nome: "Mouse Gamer Razer Viper V3",
        preco: 299.99,
        imagem: "https://cdn.awsli.com.br/2653/2653291/produto/248955913/mouse-gamer-sem-fio-razer-viper-v3-hyperspeed-preto-rz01-04910100-r3u1-541f9580-0e3hto9mig.jpg",
        link: "/paginas-dos-produtos/páginas/mouse.html"
      },
      {
        nome: "RTX 5070",
        preco: 2499.99,
        imagem: "https://images4.kabum.com.br/produtos/fotos/714574/placa-de-video-rtx-5070-windforce-oc-sff-12g-gigabyte-nvidia-geforce-12gb-gddr7-192bits-dlss-ray-tracing-9vn5070wo-00-g10_1740569969_g.jpg",
        link: "/paginas-dos-produtos/páginas/Rtx5070.html"
      },
      {
        nome: "Monitor Gamer 24''",
        preco: 539.99,
        imagem: "https://http2.mlstatic.com/D_NQ_NP_955530-MLA84534338900_052025-O.webp",
        link: "/paginas-dos-produtos/páginas/monitor24.html"
      }
    ];

    const minhasVendas = [
      {
        nome: "Memória RAM 32GB DDR4",
        preco: 699.99,
        imagem: "https://images8.kabum.com.br/produtos/fotos/110828/memoria-corsair-vengeance-lpx-32gb-2x16gb-3200mhz-ddr4-c16-black-cmk32gx4m2e3200c16_1590064067_g.jpg",
        link: "/paginas-dos-produtos/páginas/memoriaram.html"
      },
      {
        nome: "Kit Gamer",
        preco: 699.99,
        imagem: "/pagina inicial/image/kit-gaymer.jpg",
        link: "/pages.html"
      }
    ];

    function renderItems(lista, containerId) {
      const container = document.getElementById(containerId);
      container.innerHTML = '';
      lista.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card-item';
        card.innerHTML = `
          <img src="${item.imagem}" alt="${item.nome}">
          <p><strong>${item.nome}</strong></p>
          <p>Preço: R$ ${item.preco.toFixed(2).replace('.', ',')}</p>
          <a href="${item.link}">Ver Produto</a>
        `;
        container.appendChild(card);
      });
    }

    renderItems(minhasCompras, 'compras');
    renderItems(minhasVendas, 'vendas');

    function logout() {
      localStorage.clear();
      window.location.href = "/pagina inicial/html/index.html";
    }

// PEGAR USUÁRIO LOGADO
const currentUser = JSON.parse(localStorage.getItem('currentUser'));
const nomeElemento = document.getElementById('user-nome');
