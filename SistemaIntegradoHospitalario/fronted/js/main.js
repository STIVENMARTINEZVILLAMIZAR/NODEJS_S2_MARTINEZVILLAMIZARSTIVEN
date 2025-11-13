document.getElementById("loadBtn").addEventListener("click", async () => {
  const res = await fetch("http://localhost:4000/api/hospitales");
  const data = await res.json();

  const list = document.getElementById("listaHospitales");
  list.innerHTML = "";
  data.forEach(h => {
    const li = document.createElement("li");
    li.textContent = `${h.nombre} - ${h.ciudad}`;
    list.appendChild(li);
  });
});
