/*O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];

function adicionarAmigo() {
    let adicionarNome = document.querySelector('input').value;
    if (adicionarNome === '') {
        alert('Preencha o campo.');
        return;
    }

    listaAmigos.push(adicionarNome);
    limparCaixaTexto();
    mostrarTela(listaAmigos);
}

function limparCaixaTexto() {
    document.querySelector('input').value = '';
}

function mostrarTela(mostrarNome) {
    let adicionarTela = document.querySelector('ul');
    adicionarTela.innerHTML = mostrarNome;
}*/

let listaAmigos = [];

function adicionarAmigo() {
    let inputNome = document.querySelector('input'); // Seleciona o input corretamente
    let nome = inputNome.value.trim(); // Remove espaços extras
    
    if (nome === '') {
        alert('Preencha o campo com um nome válido.');
        return;
    }
    
    listaAmigos.push(nome);
    inputNome.value = ''; // Limpa o campo após adicionar
    mostrarLista(); // Atualiza a lista exibida na tela
}

function mostrarLista() {
    let listaElemento = document.querySelector('#listaAmigos');
    listaElemento.innerHTML = ''; // Limpa a lista antes de recriá-la
    
    listaAmigos.forEach((amigo) => {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaElemento.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('A lista está vazia. Adicione amigos antes de sortear.');
        return;
    }
    
    let sorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    let resultadoElemento = document.querySelector('#resultado');
    resultadoElemento.innerHTML = `<li>O amigo sorteado é: <strong>${sorteado}</strong></li>`;
}

// Localiza o botão de sortear e adiciona o evento de clique
let botaoSortear = document.querySelector('.button-draw');
if (botaoSortear) {
    botaoSortear.addEventListener('click', sortearAmigo);
}