const MONTHS = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const DOW = ["L", "M", "X", "J", "V", "S", "D"];

let view = new Date();
view.setDate(1);

function cell(text, cls) {
  const el = document.createElement("div");
  el.className = cls;
  el.textContent = text;
  return el;
}

function render() {
  const grid = document.getElementById("grid");
  grid.replaceChildren(...DOW.map((d) => cell(d, "dow")));
  document.getElementById("title").textContent = `${MONTHS[view.getMonth()]} ${view.getFullYear()}`;

  const year = view.getFullYear();
  const month = view.getMonth();
  const offset = (new Date(year, month, 1).getDay() + 6) % 7; // lunes = 0
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysPrev = new Date(year, month, 0).getDate();
  const today = new Date();

  for (let i = offset; i > 0; i--) grid.append(cell(daysPrev - i + 1, "d out"));
  for (let d = 1; d <= daysInMonth; d++) {
    const dow = (offset + d - 1) % 7;
    let cls = "d";
    if (dow >= 5) cls += " we";
    if (d === today.getDate() && month === today.getMonth() && year === today.getFullYear()) cls += " today";
    grid.append(cell(d, cls));
  }
  const filled = offset + daysInMonth;
  for (let d = 1; d <= (7 - (filled % 7)) % 7; d++) grid.append(cell(d, "d out"));
}

document.getElementById("prev").addEventListener("click", () => { view.setMonth(view.getMonth() - 1); render(); });
document.getElementById("next").addEventListener("click", () => { view.setMonth(view.getMonth() + 1); render(); });

render();
// Si la página queda abierta, cambia de día sola a medianoche.
setInterval(render, 60 * 1000);
