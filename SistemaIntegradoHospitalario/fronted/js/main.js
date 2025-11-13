const URL = "http://localhost:4000/api";

document.getElementById("btnLoadHosp").addEventListener("click", async () => {
  const res = await fetch(`${URL}/hospitales`);
  const data = await res.json();

  const list = document.getElementById("listHosp");
  list.innerHTML = "";
  data.forEach(h => {
    const li = document.createElement("li");
    li.textContent = `${h.nombre} - ${h.ciudad}`;
    list.appendChild(li);
  });
});

document.getElementById("btnLoadPac").addEventListener("click", async () => {
  const res = await fetch(`${URL}/pacientes`);
  const data = await res.json();

  const list = document.getElementById("listPac");
  list.innerHTML = "";
  data.forEach(p => {
    const li = document.createElement("li");
    li.textContent = `${p.idPersona?.nombre || "Sin nombre"} - ${p.diagnostico}`;
    list.appendChild(li);
  });
});
