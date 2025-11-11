const API_URL = "http://localhost:3000/api/gastos";

// Cargar los gastos al iniciar
window.addEventListener("DOMContentLoaded", cargarGastos);

async function cargarGastos() {
  const res = await fetch(API_URL);
  const data = await res.json();

  const tbody = document.querySelector("#tablaGastos tbody");
  tbody.innerHTML = "";

  data.forEach((g) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${g.usuario?.nombre || g.usuario}</td>
      <td>${g.categoria}</td>
      <td>${g.valor}</td>
      <td>${g.descripcion}</td>
      <td>${new Date(g.fecha).toLocaleDateString()}</td>
      <td>
        <button onclick="editarGasto('${g._id}')">✏️</button>
        <button onclick="eliminarGasto('${g._id}')">🗑️</button>
      </td>
    `;
    tbody.appendChild(row);
  });
}

// Guardar o actualizar un gasto
document.querySelector("#btnGuardar").addEventListener("click", async () => {
  const id = document.querySelector("#idGasto").value;
  const usuario = "69102a0891ad2bcae46b0bb2"; // ID fijo del usuario por ahora
  const categoria = document.querySelector("#categoria").value;
  const valor = document.querySelector("#valor").value;
  const descripcion = document.querySelector("#descripcion").value;

  const gasto = { usuario, categoria, valor, descripcion };

  let res;
  if (id) {
    // Si hay ID → actualizar
    res = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(gasto),
    });
  } else {
    // Si no hay ID → crear
    res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(gasto),
    });
  }

  if (res.ok) {
    alert(id ? "✅ Gasto actualizado" : "✅ Gasto guardado");
    document.querySelector("#formGasto").reset();
    document.querySelector("#idGasto").value = "";
    cargarGastos();
  } else {
    alert("❌ Error al guardar el gasto");
  }
});

// Editar gasto (rellena el formulario)
async function editarGasto(id) {
  const res = await fetch(`${API_URL}/${id}`);
  const gasto = await res.json();

  document.querySelector("#idGasto").value = gasto._id;
  document.querySelector("#categoria").value = gasto.categoria;
  document.querySelector("#valor").value = gasto.valor;
  document.querySelector("#descripcion").value = gasto.descripcion;
}

// Eliminar gasto
async function eliminarGasto(id) {
  if (confirm("¿Deseas eliminar este gasto?")) {
    const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    if (res.ok) {
      alert("🗑️ Gasto eliminado");
      cargarGastos();
    } else {
      alert("❌ Error al eliminar gasto");
    }
  }
}
