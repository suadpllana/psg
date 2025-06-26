import { teams } from './../images';
import { cwcTeams } from './../Fun/cwcTeams';

export const topScorersAndAssisters = [
  {
    season: "2022-23",
    players: [
      {
        id: 1,
        name: "Kylian Mbappé",
        nationality: "France",
        position: "Forward",
        goals: 41,
        assists: 10,
        matchesPlayed: 43,
        competition: "All Competitions"
      },
      {
        id: 2,
        name: "Lionel Messi",
        nationality: "Argentina",
        position: "Forward",
        goals: 21,
        assists: 20,
        matchesPlayed: 41,
        competition: "All Competitions"
      },
      {
        id: 3,
        name: "Neymar Jr",
        nationality: "Brazil",
        position: "Forward",
        goals: 18,
        assists: 17,
        matchesPlayed: 29,
        competition: "All Competitions"
      }
    ]
  },
  
  // 2023-24 Season
  {
    season: "2023-24",
    players: [
      {
        id: 1,
        name: "Kylian Mbappé",
        nationality: "France",
        position: "Forward",
        goals: 44,
        assists: 8,
        matchesPlayed: 48,
        competition: "All Competitions"
      },
         {
        id: 2,
        name: "Goncalo Ramos",
        nationality: "Portugal",
        position: "Midfielder",
        goals: 14,
        assists: 3,
        matchesPlayed: 45,
        competition: "All Competitions"
      },
      {
        id: 3,
        name: "Ousmane Dembélé",
        nationality: "France",
        position: "Forward",
        goals: 5,
        assists: 6,
        matchesPlayed: 42,
        competition: "All Competitions"
      },
   
      
    ]
  },
  
  {
    season: "2024-25",
    players: [
      {
        id: 1,
        name: "Ousmane Dembele",
        nationality: "France",
        position: "Forward",
        goals: 38,
        assists: 15,
        matchesPlayed: 42,
        competition: "All Competitions"
      },
      {
        id: 2,
        name: "Bradley Barcola",
        nationality: "France",
        position: "Forward",
        goals: 18,
        assists: 12,
        matchesPlayed: 39,
        competition: "All Competitions"
      },
      
      {
        id: 5,
        name: "Desire Doue",
        nationality: "France",
        position: "Forward",
        goals: 10,
        assists: 10,
        matchesPlayed: 36,
        competition: "All Competitions"
      }
    ]
  }
];

export const legendsInfo = [
 {
  id: 1,
  name: "Marquinhos",
  role: "Defender",
  nationality: "Brazil",
  yearsActive: "2013–Present",
  achievements: [
    "PSG captain since 2020",
    "Most appearances by a foreign player in PSG history",
    "8 Ligue 1 titles (2014, 2015, 2016, 2018, 2019, 2020, 2022, 2024)",
    "6 Coupe de France titles (2015, 2016, 2017, 2018, 2020, 2021)",
    "4 Coupe de la Ligue titles (2015, 2016, 2017, 2018)",
    "UEFA Champions League Finalist (2020)"
  ]
},

  {
    id: 2,
    name: "Zlatan Ibrahimović",
    role: "Forward",
    nationality: "Sweden",
    yearsActive: "2012-2016",
    achievements: [
      "Most goals in a season: 50 (2015-16, National Record)",
      "Most goals in a Ligue 1 season: 38 (2015-16)",
      "Most goals in a UEFA competitions season: 10 (2013-14 UEFA Champions League)",
      "4 Ligue 1 titles (2013, 2014, 2015, 2016)",
      "2 Coupe de France titles (2015, 2016)"
    ]
  },
  {
    id: 3,
    name: "Ángel Di María",
    role: "Midfielder",
    nationality: "Argentina",
    yearsActive: "2015-2022",
    achievements: [
      "All-time assist leader for PSG",
      "Most assists in a Ligue 1 season: 18 (2015-16, National Record)",
      "5 Ligue 1 titles (2016, 2018, 2019, 2020, 2022)",
      "4 Coupe de France titles (2016, 2017, 2018, 2020)"
    ]
  },
  {
    id: 4,
    name: "Thiago Silva",
    role: "Defender",
    nationality: "Brazil",
    yearsActive: "2012-2020",
    achievements: [
      "Most capped and longest-serving captain (7 years, 10 months)",
      "7 Ligue 1 titles (2013, 2014, 2015, 2016, 2018, 2019, 2020)",
      "5 Coupe de France titles (2015, 2016, 2017, 2018, 2020)",
      "Record appearance maker in UEFA competitions"
    ]
  },
  {
    id: 5,
    name: "Laurent Blanc",
    role: "Manager",
    nationality: "France",
    yearsActive: "2013-2016",
    achievements: [
      "Most decorated manager with 11 titles",
      "2 domestic quadruples (2014-15, 2015-16)",
      "3 Ligue 1 titles (2014, 2015, 2016)",
      "3 Coupe de France titles (2015, 2016)",
      "Most points in Ligue 1: 96 (2015-16, National Record)"
    ]
  },
  {
  id: 6,
  name: "Marco Verratti",
  role: "Midfielder",
  nationality: "Italy",
  yearsActive: "2012–2023",
  achievements: [
    "Third all-time appearance maker for PSG",
    "9 Ligue 1 titles (record for a PSG player)",
    "6 Coupe de France titles (2015, 2016, 2017, 2018, 2020, 2021)",
    "6 Coupe de la Ligue titles (2014–2018, 2020)",
    "UEFA Champions League Finalist (2020)",
    "Known for elite ball control and press resistance"
  ]
}

];

