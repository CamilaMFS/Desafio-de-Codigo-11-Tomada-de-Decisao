const nomePersonagem = prompt("Digite o nome do personagem:");
const acaoEscolhida = prompt("Escolha entre 'Atacar' ou 'Fugir':");

if (acaoEscolhida === "Atacar" || acaoEscolhida === "Fugir") {
    const mensagem = `${nomePersonagem} escolheu ${acaoEscolhida}!`;
    console.log(mensagem);
} else {
    console.log("Tente novamente");
}

// pode ser qualquer nome
// Digite o nome do personagem = Kitsunemi
// Escolha entre 'Atacar' ou 'Fugir' = Atacar
// Kitsunemi Atacar