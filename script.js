const resultado = document.getElementById("resultado");
const btnUsuarios = document.getElementById("btnUsuarios");
const idUser = document.getElementById("idUser");
const buscaPost = document.getElementById("buscaPost");
const cep = document.getElementById("cep");


// ======================================
// NÍVEL 1 - QUESTÃO 1
// Buscar usuários: nome e email
// ======================================
/*
async function buscarUsuarios() {
  const resposta = await fetch("https://jsonplaceholder.typicode.com/users");
  const usuarios = await resposta.json();

  resultado.innerHTML = "";

  usuarios.forEach(usuario => {
    resultado.innerHTML += `<p>${usuario.name} - ${usuario.email}</p>`;
  });
}

buscarUsuarios();
*/


// ======================================
// NÍVEL 1 - QUESTÃO 2
// Mostrar os 5 primeiros posts
// ======================================
/*
async function buscarPosts() {
  const resposta = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await resposta.json();

  resultado.innerHTML = "";

  posts.slice(0, 5).forEach(post => {
    resultado.innerHTML += `
      <h3>${post.title}</h3>
      <p>${post.body}</p>
    `;
  });
}

buscarPosts();
*/


// ======================================
// NÍVEL 1 - QUESTÃO 3
// Botão carregar usuários
// ======================================
/*
btnUsuarios.addEventListener("click", async () => {
  const resposta = await fetch("https://jsonplaceholder.typicode.com/users");
  const usuarios = await resposta.json();

  resultado.innerHTML = "";

  usuarios.forEach(usuario => {
    resultado.innerHTML += `<p>${usuario.name}</p>`;
  });
});
*/


// ======================================
// NÍVEL 2 - QUESTÃO 1
// Buscar usuário por ID
// ======================================
/*
async function buscarPorId() {
  const resposta = await fetch(
    `https://jsonplaceholder.typicode.com/users/${idUser.value}`
  );

  const usuario = await resposta.json();

  resultado.innerHTML = `
    <p>${usuario.name}</p>
    <p>${usuario.phone}</p>
  `;
}
*/


// ======================================
// NÍVEL 2 - QUESTÃO 2
// Clique mostra detalhes
// ======================================
/*
async function listaDetalhes() {
  const resposta = await fetch("https://jsonplaceholder.typicode.com/users");
  const usuarios = await resposta.json();

  resultado.innerHTML = "";

  usuarios.forEach(usuario => {
    const p = document.createElement("p");
    p.textContent = usuario.name;

    p.addEventListener("click", () => {
      resultado.innerHTML += `
        <p>Email: ${usuario.email}</p>
        <p>Telefone: ${usuario.phone}</p>
        <p>Empresa: ${usuario.company.name}</p>
      `;
    });

    resultado.appendChild(p);
  });
}

listaDetalhes();
*/


// ======================================
// NÍVEL 2 - QUESTÃO 3
// Filtrar posts em tempo real
// ======================================
/*
let posts = [];

async function carregarPosts() {
  const resposta = await fetch("https://jsonplaceholder.typicode.com/posts");
  posts = await resposta.json();
}

buscaPost.addEventListener("input", () => {
  const filtrados = posts.filter(post =>
    post.title.toLowerCase().includes(buscaPost.value.toLowerCase())
  );

  resultado.innerHTML = "";

  filtrados.forEach(post => {
    resultado.innerHTML += `<p>${post.title}</p>`;
  });
});

carregarPosts();
*/


// ======================================
// NÍVEL 3 - QUESTÃO 1
// Cards de usuários
// ======================================
/*
async function cardsUsuarios() {
  const resposta = await fetch("https://jsonplaceholder.typicode.com/users");
  const usuarios = await resposta.json();

  resultado.innerHTML = "";

  usuarios.forEach(usuario => {
    resultado.innerHTML += `
      <div>
        <h3>${usuario.name}</h3>
        <p>${usuario.email}</p>
        <p>${usuario.address.city}</p>
      </div>
    `;
  });
}

cardsUsuarios();
*/


// ======================================
// NÍVEL 3 - QUESTÃO 2
// Loading
// ======================================
/*
async function loadingUsuarios() {
  resultado.innerHTML = "Carregando...";

  const resposta = await fetch("https://jsonplaceholder.typicode.com/users");
  const usuarios = await resposta.json();

  resultado.innerHTML = "";

  usuarios.forEach(usuario => {
    resultado.innerHTML += `<p>${usuario.name}</p>`;
  });
}

loadingUsuarios();
*/


// ======================================
// NÍVEL 3 - QUESTÃO 3
// Try/Catch
// ======================================
/*
async function erroFetch() {
  try {
    const resposta = await fetch("https://urlerrada.com/users");
    await resposta.json();
  } catch {
    resultado.innerHTML = "Erro ao carregar dados";
  }
}

erroFetch();
*/


// ======================================
// NÍVEL 4 - QUESTÃO 1
// Buscar posts pelo texto
// ======================================
/*
buscaPost.addEventListener("input", async () => {
  const resposta = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await resposta.json();

  const filtrados = posts.filter(post =>
    post.body.toLowerCase().includes(buscaPost.value.toLowerCase())
  );

  resultado.innerHTML = "";

  filtrados.forEach(post => {
    resultado.innerHTML += `<p>${post.body}</p>`;
  });
});
*/


// ======================================
// NÍVEL 4 - QUESTÃO 2
// Buscar CEP
// ======================================
/*
async function buscarCep() {
  const resposta = await fetch(
    `https://viacep.com.br/ws/${cep.value}/json/`
  );

  const endereco = await resposta.json();

  resultado.innerHTML = `
    <p>Rua: ${endereco.logradouro}</p>
    <p>Bairro: ${endereco.bairro}</p>
    <p>Cidade: ${endereco.localidade}</p>
  `;
}
*/


// ======================================
// NÍVEL 4 - QUESTÃO 3
// POST formulário
// ======================================
/*
async function enviarUsuario() {
  const resposta = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nome: "João",
        email: "joao@gmail.com"
      })
    }
  );

  const dados = await resposta.json();
  console.log(dados);
}
*/