export const standingsPerCompetition = [
 {id: 1,
    competition: "Ligue 1",
    season: "2024-25",
    teams: [
      { position: 1, name: "PSG",image: teams.psg , matchesPlayed: 34, wins: 26, draws: 6, losses: 2, goalsScored: 92, goalsConceded: 35, points: 84 },
      { position: 2, name: "Marseille", image: teams.marseille ,matchesPlayed: 34, wins: 20, draws: 5, losses: 9, goalsScored: 74, goalsConceded: 47, points: 73 },
      { position: 3, name: "Monaco",image: teams.monaco ,matchesPlayed: 34, wins: 20, draws: 8, losses: 6, goalsScored: 65, goalsConceded: 32, points: 68 },
      { position: 4, name: "Lille",image: teams.lille, matchesPlayed: 34, wins: 18, draws: 9, losses: 7, goalsScored: 60, goalsConceded: 38, points: 63 },
      { position: 5, name: "Lyon",image: teams.lyon ,matchesPlayed: 34, wins: 17, draws: 8, losses: 9, goalsScored: 58, goalsConceded: 45, points: 59 },
      { position: 6, name: "Nice", image: teams.nice, matchesPlayed: 34, wins: 16, draws: 7, losses: 11, goalsScored: 50, goalsConceded: 40, points: 55 },
      { position: 7, name: "Lens",image: teams.lens, matchesPlayed: 34, wins: 15, draws: 8, losses: 11, goalsScored: 48, goalsConceded: 42, points: 53 },
      { position: 8, name: "Rennes",image: teams.rennes, matchesPlayed: 34, wins: 14, draws: 9, losses: 11, goalsScored: 55, goalsConceded: 48, points: 51 },
      { position: 9, name: "Strasbourg",image: teams.strasbourg, matchesPlayed: 34, wins: 13, draws: 8, losses: 13, goalsScored: 47, goalsConceded: 50, points: 47 },
      { position: 10, name: "Reims",image: teams.reims, matchesPlayed: 34, wins: 12, draws: 9, losses: 13, goalsScored: 45, goalsConceded: 52, points: 45 },
      { position: 11, name: "Brest", image: teams.brest, matchesPlayed: 34, wins: 11, draws: 10, losses: 13, goalsScored: 43, goalsConceded: 55, points: 43 },
      { position: 12, name: "Toulouse", image: teams.toulouse, matchesPlayed: 34, wins: 10, draws: 9, losses: 15, goalsScored: 40, goalsConceded: 58, points: 39 },
      { position: 13, name: "Nantes", image: teams.nantes, matchesPlayed: 34, wins: 9, draws: 10, losses: 15, goalsScored: 38, goalsConceded: 60, points: 37 },
      { position: 14, name: "Montpellier", image: teams.montpellier, matchesPlayed: 34, wins: 8, draws: 9, losses: 17, goalsScored: 35, goalsConceded: 65, points: 33 },
      { position: 15, name: "Le Havre", image: teams.lehavre, matchesPlayed: 34, wins: 7, draws: 10, losses: 17, goalsScored: 32, goalsConceded: 68, points: 31 },
      { position: 16, name: "Angers", image: teams.angers, matchesPlayed: 34, wins: 6, draws: 9, losses: 19, goalsScored: 30, goalsConceded: 70, points: 27 },
      { position: 17, name: "Saint-etienne", image: teams.saintetienne, matchesPlayed: 34, wins: 5, draws: 8, losses: 21, goalsScored: 28, goalsConceded: 75, points: 23 },
      { position: 18, name: "Auxerre", image: teams.auxerre, matchesPlayed: 34, wins: 4, draws: 7, losses: 23, goalsScored: 25, goalsConceded: 80, points: 19 }
    ],
    status: "Champions"
  },
  {
    id: 2,
    competition: "UEFA Champions League",
    season: "2024-25",
    teams: [
      { position: 1, name: "PSG", image: teams.psg, matchesPlayed: 6, wins: 5, draws: 0, losses: 1, goalsScored: 15, goalsConceded: 5, points: 15 },
      { position: 2, name: "Inter", image: teams.inter, matchesPlayed: 6, wins: 4, draws: 1, losses: 1, goalsScored: 12, goalsConceded: 6, points: 13 },
      { position: 3, name: "Barcelona",image: teams.barcelona, matchesPlayed: 6, wins: 3, draws: 2, losses: 1, goalsScored: 10, goalsConceded: 7, points: 11 },
      { position: 4, name: "Arsenal",  image: teams.arsenal, matchesPlayed: 6, wins: 0, draws: 1, losses: 5, goalsScored: 3, goalsConceded: 12, points: 1 },
      { position: 5, name: "Real Madrid", image: cwcTeams.realmadrid, matchesPlayed: 6, wins: 4, draws: 1, losses: 1, goalsScored: 11, goalsConceded: 4, points: 13 },
      { position: 6, name: "Dortmund", image: cwcTeams.dortmund, matchesPlayed: 6, wins: 3, draws: 2, losses: 1, goalsScored: 9, goalsConceded: 5, points: 11 },
      { position: 7, name: "Aston Villa", image: teams.astonvilla, matchesPlayed: 6, wins: 2, draws: 3, losses: 1, goalsScored: 8, goalsConceded: 6, points: 9 },
      { position: 8, name: "Bayern Munchen", image: cwcTeams.bayern, matchesPlayed: 6, wins: 1, draws: 2, losses: 3, goalsScored: 5, goalsConceded: 9, points: 5 }
    ],
    status: "Champions (Won 5-0 vs. Inter Milan in final)"
  },
   {
    id: 3,
    competition: "FIFA Club World Cup",
    season: "2024-25",
    status: "Ongoing (Group Stage in Progress)",
    teams: [
        // Group A
        { group: "A", position: 1, name: "Palmeiras",  image: cwcTeams.palmeiras, matchesPlayed: 3, wins: 1, draws: 2, losses: 0, goalsScored: 4, goalsConceded: 3, points: 5 },
        { group: "A", position: 2, name: "Inter Miami", image: cwcTeams.intermiami , matchesPlayed: 3, wins: 1, draws: 2, losses: 0, goalsScored: 4, goalsConceded: 2, points: 5 },
        { group: "A", position: 3, name: "Al Ahly", image: cwcTeams.alahly , matchesPlayed: 3, wins: 0, draws: 2, losses: 1, goalsScored: 4, goalsConceded: 6, points: 2 },
        { group: "A", position: 4, name: "Porto",image: cwcTeams.porto , matchesPlayed: 3, wins: 0, draws: 2, losses: 1, goalsScored: 5, goalsConceded: 6, points: 2 },
        // Group B
        { group: "B", position: 1, name: "Paris Saint-Germain",image: cwcTeams.psg , matchesPlayed: 3, wins: 2, draws: 0, losses: 1, goalsScored: 6, goalsConceded: 1, points: 6 },
        { group: "B", position: 2, name: "Botafogo",image: cwcTeams.botafogo , matchesPlayed: 3, wins: 2, draws: 0, losses: 1, goalsScored: 3, goalsConceded: 2, points: 6 },
        { group: "B", position: 3, name: "Atletico Madrid",image: cwcTeams.atletico , matchesPlayed: 3, wins: 2, draws: 0, losses: 1, goalsScored: 4, goalsConceded: 5, points: 6 },
        { group: "B", position: 4, name: "Seattle Sounders",image: cwcTeams.seattlesounders , matchesPlayed: 3, wins: 0, draws: 0, losses: 3, goalsScored: 2, goalsConceded:7, points: 0 },
        // Group C
        { group: "C", position: "1", name: "Benfica",image: cwcTeams.benfica , matchesPlayed: 2, wins: 2, draws: 1, losses: 0, goalsScored: 8, goalsConceded: 2, points: 7 },
        { group: "C", position:"2", name: "Bayern Munich", image: cwcTeams.bayern ,matchesPlayed: 2, wins: 2, draws: 0, losses: 0, goalsScored: 11, goalsConceded: 1, points: 6 },
        { group: "C", position: "3", name: "Boca Juniors",image: cwcTeams.bocajuniors , matchesPlayed: 2, wins: 0, draws: 1, losses: 1, goalsScored: 2, goalsConceded: 3, points: 1 },
        { group: "C", position: "4", name: "Auckland City",image: cwcTeams.auckland , matchesPlayed: 2, wins: 0, draws: 0, losses: 2, goalsScored: 0, goalsConceded: 16, points: 0 },
        // Group D
        { group: "D", position: "1", name: "Flamengo",image: cwcTeams.flamengo , matchesPlayed: 2, wins: 2, draws: 0, losses: 0, goalsScored: 5, goalsConceded: 1, points: 6 },
        { group: "D", position: "2", name: "Chelsea",image: cwcTeams.chelsea , matchesPlayed: 2, wins: 1, draws: 0, losses: 1, goalsScored: 3, goalsConceded: 3, points: 3 },
        { group: "D", position: "3", name: "Espérance",image: cwcTeams.tunis , matchesPlayed: 2, wins: 1, draws: 0, losses: 1, goalsScored: 1, goalsConceded: 2, points: 3 },
        { group: "D", position: "4", name: "LAFC",image: cwcTeams.lafc , matchesPlayed: 2, wins: 0, draws: 0, losses: 2, goalsScored: 0, goalsConceded: 3, points: 0 },
        // Group E
        { group: "E", position: "1", name: "River Plate",image: cwcTeams.riverplate , matchesPlayed: 2, wins: 1, draws: 1, losses: 0, goalsScored: 3, goalsConceded: 1, points: 4 },
        { group: "E", position: "2", name: "Inter", image: cwcTeams.inter ,matchesPlayed: 2, wins: 1, draws: 1, losses: 0, goalsScored: 3, goalsConceded: 2, points: 4 },
        { group: "E", position: "3", name: "Monterrey",image: cwcTeams.monterrey , matchesPlayed: 2, wins: 0, draws: 2, losses: 0, goalsScored: 1, goalsConceded: 1, points: 2 },
        { group: "E", position: "4", name: "Urawa Red Diamonds",image: cwcTeams.urawaredds , matchesPlayed: 2, wins: 0, draws: 0, losses: 2, goalsScored: 2, goalsConceded: 5, points: 0 },
        // Group F
        { group: "F", position: "1", name: "Borussia Dortmund", image: cwcTeams.dortmund ,matchesPlayed: 2, wins: 1, draws: 1, losses: 0, goalsScored: 4, goalsConceded: 3, points: 4 },
        { group: "F", position: "2", name: "Fluminense",image: cwcTeams.fluminense , matchesPlayed: 2, wins: 1, draws: 1, losses: 0, goalsScored: 4, goalsConceded: 2, points: 4 },
        { group: "F", position: "3", name: "Mamelodi Sundowns",image: cwcTeams.mamelodi , matchesPlayed: 2, wins: 1, draws: 0, losses: 1, goalsScored: 4, goalsConceded: 4, points: 3 },
        { group: "F", position: "4", name: "Ulsan Hyundai", image: cwcTeams.ulsan ,matchesPlayed: 2, wins: 0, draws: 0, losses: 2, goalsScored: 2, goalsConceded: 5, points: 0 },
        // Group G
        { group: "G", position: "1", name: "Manchester City",image: cwcTeams.mancity , matchesPlayed: 2, wins: 2, draws: 0, losses: 0, goalsScored: 8, goalsConceded: 0, points: 6 },
        { group: "G", position: "2", name: "Juventus",image: cwcTeams.juventus , matchesPlayed: 2, wins: 2, draws: 0, losses: 0, goalsScored: 9, goalsConceded: 1, points: 6 },
        { group: "G", position: "3", name: "Wydad AC", image: cwcTeams.wydad ,matchesPlayed: 2, wins: 0, draws: 0, losses: 2, goalsScored: 1, goalsConceded: 6, points: 0 },
        { group: "G", position: "4", name: "Al Ain", image: cwcTeams.alain ,matchesPlayed: 2, wins: 0, draws: 0, losses: 2, goalsScored: 0, goalsConceded: 11, points: 0 },
        // Group H
        { group: "H", position: "1", name: "Real Madrid",image: cwcTeams.realmadrid , matchesPlayed: 2, wins: 1, draws: 1, losses: 0, goalsScored: 4, goalsConceded: 2, points: 4 },
        { group: "H", position: "2", name: "RB Salzburg", image: cwcTeams.salzburg ,matchesPlayed: 2, wins: 1, draws: 1, losses: 0, goalsScored: 2, goalsConceded: 1, points: 4 },
        { group: "H", position: "3", name: "Al Hilal",image: cwcTeams.alhilal , matchesPlayed: 2, wins: 0, draws: 2, losses: 0, goalsScored: 1, goalsConceded: 1, points: 2 },
        { group: "H", position: "4", name: "Pachuca",image: cwcTeams.pachuca , matchesPlayed: 2, wins: 0, draws: 0, losses: 2, goalsScored: 2, goalsConceded: 5, points: 0 }
    ]

}
];