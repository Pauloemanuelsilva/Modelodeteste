const inputFoto = document.getElementById('input-foto');
const avatar = document.getElementById('avatar');
document.querySelector('.avatar-btn').addEventListener('click', () => inputFoto.click());

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


