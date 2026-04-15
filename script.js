const usuariosDiv = document.getElementById("usuarios");
const detalhesDiv = document.getElementById("detalhes");
const loading = document.getElementById("loading");
const erro = document.getElementById("erro");
const busca = document.getElementById("busca");

let usuarios = [];

async function carregarUsuarios() {
  try {
    loading.style.display = "block";

    const resposta = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!resposta.ok) {
      throw new Error("Erro ao buscar usuários");
    }

    usuarios = await resposta.json();

    mostrarUsuarios(usuarios);

    loading.style.display = "none";
  } catch (error) {
    loading.style.display = "none";
    erro.textContent = "Erro ao carregar dados";
    console.error(error);
  }
}

function mostrarUsuarios(lista) {
  usuariosDiv.innerHTML = "";

  lista.forEach(usuario => {
    const div = document.createElement("div");
    div.classList.add("usuario");

    div.innerHTML = `
      <strong>${usuario.name}</strong>
    `;

    div.addEventListener("click", () => {
      detalhesDiv.innerHTML = `
        <h2>${usuario.name}</h2>
        <p>Email: ${usuario.email}</p>
        <p>Telefone: ${usuario.phone}</p>
        <p>Empresa: ${usuario.company.name}</p>
        <p>Cidade: ${usuario.address.city}</p>
      `;
    });

    usuariosDiv.appendChild(div);
  });
}

busca.addEventListener("input", () => {
  const texto = busca.value.toLowerCase();

  const filtrados = usuarios.filter(usuario =>
    usuario.name.toLowerCase().includes(texto)
  );

  mostrarUsuarios(filtrados);
});

carregarUsuarios();