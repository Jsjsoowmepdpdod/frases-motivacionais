const phrases = [
    "Você é mais forte do que pensa.",
    "Acredite nos seus sonhos!",
    "Cada desafio é uma oportunidade de crescimento.",
    "Nunca é tarde para começar de novo.",
    "Seu esforço será recompensado.",
    "O sucesso é a soma de pequenos esforços diários.",
    "Você tem o poder de criar a sua própria realidade.",
    "Não desista, o começo é sempre o mais difícil.",
    "A única pessoa que pode te parar é você mesmo.",
    "Hoje é o dia perfeito para começar algo novo.",
    "Tudo o que você precisa está dentro de você.",
    "A cada passo, você está mais perto do seu objetivo.",
    "Grandes coisas nunca vêm de zonas de conforto.",
    "O fracasso é apenas uma lição disfarçada.",
    "Acredite em você e vá atrás dos seus sonhos."
];

let isTyping = false; // Flag para evitar múltiplas digitações

function showPhrase() {
    if (isTyping) return; // Não permite iniciar outra digitação

    const randomIndex = Math.floor(Math.random() * phrases.length);
    const phraseElement = document.getElementById("phrase");
    phraseElement.textContent = ''; // Limpa a frase anterior
    typePhrase(phrases[randomIndex], phraseElement); // Inicia a digitação
}

function typePhrase(phrase, element) {
    isTyping = true; // Marca que a digitação começou
    let index = 0;
    const typingSpeed = 100; // Velocidade de digitação em milissegundos

    function type() {
        if (index < phrase.length) {
            element.textContent += phrase.charAt(index); // Adiciona uma letra
            index++;
            setTimeout(type, typingSpeed); // Chama a função novamente após um atraso
        } else {
            isTyping = false; // Marca que a digitação terminou
        }
    }

    type(); // Inicia o efeito de digitação
}
