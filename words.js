const words = [
    { word: "abacaxi", clue: "Fruta tropical" },
    { word: "elefante", clue: "Animal de grande porte" },
    { word: "computador", clue: "Dispositivo eletrônico" },
    { word: "girafa", clue: "Animal alto, com pescoço longo" },
    { word: "chocolate", clue: "Doce feito de cacau" },
    { word: "piano", clue: "Instrumento musical com teclas" },
    { word: "tigre", clue: "Felino selvagem" },
    { word: "esmeralda", clue: "Tipo de pedra preciosa" },
    { word: "navio", clue: "Embarcação no mar" },
    { word: "telefone", clue: "Dispositivo de comunicação" },
    { word: "floresta", clue: "Área com muitas árvores" },
    { word: "quadrado", clue: "Figura geométrica de quatro lados" },
    { word: "foguete", clue: "Veículo espacial" },
    { word: "sorvete", clue: "Doce gelado" },
    { word: "bicicleta", clue: "Veículo de duas rodas" },
    { word: "avião", clue: "Meio de transporte aéreo" },
    { word: "macaco", clue: "Primate arbóreo" },
    { word: "raios", clue: "Descargas elétricas na atmosfera" },
    { word: "montanha", clue: "Elevação natural da terra" },
    { word: "vídeo-Game", clue: "Usa uma TV e um controle" },
    { word: "mouse", clue: "Seta do computador" },
    { word: "ventilador", clue: "Que vento bom!" },
    { word: "bolsa", clue: "Carrega coisas" },
    { word: "escola", clue: "Aprender é sempre bom" },
    { word: "casa", clue: "Pessoas moram" },
    { word: "cama", clue: "É o seu melhor amigo quando está cansado" },
    { word: "cadeira", clue: "Tem quatro pernas" },
    { word: "palavra", clue: "Palavra" },
    { word: "prédio", clue: "É dificil" },
    { word: "edifício", clue: "Um prédio bem grande" },
    { word: "caverna", clue: "Objeto para iluminação" },
    { word: "cola", clue: "Gruda bem" },
    { word: "papelão", clue: "Papel grande" },
  ];
  
  export default function getWord() {
    const index = Math.floor(Math.random() * words.length);
    return words[index];
  }
  