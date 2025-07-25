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