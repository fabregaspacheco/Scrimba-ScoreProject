function add(team, val) {
  const el = document.getElementById(team);
  el.textContent = Number(el.textContent) + val;
}

function reset() {
  document.getElementById('home').textContent = 0;
  document.getElementById('guest').textContent = 0;
}
