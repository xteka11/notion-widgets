const DAYS = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const MONTHS = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
const pad = (n) => String(n).padStart(2, "0");

function tick() {
  const now = new Date();
  document.getElementById("hh").textContent = pad(now.getHours());
  document.getElementById("mm").textContent = pad(now.getMinutes());
  document.getElementById("day").textContent = DAYS[now.getDay()];
  document.getElementById("date").textContent = `${now.getDate()} ${MONTHS[now.getMonth()]} ${now.getFullYear()}`;
  // Barra: cuánto del día ha pasado
  const minutes = now.getHours() * 60 + now.getMinutes();
  document.getElementById("progress").style.width = `${(minutes / 1440) * 100}%`;
}

tick();
setInterval(tick, 1000);
