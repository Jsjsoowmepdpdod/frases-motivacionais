const phrases = [
    "A única limitação para o seu sucesso é a que você impõe a si mesmo.",
"Acredite na sua força interior e avance.",
"Dê o primeiro passo, mesmo que o caminho seja desconhecido.",
"O esforço de hoje constrói o sucesso de amanhã.",
"Confie no processo e os resultados virão.",
"Permita-se ser o melhor que pode ser.",
"A jornada é tão importante quanto o destino.",
"Desafios são oportunidades para superar seus próprios limites.",
"Seja paciente, grandes coisas levam tempo.",
"Cada dia é uma chance para recomeçar.",
"Cultive pensamentos positivos e veja sua vida se transformar.",
"A mudança começa com a decisão de tentar.",
"Acredite que você é capaz e metade do caminho já estará percorrido.",
"Não espere o momento perfeito, faça o momento ser perfeito.",
"Seja seu maior fã, e não seu maior crítico.",
"O poder está na ação, não apenas na intenção.",
"Mantenha o foco nos seus objetivos, não nos obstáculos.",
"Seus sonhos merecem o seu empenho.",
"Nunca subestime o que você é capaz de realizar.",
"Seja grato pelo que tem enquanto trabalha pelo que deseja.",
"Cada dia é uma nova chance para evoluir.",
"Você pode fazer mais do que imagina.",
"A persistência transforma sonhos em realidade.",
"Confie em você e vá além.",
"Tudo começa com uma decisão de seguir em frente.",
"Seu potencial é ilimitado.",
"As dificuldades são apenas degraus para o sucesso.",
"A felicidade é o caminho, não o destino.",
"A determinação leva você a lugares que o talento sozinho não leva.",
"Acredite que algo maravilhoso está para acontecer.",
"Faça do seu medo um trampolim para a coragem.",
"Você é mais forte do que qualquer desafio.",
"Transforme obstáculos em oportunidades.",
"Se você caiu ontem, levante-se hoje.",
"Cada pequena vitória conta no final da jornada.",
"Não pare até sentir orgulho de si mesmo.",
"Os sonhos só se realizam para quem se atreve a tentar.",
"Quando você acredita, tudo se torna possível.",
"Seja a mudança que deseja ver em sua vida.",
"Confie em seus próprios passos.",
"A verdadeira força vem de dentro.",
"Persistência é o segredo para realizar grandes feitos.",
"Faça o que precisa ser feito, mesmo que seja difícil.",
"Você é capaz de fazer muito mais do que pensa.",
"Olhe para frente e nunca pare de acreditar.",
"Para alcançar o topo, é preciso começar do início.",
"Seja positivo, mesmo em meio às dificuldades.",
"Dê o seu melhor, e o resultado será surpreendente.",
"Seu futuro começa com as escolhas que faz hoje.",
"A única pessoa que pode limitar você é você mesmo.",
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
let lastIndex = -1; // Índice da última frase exibida

function showPhrase() {
    if (isTyping) return;

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * phrases.length);
    } while (randomIndex === lastIndex); // Repete até achar um índice diferente

    lastIndex = randomIndex; // Atualiza o índice da última frase exibida
    const phraseElement = document.getElementById("phrase");
    phraseElement.textContent = '';
    typePhrase(phrases[randomIndex], phraseElement);
}
