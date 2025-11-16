// Selecionar elementos
const input = document.getElementById('nome');
const resultado = document.getElementById('resultado');
const btnTema = document.getElementById('toggle-theme');

// 👇👇 **LIGAR OS BOTÕES ÀS FUNÇÕES**
document.getElementById("salvar").addEventListener("click", salvarnome);
document.getElementById("mostrar").addEventListener("click", mostrarnome);
document.getElementById("apagar").addEventListener("click", apagarnome);


// ============================
// 1) SALVAR NOME
// ============================
function salvarnome() {
    const nome = input.value.trim();

    if (nome === "") {
        alert("Preencha seu nome corretamente.");
        input.focus();
        return;
    }

    localStorage.setItem("nomeUsuario", nome);
    resultado.innerText = `Nome "${nome}" salvo no LocalStorage!`;

    input.value = "";
    input.focus();
}

// ============================
// 2) MOSTRAR NOME
// ============================
function mostrarnome() {
    const nomeSalvo = localStorage.getItem("nomeUsuario");

    if (nomeSalvo) {
        resultado.innerText = `📦 Nome salvo: ${nomeSalvo}`;
    } else {
        resultado.innerText = "⚠️ Nenhum nome foi salvo ainda.";
    }
}

// ============================
// 3) APAGAR NOME
// ============================
function apagarnome() {
    localStorage.removeItem("nomeUsuario");
    resultado.innerText = "🗑️ Nome removido do LocalStorage!";
    input.focus();
}

// ============================
// 4) TROCAR TEMA (LIGHT / DARK)
// ============================
btnTema.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Salvar o tema atual no localStorage
    const temaAtual = document.body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("tema", temaAtual);

    atualizarIconeTema();
});

// Atualizar ícone do botão
function atualizarIconeTema() {
    if (document.body.classList.contains("dark")) {
        btnTema.textContent = "🌙"; // Ícone do modo escuro
    } else {
        btnTema.textContent = "☀️"; // Ícone do modo claro
    }
}

// ============================
// 5) RESTAURAR TEMA AO CARREGAR
// ============================
function carregarTema() {
    const temaSalvo = localStorage.getItem("tema");

    if (temaSalvo === "dark") {
        document.body.classList.add("dark");
    }

    atualizarIconeTema();
}

// Chamar ao iniciar
carregarTema();
