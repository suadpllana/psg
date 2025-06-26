import { psgPlayersImages } from '../images';
export const psgPlayers = [
  { id: 1, name: "Gianluigi Donnarumma", position: "Goalkeeper", image: psgPlayersImages.donnarumma },
  { id: 2, name: "Lucas Beraldo", position: "Defender", image: psgPlayersImages.beraldo },
  { id: 3, name: "William Pacho", position: "Defender", image: psgPlayersImages.pacho },
  { id: 4, name: "Achraf Hakimi", position: "Defender", image: psgPlayersImages.hakimi},
  { id: 5, name: "Lucas Hernández", position: "Defender", image: psgPlayersImages.hernandez },
  { id: 6, name: "Vitinha", position: "Midfielder", image: psgPlayersImages.vitinha},
  { id: 7, name: "Warren Zaïre-Emery", position: "Midfielder", image: psgPlayersImages.emery},
  { id: 8, name: "Senny Mayulu", position: "Midfielder", image: psgPlayersImages.mayulu},
  { id: 9, name: "Désiré Doué",position: "Forward", image: psgPlayersImages.doue },
  { id: 10, name: "Khvicha Kvaratskhelia", position: "Forward", image: psgPlayersImages.kvara},
  { id: 11, name: "Gonçalo Ramos", position: "Forward",image: psgPlayersImages.ramos },
  { id: 12, name: "Ousmane Dembélé", position: "Forward",image: psgPlayersImages.dembele },
  { id: 13, name: "Nuno Mendes",   position: "Defender",  image: psgPlayersImages.mendes},
  { id: 14, name: "João Neves", position: "Midfielder", image: psgPlayersImages.neves},
  { id: 15, name: "Marquinhos",   position: "Defender", image: psgPlayersImages.marquinhos },
  { id: 16, name: "Fabián Ruiz", position: "Midfielder", image: psgPlayersImages.ruiz},
  { id: 17, name: "Bradley Barcola", position: "Forward",  image: psgPlayersImages.barcola},
  { id: 18, name: "Kang-in Lee",  position: "Midfielder", image: psgPlayersImages.lee},
  { id: 19, name: "Matvey Safonov", position: "Goalkeeper",  image: psgPlayersImages.safonov},
];

