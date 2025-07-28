  function mostrarPreview(event) {
      const file = event.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = e => {
        const img = document.getElementById('preview-img');
        img.src = e.target.result;
        img.style.display = 'block';
      };
      reader.readAsDataURL(file);
    }

    function cadastrarProduto(e) {
      e.preventDefault();

      const fotoData = document.getElementById('preview-img').src;
      const produto = {
        imagem: fotoData,
        nome: document.getElementById('nome').value.trim(),
        descricao: document.getElementById('descricao').value.trim(),
        categoria: document.getElementById('categoria').value,
        preco: parseFloat(document.getElementById('preco').value),
        estoque: parseInt(document.getElementById('estoque').value),
        variacoes: document.getElementById('variacoes').value.trim()
      };

      const lista = JSON.parse(localStorage.getItem('produtosUsuario')) || [];
      lista.push(produto);
      localStorage.setItem('produtosUsuario', JSON.stringify(lista));

      alert("🔥 Produto cadastrado com sucesso e publicado na EKLIPSE! ");
      window.location.href = 'http://127.0.0.1:5500/pagina%20inicial/html/area%20de%20venda/meuproduto.html';
    }