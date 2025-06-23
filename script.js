document.addEventListener('DOMContentLoaded', function () {
  const torre = localStorage.getItem('torre');
  const apto = localStorage.getItem('apartamento');
  const infoUsuario = document.getElementById('info-usuario');
  if (infoUsuario && torre && apto) {
    infoUsuario.innerText = `Torre ${torre} - Apartamento ${apto}`;
  }

  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const torreVal = document.getElementById('torre').value;
      const aptoVal = document.getElementById('apartamento').value;
      if (!torreVal || !aptoVal) {
        alert('Por favor selecciona torre y apartamento.');
        return;
      }
      localStorage.setItem('torre', torreVal);
      localStorage.setItem('apartamento', aptoVal);
      window.location.href = 'menu.html';
    });
  }
});