export const quizQuestions = {
  easyQuestions: [
    {
      id: 1,
      question: "In which year was Paris Saint-Germain founded?",
      options: ["1965", "1970", "1975", "1980"],
      correctAnswer: "1970",
      category: "History"
    },
    {
      id: 2,
      question: "How many Ligue 1 titles has PSG won as of the 2024-25 season?",
      options: ["10", "11", "12", "13"],
      correctAnswer: "13",
      category: "Trophies"
    },
    {
      id: 3,
      question: "What is the name of PSG’s home stadium?",
      options: ["Stade de France", "Parc des Princes", "Vélodrome", "Stade Louis II"],
      correctAnswer: "Parc des Princes",
      category: "History"
    },
    {
      id: 4,
      question: "Which rival club does PSG face in the ‘Le Classique’ derby?",
      options: ["Lyon", "Monaco", "Marseille", "Lille"],
      correctAnswer: "Marseille",
      category: "History"
    },
    {
      id: 5,
      question: "In which year did Qatar Sports Investments acquire PSG?",
      options: ["2008", "2011", "2014", "2017"],
      correctAnswer: "2011",
      category: "History"
    },
    {
      id: 6,
      question: "What symbol is featured on PSG’s crest alongside the Eiffel Tower?",
      options: ["Fleur-de-lis", "Sun", "Crown", "Star"],
      correctAnswer: "Fleur-de-lis",
      category: "History"
    },
    {
      id: 7,
      question: "What are the primary colors of PSG’s home kit?",
      options: ["Blue, Red, White", "Green, Yellow, Black", "Red, White, Black", "Blue, White, Gold"],
      correctAnswer: "Blue, Red, White",
      category: "History"
    },
    {
      id: 8,
      question: "In which city is PSG based?",
      options: ["Paris", "Marseille", "Lyon", "Monaco"],
      correctAnswer: "Paris",
      category: "History"
    },
    {
      id: 9,
      question: "What is the name of PSG’s main ultras group?",
      options: ["Collectif Ultras Paris", "Les Titis", "Brigade Sud", "Kop of Boulogne"],
      correctAnswer: "Collectif Ultras Paris",
      category: "History"
    },
    {
      id: 10,
      question: "What was PSG’s status in Ligue 1 for the 2024-25 season?",
      options: ["Champions", "Runners-up", "Relegated", "Mid-table"],
      correctAnswer: "Champions",
      category: "Trophies"
    }
  ],
  intermediateQuestions: [
    {
      id: 1,
      question: "Who has the most games played for PSG?",
      options: ["Verratti", "Neymar", "Marquinhos", "Thiago Silva"],
      correctAnswer: "Marquinhos",
      category: "Players"
    },
    {
      id: 2,
      question: "Which player holds the record for most goals scored for PSG?",
      options: ["Edinson Cavani", "Kylian Mbappé", "Zlatan Ibrahimović", "Neymar"],
      correctAnswer: "Kylian Mbappé",
      category: "Players"
    },
    {
      id: 3,
      question: "Which manager led PSG to their first Champions League title in 2025?",
      options: ["Thomas Tuchel", "Mauricio Pochettino", "Luis Enrique", "Christophe Galtier"],
      correctAnswer: "Luis Enrique",
      category: "History"
    },
    {
      id: 4,
      question: "How many Coupe de France titles has PSG won as of 2024-25?",
      options: ["12", "14", "16", "18"],
      correctAnswer: "16",
      category: "Trophies"
    },
    {
      id: 5,
      question: "Which player was PSG’s captain in the 2024-25 season?",
      options: ["Marquinhos", "Achraf Hakimi", "Vitinha", "Gianluigi Donnarumma"],
      correctAnswer: "Marquinhos",
      category: "Players"
    },
    {
      id: 6,
      question: "How many consecutive Trophée des Champions titles did PSG win from 2013 to 2020?",
      options: ["5", "6", "7", "8"],
      correctAnswer: "8",
      category: "Trophies"
    },
    {
      id: 7,
      question: "Which PSG player surpassed Edinson Cavani’s goal-scoring record on February 26, 2023?",
      options: ["Lionel Messi", "Neymar", "Kylian Mbappé", "Ángel Di María"],
      correctAnswer: "Kylian Mbappé",
      category: "Players"
    },
    {
      id: 8,
      question: "Who led PSG in assists during the 2024-25 season?",
      options: ["Ousmane Dembélé", "Vitinha", "Neymar", "Marco Asensio"],
      correctAnswer: "Ousmane Dembélé",
      category: "Players"
    },
    {
      id: 9,
      question: "Who was PSG’s manager immediately before Luis Enrique?",
      options: ["Christophe Galtier", "Thomas Tuchel", "Unai Emery", "Laurent Blanc"],
      correctAnswer: "Christophe Galtier",
      category: "History"
    },
    {
      id: 10,
      question: "How many Coupe de la Ligue titles has PSG won?",
      options: ["7", "8", "9", "10"],
      correctAnswer: "9",
      category: "Trophies"
    }
  ],
  hardQuestions: [
    {
      id: 1,
      question: "Which competition did PSG win in 1995-96, becoming the only French club to do so?",
      options: ["UEFA Champions League", "UEFA Cup Winners’ Cup", "UEFA Europa League", "UEFA Intertoto Cup"],
      correctAnswer: "UEFA Cup Winners’ Cup",
      category: "Trophies"
    },
    {
      id: 2,
      question: "Who scored twice in PSG’s 5-0 Champions League final win over Inter Milan in 2025?",
      options: ["Gonçalo Ramos", "Désiré Doué", "Khvicha Kvaratskhelia", "Ousmane Dembélé"],
      correctAnswer: "Désiré Doué",
      category: "Matches"
    },
    {
      id: 3,
      question: "Which team did PSG defeat 4-0 in the 2024-25 FIFA Club World Cup group stage?",
      options: ["Botafogo", "Atlético Madrid", "Seattle Sounders", "Inter Miami"],
      correctAnswer: "Atlético Madrid",
      category: "Matches"
    },
    {
      id: 4,
      question: "In which season did PSG win their first Ligue 1 title?",
      options: ["1970-71", "1985-86", "1993-94", "2012-13"],
      correctAnswer: "1985-86",
      category: "Trophies"
    },
    {
      id: 5,
      question: "Who was the top scorer in PSG’s 6-1 Coupe de la Ligue win over Saint-Étienne in 2020?",
      options: ["Kylian Mbappé", "Neymar", "Edinson Cavani", "Mauro Icardi"],
      correctAnswer: "Mauro Icardi",
      category: "Matches"
    },
    {
      id: 6,
      question: "Which player joined PSG for £70m in January 2025, boosting their Champions League campaign?",
      options: ["Désiré Doué", "Khvicha Kvaratskhelia", "Gonçalo Ramos", "Vitinha"],
      correctAnswer: "Khvicha Kvaratskhelia",
      category: "Players"
    },
    {
      id: 7,
      question: "Which team did PSG defeat 7-0 in the 2024-25 Champions League?",
      options: ["Arsenal", "Brest", "Liverpool", "Aston Villa"],
      correctAnswer: "Brest",
      category: "Matches"
    },
    {
      id: 8,
      question: "Which team did PSG face in their first Champions League final in 2020?",
      options: ["Bayern Munich", "Real Madrid", "Manchester City", "Chelsea"],
      correctAnswer: "Bayern Munich",
      category: "Matches"
    },
    {
      id: 9,
      question: "In which year did PSG reach the Champions League semifinals under Mauricio Pochettino?",
      options: ["2019", "2020", "2021", "2022"],
      correctAnswer: "2021",
      category: "History"
    },
    {
      id: 10,
      question: "Who scored PSG’s first goal in the 2025 FIFA Club World Cup?",
      options: ["Gonçalo Ramos", "Fabian Ruiz", "Désiré Doué", "Bradley Barcola"],
      correctAnswer: "Fabian Ruiz",
      category: "Matches"
    }
  ]
};


