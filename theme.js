// Lee ?t=morado|comic|noche y ?bg=RRGGBB de la URL (solo valores de la lista blanca / hex válido).
(function () {
  const params = new URLSearchParams(location.search);
  const theme = params.get("t");
  if (["morado", "comic", "noche"].includes(theme)) document.documentElement.dataset.theme = theme;

  const bg = params.get("bg");
  if (bg && /^[0-9a-fA-F]{6}$/.test(bg)) {
    document.documentElement.style.setProperty("--bg", "#" + bg);
  }
})();