export const formations = {
  '4-3-3': [
    { id: 0, role: 'gk', x: 50, y: 92 }, // Goalkeeper
    { id: 1, role: 'def', x: 25, y: 60 }, // Left Back
    { id: 2, role: 'def', x: 40, y: 62 }, // Center Back
    { id: 3, role: 'def', x: 60, y: 62 }, // Center Back
    { id: 4, role: 'def', x: 75, y: 60 }, // Right Back
    { id: 5, role: 'mid', x: 35, y: 42 }, // Central Midfielder
    { id: 6, role: 'mid', x: 50, y: 42 }, // Central Midfielder
    { id: 7, role: 'mid', x: 65, y: 42 }, // Central Midfielder
    { id: 8, role: 'fwd', x: 35, y: 15 }, // Left Winger
    { id: 9, role: 'fwd', x: 65, y: 15 }, // Right Winger
    { id: 10, role: 'fwd', x: 50, y: 15 } // Striker
  ],
  '4-4-2': [
    { id: 0, role: 'gk', x: 50, y: 90 }, // Goalkeeper
    { id: 1, role: 'def', x: 20, y: 70 }, // Left Back
    { id: 2, role: 'def', x: 35, y: 70 }, // Center Back
    { id: 3, role: 'def', x: 65, y: 70 }, // Center Back
    { id: 4, role: 'def', x: 80, y: 70 }, // Right Back
    { id: 5, role: 'mid', x: 25, y: 50 }, // Left Midfielder
    { id: 6, role: 'mid', x: 40, y: 50 }, // Central Midfielder
    { id: 7, role: 'mid', x: 60, y: 50 }, // Central Midfielder
    { id: 8, role: 'mid', x: 75, y: 50 }, // Right Midfielder
    { id: 9, role: 'fwd', x: 40, y: 30 }, // Striker
    { id: 10, role: 'fwd', x: 60, y: 30 } // Striker
  ],
  '5-3-2': [
    { id: 0, role: 'gk', x: 50, y: 90 }, // Goalkeeper
    { id: 1, role: 'def', x: 20, y: 70 }, // Left Back
    { id: 2, role: 'def', x: 35, y: 70 }, // Center Back
    { id: 3, role: 'def', x: 50, y: 70 }, // Center Back
    { id: 4, role: 'def', x: 65, y: 70 }, // Center Back
    { id: 5, role: 'def', x: 80, y: 70 }, // Right Back
    { id: 6, role: 'mid', x: 35, y: 50 }, // Central Midfielder
    { id: 7, role: 'mid', x: 50, y: 50 }, // Central Midfielder
    { id: 8, role: 'mid', x: 65, y: 50 }, // Central Midfielder
    { id: 9, role: 'fwd', x: 40, y: 30 }, // Striker
    { id: 10, role: 'fwd', x: 60, y: 30 } // Striker
  ],
  '3-4-3': [
    { id: 0, role: 'gk', x: 50, y: 92 }, // Goalkeeper
    { id: 1, role: 'def', x: 35, y: 75 }, // Left Center Back
    { id: 2, role: 'def', x: 50, y: 75 }, // Center Back
    { id: 3, role: 'def', x: 65, y: 75 }, // Right Center Back
    { id: 4, role: 'mid', x: 25, y: 55 }, // Left Midfielder
    { id: 5, role: 'mid', x: 40, y: 55 }, // Central Midfielder
    { id: 6, role: 'mid', x: 60, y: 55 }, // Central Midfielder
    { id: 7, role: 'mid', x: 75, y: 55 }, // Right Midfielder
    { id: 8, role: 'fwd', x: 30, y: 35 }, // Left Winger
    { id: 9, role: 'fwd', x: 50, y: 35 }, // Striker
    { id: 10, role: 'fwd', x: 70, y: 35 } // Right Winger
  ],
  '3-5-2': [
    { id: 0, role: 'gk', x: 50, y: 92 }, // Goalkeeper
    { id: 1, role: 'def', x: 35, y: 75 }, // Left Center Back
    { id: 2, role: 'def', x: 50, y: 75 }, // Center Back
    { id: 3, role: 'def', x: 65, y: 75 }, // Right Center Back
    { id: 4, role: 'mid', x: 20, y: 55 }, // Left Midfielder
    { id: 5, role: 'mid', x: 35, y: 55 }, // Left Central Midfielder
    { id: 6, role: 'mid', x: 50, y: 55 }, // Central Midfielder
    { id: 7, role: 'mid', x: 65, y: 55 }, // Right Central Midfielder
    { id: 8, role: 'mid', x: 80, y: 55 }, // Right Midfielder
    { id: 9, role: 'fwd', x: 40, y: 35 }, // Striker
    { id: 10, role: 'fwd', x: 60, y: 35 } // Striker
  ],
  '4-2-3-1': [
    { id: 0, role: 'gk', x: 50, y: 92 }, // Goalkeeper
    { id: 1, role: 'def', x: 25, y: 75 }, // Left Back
    { id: 2, role: 'def', x: 40, y: 75 }, // Center Back
    { id: 3, role: 'def', x: 60, y: 75 }, // Center Back
    { id: 4, role: 'def', x: 75, y: 75 }, // Right Back
    { id: 5, role: 'mid', x: 35, y: 55 }, // Defensive Midfielder
    { id: 6, role: 'mid', x: 65, y: 55 }, // Defensive Midfielder
    { id: 7, role: 'mid', x: 30, y: 35 }, // Left Attacking Midfielder
    { id: 8, role: 'mid', x: 50, y: 35 }, // Attacking Midfielder
    { id: 9, role: 'mid', x: 70, y: 35 }, // Right Attacking Midfielder
    { id: 10, role: 'fwd', x: 50, y: 15 } // Striker
  ],
  '3-4-1-2': [
    { id: 0, role: 'gk', x: 50, y: 92 }, // Goalkeeper
    { id: 1, role: 'def', x: 35, y: 75 }, // Left Center Back
    { id: 2, role: 'def', x: 50, y: 75 }, // Center Back
    { id: 3, role: 'def', x: 65, y: 75 }, // Right Center Back
    { id: 4, role: 'mid', x: 25, y: 55 }, // Left Midfielder
    { id: 5, role: 'mid', x: 40, y: 55 }, // Central Midfielder
    { id: 6, role: 'mid', x: 60, y: 55 }, // Central Midfielder
    { id: 7, role: 'mid', x: 75, y: 55 }, // Right Midfielder
    { id: 8, role: 'mid', x: 50, y: 35 }, // Attacking Midfielder
    { id: 9, role: 'fwd', x: 40, y: 15 }, // Striker
    { id: 10, role: 'fwd', x: 60, y: 15 } // Striker
  ],
  '4-5-1': [
    { id: 0, role: 'gk', x: 50, y: 92 }, // Goalkeeper
    { id: 1, role: 'def', x: 25, y: 75 }, // Left Back
    { id: 2, role: 'def', x: 40, y: 75 }, // Center Back
    { id: 3, role: 'def', x: 60, y: 75 }, // Center Back
    { id: 4, role: 'def', x: 75, y: 75 }, // Right Back
    { id: 5, role: 'mid', x: 20, y: 55 }, // Left Midfielder
    { id: 6, role: 'mid', x: 35, y: 55 }, // Left Central Midfielder
    { id: 7, role: 'mid', x: 50, y: 55 }, // Central Midfielder
    { id: 8, role: 'mid', x: 65, y: 55 }, // Right Central Midfielder
    { id: 9, role: 'mid', x: 80, y: 55 }, // Right Midfielder
    { id: 10, role: 'fwd', x: 50, y: 35 } // Striker
  ],
  '5-4-1': [
    { id: 0, role: 'gk', x: 50, y: 92 }, // Goalkeeper
    { id: 1, role: 'def', x: 20, y: 75 }, // Left Back
    { id: 2, role: 'def', x: 35, y: 75 }, // Center Back
    { id: 3, role: 'def', x: 50, y: 75 }, // Center Back
    { id: 4, role: 'def', x: 65, y: 75 }, // Center Back
    { id: 5, role: 'def', x: 80, y: 75 }, // Right Back
    { id: 6, role: 'mid', x: 25, y: 55 }, // Left Midfielder
    { id: 7, role: 'mid', x: 40, y: 55 }, // Central Midfielder
    { id: 8, role: 'mid', x: 60, y: 55 }, // Central Midfielder
    { id: 9, role: 'mid', x: 75, y: 55 }, // Right Midfielder
    { id: 10, role: 'fwd', x: 50, y: 35 } // Striker
  ],
  '3-3-3-1': [
    { id: 0, role: 'gk', x: 50, y: 92 }, // Goalkeeper
    { id: 1, role: 'def', x: 35, y: 75 }, // Left Center Back
    { id: 2, role: 'def', x: 50, y: 75 }, // Center Back
    { id: 3, role: 'def', x: 65, y: 75 }, // Right Center Back
    { id: 4, role: 'mid', x: 30, y: 55 }, // Left Midfielder
    { id: 5, role: 'mid', x: 50, y: 55 }, // Central Midfielder
    { id: 6, role: 'mid', x: 70, y: 55 }, // Right Midfielder
    { id: 7, role: 'mid', x: 25, y: 35 }, // Left Attacking Midfielder
    { id: 8, role: 'mid', x: 50, y: 35 }, // Central Attacking Midfielder
    { id: 9, role: 'mid', x: 75, y: 35 }, // Right Attacking Midfielder
    { id: 10, role: 'fwd', x: 50, y: 15 } // Striker
  ],
  '4-3-2-1': [
    { id: 0, role: 'gk', x: 50, y: 92 }, // Goalkeeper
    { id: 1, role: 'def', x: 25, y: 75 }, // Left Back
    { id: 2, role: 'def', x: 40, y: 75 }, // Center Back
    { id: 3, role: 'def', x: 60, y: 75 }, // Center Back
    { id: 4, role: 'def', x: 75, y: 75 }, // Right Back
    { id: 5, role: 'mid', x: 35, y: 55 }, // Left Central Midfielder
    { id: 6, role: 'mid', x: 50, y: 55 }, // Central Midfielder
    { id: 7, role: 'mid', x: 65, y: 55 }, // Right Central Midfielder
    { id: 8, role: 'mid', x: 40, y: 35 }, // Left Attacking Midfielder
    { id: 9, role: 'mid', x: 60, y: 35 }, // Right Attacking Midfielder
    { id: 10, role: 'fwd', x: 50, y: 15 } // Striker
  ],
  '5-2-2-1': [
    { id: 0, role: 'gk', x: 50, y: 92 }, // Goalkeeper
    { id: 1, role: 'def', x: 20, y: 75 }, // Left Back
    { id: 2, role: 'def', x: 35, y: 75 }, // Center Back
    { id: 3, role: 'def', x: 50, y: 75 }, // Center Back
    { id: 4, role: 'def', x: 65, y: 75 }, // Center Back
    { id: 5, role: 'def', x: 80, y: 75 }, // Right Back
    { id: 6, role: 'mid', x: 35, y: 55 }, // Left Midfielder
    { id: 7, role: 'mid', x: 65, y: 55 }, // Right Midfielder
    { id: 8, role: 'mid', x: 40, y: 35 }, // Left Attacking Midfielder
    { id: 9, role: 'mid', x: 60, y: 35 }, // Right Attacking Midfielder
    { id: 10, role: 'fwd', x: 50, y: 15 } // Striker
  ],
  '3-5-1-1': [
    { id: 0, role: 'gk', x: 50, y: 92 }, // Goalkeeper
    { id: 1, role: 'def', x: 35, y: 75 }, // Left Center Back
    { id: 2, role: 'def', x: 50, y: 75 }, // Center Back
    { id: 3, role: 'def', x: 65, y: 75 }, // Right Center Back
    { id: 4, role: 'mid', x: 20, y: 55 }, // Left Midfielder
    { id: 5, role: 'mid', x: 35, y: 55 }, // Left Central Midfielder
    { id: 6, role: 'mid', x: 50, y: 55 }, // Central Midfielder
    { id: 7, role: 'mid', x: 65, y: 55 }, // Right Central Midfielder
    { id: 8, role: 'mid', x: 80, y: 55 }, // Right Midfielder
    { id: 9, role: 'mid', x: 50, y: 35 }, // Attacking Midfielder
    { id: 10, role: 'fwd', x: 50, y: 15 } // Striker
  ]
};