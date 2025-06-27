import { teams } from './../images';
import { cwcTeams } from './../Fun/cwcTeams';

export const matchesInfo = [
  {
    "id": 1,
    "date": "2024-08-16",
    "time": "20:45",
    "competition": "Ligue 1",
    "homeTeam": "Le Havre",
    "homeTeamImage": teams.lehavre,
    "awayTeam": "PSG",
    "awayTeamImage": teams.psg,
    "score": "1-4",
    "venue": "Stade Océane",
    "status": "completed",
    "goals": [
      { "player": "Lee Kang-in", "minute": 3, "team": "PSG" },
      { "player": "Gautier Lloris", "minute": 48, "team": "Le Havre" },
      { "player": "Ousmane Dembélé", "minute": 85, "team": "PSG" },
      { "player": "Bradley Barcola", "minute": 86, "team": "PSG" },
      { "player": "Randal Kolo Muani", "minute": 90, "team": "PSG", "type": "penalty" }
    ],
    "lineup": {
      "PSG": ["Donnarumma", "Hakimi", "Pacho", "Beraldo", "Zague", "Zaïre-Emery", "Vitinha", "Asensio", "Lee Kang-in", "Ramos", "Kolo Muani"],
      "Le_Havre": ["Desmas", "Nego", "Youte Kinkoue", "Lloris", "Operi", "Kuziaev", "Touré", "Ndiaye", "Kechta", "Casimir", "Joujou"]
    }
  },
  {
    "id": 2,
    "date": "2024-08-23",
    "time": "20:45",
    "competition": "Ligue 1",
    "homeTeam": "PSG",
    "homeTeamImage": teams.psg,
    "awayTeam": "Montpellier",
    "awayTeamImage": teams.montpellier,
    "score": "6-0",
    "venue": "Parc des Princes",
    "status": "completed",
    "goals": [
      { "player": "Bradley Barcola", "minute": 4, "team": "PSG" },
      { "player": "Marco Asensio", "minute": 24, "team": "PSG" },
      { "player": "Bradley Barcola", "minute": 53, "team": "PSG" },
      { "player": "Achraf Hakimi", "minute": 58, "team": "PSG" },
      { "player": "Warren Zaïre-Emery", "minute": 60, "team": "PSG" },
      { "player": "Lee Kang-in", "minute": 82, "team": "PSG" }
    ],
    "lineup": {
      "PSG": ["Donnarumma", "Hakimi", "Pacho", "Beraldo", "Nuno Mendes", "Vitinha", "Zaïre-Emery", "Lee Kang-in", "Asensio", "Kolo Muani", "Barcola"],
      "Montpellier": ["Lecomte", "Tchato", "Omeragic", "Sagnan", "Sacko", "Chotard", "Ferri", "Savanier", "Nordin", "Khazri", "Al-Tamari"]
    }
  },
  {
    "id": 3,
    "date": "2024-09-01",
    "time": "20:45",
    "competition": "Ligue 1",
    "homeTeam": "Lille",
    "homeTeamImage": teams.lille,
    "awayTeam": "PSG",
    "awayTeamImage": teams.psg,
    "score": "1-3",
    "venue": "Decathlon Arena",
    "status": "completed",
    "goals": [
      { "player": "Vitinha", "minute": 33, "team": "PSG", "type": "penalty" },
      { "player": "Bradley Barcola", "minute": 36, "team": "PSG" },
      { "player": "Edon Zhegrova", "minute": 78, "team": "Lille" },
      { "player": "Randal Kolo Muani", "minute": 90, "team": "PSG" }
    ],
    "lineup": {
      "PSG": ["Donnarumma", "Hakimi", "Marquinhos", "Pacho", "Nuno Mendes", "Vitinha", "Zaïre-Emery", "Fabián Ruiz", "Dembélé", "Ramos", "Barcola"],
      "Lille": ["Chevalier", "Meunier", "Diakité", "Alexsandro", "Gudmundsson", "André", "Santos", "Zhegrova", "Haraldsson", "Cabella", "David"]
    }
  },
  {
    "id": 4,
    "date": "2024-09-14",
    "time": "21:00",
    "competition": "Ligue 1",
    "homeTeam": "PSG",
    "homeTeamImage": teams.psg,
    "awayTeam": "Brest",
    "awayTeamImage": teams.brest,
    "score": "3-1",
    "venue": "Parc des Princes",
    "status": "completed",
    "goals": [
      { "player": "Romain Del Castillo", "minute": 29, "team": "Brest" },
      { "player": "Ousmane Dembélé", "minute": 42, "team": "PSG" },
      { "player": "Fabián Ruiz", "minute": 73, "team": "PSG" },
      { "player": "Ousmane Dembélé", "minute": 74, "team": "PSG" }
    ],
    "lineup": {
      "PSG": ["Donnarumma", "Hakimi", "Marquinhos", "Pacho", "Nuno Mendes", "Vitinha", "Zaïre-Emery", "Fabián Ruiz", "Dembélé", "Ramos", "Barcola"],
      "Brest": ["Bizot", "Lala", "Chardonnet", "Le Cardinal", "Amavi", "Magnetti", "Lees-Melou", "Camara", "Sima", "Mounié", "Del Castillo"]
    }
  },
  {
    "id": 5,
    "date": "2024-09-21",
    "time": "21:00",
    "competition": "Ligue 1",
    "homeTeam": "Reims",
    "homeTeamImage": teams.reims,
    "awayTeam": "PSG",
    "awayTeamImage": teams.psg,
    "score": "1-1",
    "venue": "Stade Auguste-Delaune",
    "status": "completed",
    "goals": [
      { "player": "Keito Nakamura", "minute": 9, "team": "Reims" },
      { "player": "Ousmane Dembélé", "minute": 68, "team": "PSG" }
    ],
    "lineup": {
      "PSG": ["Donnarumma", "Hakimi", "Marquinhos", "Pacho", "Nuno Mendes", "Vitinha", "João Neves", "Lee Kang-in", "Dembélé", "Ramos", "Barcola"],
      "Reims": ["Diouf", "Kipré", "Okumu", "Agbadou", "Foket", "Munetsi", "Atangana", "Ito", "Nakamura", "Touré", "Diakité"]
    }
  },
  {
    "id": 6,
    "date": "2024-09-27",
    "time": "21:00",
    "competition": "Ligue 1",
    "homeTeam": "PSG",
    "homeTeamImage": teams.psg,
    "awayTeam": "Rennes",
    "awayTeamImage": teams.rennes,
    "score": "3-1",
    "venue": "Parc des Princes",
    "status": "completed",
    "goals": [
      { "player": "Bradley Barcola", "minute": 30, "team": "PSG" },
      { "player": "Lee Kang-in", "minute": 58, "team": "PSG" },
      { "player": "Bradley Barcola", "minute": 68, "team": "PSG" },
      { "player": "Arnaud Kalimuendo", "minute": 75, "team": "Rennes" }
    ],
    "lineup": {
      "PSG": ["Donnarumma", "Hakimi", "Marquinhos", "Pacho", "Nuno Mendes", "Vitinha", "Zaïre-Emery", "Fabián Ruiz", "Dembélé", "Ramos", "Barcola"],
      "Rennes": ["Mandanda", "Seidu", "Wooh", "Theate", "Truffert", "Matusiwa", "Santamaría", "Blas", "Gouiri", "Kalimuendo", "Bourigeaud"]
    }
  },
  {
    "id": 7,
    "date": "2024-10-06",
    "time": "20:45",
    "competition": "Ligue 1",
    "homeTeam": "Nice",
    "homeTeamImage": teams.nice,
    "awayTeam": "PSG",
    "awayTeamImage": teams.psg,
    "score": "1-1",
    "venue": "Allianz Riviera",
    "status": "completed",
    "goals": [
      { "player": "Ali Abdi", "minute": 40, "team": "Nice" },
      { "player": "N/A (Own Goal - Bombito)", "minute": 52, "team": "PSG" }
    ],
    "lineup": {
      "PSG": ["Donnarumma", "Hakimi", "Pacho", "Beraldo", "Nuno Mendes", "Vitinha", "João Neves", "Lee Kang-in", "Dembélé", "Ramos", "Asensio"],
      "Nice": ["Bulka", "Ndayishimiye", "Bombito", "Dante", "Clauss", "Rosario", "Thuram", "Cho", "Guessand", "Moffi", "Laborde"]
    }
  },
  {
    "idit": 8,
    "date": "2024-10-19",
    "time": "21:00",
    "competition": "Ligue 1",
    "homeTeam": "PSG",
    "homeTeamImage":teams.psg,
    "awayTeam": "Strasbourg",
    "awayTeamImage": teams.strasbourg,
    "score": "4-2",
    "venue": "Parc des Princes",
    "status": "completed",
    "goals": [
      { "player": "Seny Mayulu", "minute": 18, "team": "PSG" },
      { "player": "Marco Asensio", "minute": 47, "team": "PSG" },
      { "player": "Sékou Mara", "minute": 58, "team": "Strasbourg" },
      { "player": "Bradley Barcola", "minute": 66, "team": "PSG" },
      { "player": "Lee Kang-in", "minute": 90, "team": "PSG" },
      { "player": "Mouhamed Diong", "minute": 90+2, "team": "Strasbourg" }
    ],
    "lineup": {
      "PSG": ["Donnarumma", "Hakimi", "Marquinhos", "Pacho", "Nuno Mendes", "Vitinha", "Zaïre-Emery", "Fabián Ruiz", "Dembélé", "Ramos", "Barcola"],
      "Strasbourg": ["Petrovic", "Sow", "Perrin", "Sylla", "Santos", "Diarra", "Mwanga", "Bakwa", "Senhadji", "Emegha", "Gameiro"]
    }
  },
  {
    "id": 9,
    "date": "2024-10-27",
    "time": "20:45",
    "competition": "Ligue 1",
    "homeTeam": "Marseille",
    "homeTeamImage": teams.marseille,
    "awayTeam": "PSG",
    "awayTeamImage": teams.psg,
    "score": "0-3",
    "venue": "Stade Vélodrome",
    "status": "completed",
    "goals": [
      { "player": "João Neves", "minute": 7, "team": "PSG" },
      { "player": "N/A (Own Goal - Balerdi)", "minute": 29, "team": "PSG" },
      { "player": "Bradley Barcola", "minute": 40, "team": "PSG" }
    ],
    "lineup": {
      "PSG": ["Donnarumma", "Hakimi", "Marquinhos", "Pacho", "Nuno Mendes", "Vitinha", "Zaïre-Emery", "Fabián Ruiz", "Dembélé", "Ramos", "Barcola"],
      "Marseille": ["Rulli", "Clauss", "Balerdi", "Cornelius", "Merlin", "Rongier", "Veretout", "Harit", "Greenwood", "Wahi", "Henrique"]
    }
  },
  {
    "id": 10,
    "date": "2024-11-02",
    "time": "17:00",
    "competition": "Ligue 1",
    "homeTeam": "PSG",
    "homeTeamImage": teams.psg,
    "awayTeam": "Lens",
    "awayTeamImage": teams.lens,
    "score": "1-0",
    "venue": "Parc des Princes",
    "status": "completed",
    "goals": [
      { "player": "Ousmane Dembélé", "minute": 4, "team": "PSG" }
    ],
    "lineup": {
      "PSG": ["Donnarumma", "Hakimi", "Marquinhos", "Pacho", "Nuno Mendes", "Vitinha", "João Neves", "Lee Kang-in", "Dembélé", "Ramos", "Barcola"],
      "Lens": ["Samba", "Gradit", "Khusaev", "Medina", "Chávez", "Diouf", "Thomasson", "Fulgini", "Saïd", "Sotoca", "Frankowski"]
    }
  },
  {
    "id": 11,
    "date": "2024-11-09",
    "time": "21:00",
    "competition": "Ligue 1",
    "homeTeam": "Angers",
    "homeTeamImage": teams.angers,
    "awayTeam": "PSG",
    "awayTeamImage": teams.psg,
    "score": "2-4",
    "venue": "Stade Raymond Kopa",
    "status": "completed",
    "goals": [
      { "player": "Lee Kang-in", "minute": 17, "team": "PSG" },
      { "player": "Lee Kang-in", "minute": 20, "team": "PSG" },
      { "player": "Bradley Barcola", "minute": 31, "team": "PSG" },
      { "player": "Bradley Barcola", "minute": 45+2, "team": "PSG" },
      { "player": "Esteban Lepaul", "minute": 90+1, "team": "Angers" },
      { "player": "Zinedine Biumla", "minute": 90+7, "team": "Angers" }
    ],
    "lineup": {
      "PSG": ["Donnarumma", "Hakimi", "Marquinhos", "Pacho", "Nuno Mendes", "Vitinha", "Zaïre-Emery", "Fabián Ruiz", "Dembélé", "Ramos", "Barcola"],
      "Angers": ["Fofana", "Arcus", "Hountondji", "Lefort", "Biumla", "Aholou", "Abdelli", "Belkhdim", "Niane", "Allevinah", "Jean"]
    }
  },
  {
    "id": 12,
    "date": "2024-11-22",
    "time": "21:00",
    "competition": "Ligue 1",
    "homeTeam": "PSG",
    "homeTeamImage": teams.psg,
    "awayTeam": "Toulouse",
    "awayTeamImage": teams.toulouse,
    "score": "3-0",
    "venue": "Parc des Princes",
    "status": "completed",
    "goals": [
      { "player": "Joao Neves", "minute": 35, "team": "PSG" },
      { "player": "Beraldo", "minute": 84, "team": "PSG" },
      { "player": "Vitinha", "minute": 90, "team": "PSG" }
    ],
    "lineup": {
      "PSG": ["Donnarumma", "Hakimi", "Marquinhos", "Pacho", "Nuno Mendes", "Vitinha", "Zaïre-Emery", "Fabián Ruiz", "Dembélé", "Ramos", "Barcola"],
      "Toulouse": ["Restes", "Kamanzi", "Nicolaisen", "Diarra", "Suazo", "Casseres", "Sierro", "Gboho", "Magri", "Dallinga", "Donnum"]
    }
  },
  {
    "id": 13,
    "date": "2024-11-30",
    "time": "21:00",
    "competition": "Ligue 1",
    "homeTeam": "PSG",
    "homeTeamImage": teams.psg,
    "awayTeam": "Nantes",
    "awayTeamImage": teams.nantes,
    "score": "1-1",
    "venue": "Parc des Princes",
    "status": "completed",
    "goals": [
      { "player": "Hakimi", "minute": 2, "team": "PSG" },
      { "player": "Abline", "minute": 38, "team": "Nantes" }
    ],
    "lineup": {
      "PSG": ["Donnarumma", "Hakimi", "Pacho", "Beraldo", "Nuno Mendes", "Vitinha", "João Neves", "Lee Kang-in", "Dembélé", "Ramos", "Asensio"],
      "Nantes": ["Lafont", "Duverne", "Castelletto", "Zeze", "Amian", "Chirivella", "Moutoussamy", "Simon", "Abline", "Kadewere", "Mollet"]
    }
  },
  {
    "id": 14,
    "date": "2024-12-06",
    "time": "21:00",
    "competition": "Ligue 1",
    "homeTeam": "Auxerre",
    "homeTeamImage": teams.auxerre,
    "awayTeam": "PSG",
    "awayTeamImage": teams.psg,
    "score": "0-0",
    "venue": "Stade de l'Abbé-Deschamps",
    "status": "completed",
    "goals": [],
    "lineup": {
      "PSG": ["Donnarumma", "Hakimi", "Marquinhos", "Pacho", "Nuno Mendes", "Vitinha", "Zaïre-Emery", "Fabián Ruiz", "Dembélé", "Ramos", "Barcola"],
      "Auxerre": ["Leon", "Joly", "Jubal", "Pellenard", "Akpa", "Owusu", "Raveloson", "Perrin", "Bair", "Sinayoko", "Aye"]
    }
  },
  {
    "id": 15,
    "date": "2024-12-15",
    "time": "20:45",
    "competition": "Ligue 1",
    "homeTeam": "PSG",
    "homeTeamImage": teams.psg,
    "awayTeam": "Lyon",
    "awayTeamImage": teams.lyon,
    "score": "3-1",
    "venue": "Parc des Princes",
    "status": "completed",
    "goals": [
      { "player": "Ousmane Dembélé", "minute": 20, "team": "PSG" },
      { "player": "Gonçalo Ramos", "minute": 45, "team": "PSG" },
      { "player": "Alexandre Lacazette", "minute": 70, "team": "Lyon" },
      { "player": "Bradley Barcola", "minute": 85, "team": "PSG" }
    ],
    "lineup": {
      "PSG": ["Donnarumma", "Hakimi", "Marquinhos", "Pacho", "Nuno Mendes", "Vitinha", "Zaïre-Emery", "Fabián Ruiz", "Dembélé", "Ramos", "Barcola"],
      "Lyon": ["Perri", "Mata", "Caleta-Car", "O'Brien", "Tagliafico", "Matic", "Tolisso", "Cherki", "Fofana", "Lacazette", "Benrahma"]
    }
  },
  {
    "id": 16,
    "date": "2024-12-18",
    "time": "21:00",
    "competition": "Ligue 1",
    "homeTeam": "Monaco",
    "homeTeamImage": teams.monaco,
    "awayTeam": "PSG",
    "awayTeamImage": teams.psg,
    "score": "2-4",
    "venue": "Stade Louis II",
    "status": "completed",
    "goals": [
      { "player": "Gonçalo Ramos", "minute": 15, "team": "PSG" },
      { "player": "Breel Embolo", "minute": 30, "team": "Monaco" },
      { "player": "Ousmane Dembélé", "minute": 50, "team": "PSG" },
      { "player": "Bradley Barcola", "minute": 65, "team": "PSG" },
      { "player": "Aleksandr Golovin", "minute": 80, "team": "Monaco" },
      { "player": "Marco Asensio", "minute": 88, "team": "PSG" }
    ],
    "lineup": {
      "PSG": ["Donnarumma", "Hakimi", "Marquinhos", "Pacho", "Nuno Mendes", "Vitinha", "Zaïre-Emery", "Fabián Ruiz", "Dembélé", "Ramos", "Barcola"],
      "Monaco": ["Majecki", "Singlo", "Kehrer", "Salisu", "Henrique", "Zakaria", "Golovin", "Fofana", "Ben Yedder", "Embolo", "Balogun"]
    }
  },
  {
    "id": 17,
    "date": "2025-01-12",
    "time": "20:45",
    "competition": "Ligue 1",
    "homeTeam": "PSG",
    "homeTeamImage": teams.psg,
    "awayTeam": "Saint-Étienne",
    "awayTeamImage": teams.saintetienne,
    "score": "2-1",
    "venue": "Parc des Princes",
    "status": "completed",
    "goals": [
      { "player": "Gonçalo Ramos", "minute": 25, "team": "PSG" },
      { "player": "Ibrahim Wadji", "minute": 60, "team": "Saint-Étienne" },
      { "player": "Ousmane Dembélé", "minute": 80, "team": "PSG" }
    ],
    "lineup": {
      "PSG": ["Donnarumma", "Hakimi", "Pacho", "Beraldo", "Nuno Mendes", "Vitinha", "João Neves", "Lee Kang-in", "Dembélé", "Ramos", "Barcola"],
      "Saint_Étienne": ["Larsonneur", "Macón", "Batubinsika", "Nadé", "Bentos", "Tardieu", "Amougou", "Monconduit", "Wadji", "Cardona", "Sissoko"]
    }
  },
  {
    "id": 18,
    "date": "2025-01-18",
    "time": "17:00",
    "competition": "Ligue 1",
    "homeTeam": "Lens",
    "homeTeamImage": teams.lens,
    "awayTeam": "PSG",
    "awayTeamImage": teams.psg,
    "score": "1-2",
    "venue": "Stade Bollaert-Delelis",
    "status": "completed",
    "goals": [
      { "player": "Wesley Teixeira", "minute": 35, "team": "Lens" },
      { "player": "Bradley Barcola", "minute": 55, "team": "PSG" },
      { "player": "Gonçalo Ramos", "minute": 85, "team": "PSG" }
    ],
    "lineup": {
      "PSG": ["Donnarumma", "Hakimi", "Marquinhos", "Pacho", "Nuno Mendes", "Vitinha", "Zaïre-Emery", "Fabián Ruiz", "Dembélé", "Ramos", "Barcola"],
      "Lens": ["Samba", "Gradit", "Khusaev", "Medina", "Chávez", "Diouf", "Thomasson", "Fulgini", "Saïd", "Sotoca", "Frankowski"]
    }
  },
  {
    "id": 19,
    "date": "2025-01-25",
    "time": "21:05",
    "competition": "Ligue 1",
    "homeTeam": "PSG",
    "homeTeamImage": teams.psg,
    "awayTeam": "Reims",
    "awayTeamImage": teams.reims,
    "score": "1-1",
    "venue": "Parc des Princes",
    "status": "completed",
    "goals": [
      { "player": "Ousmane Dembélé", "minute": 40, "team": "PSG" },
      { "player": "Junya Ito", "minute": 70, "team": "Reims" }
    ],
    "lineup": {
      "PSG": ["Donnarumma", "Hakimi", "Pacho", "Beraldo", "Nuno Mendes", "Vitinha", "João Neves", "Lee Kang-in", "Dembélé", "Ramos", "Barcola"],
      "Reims": ["Diouf", "Kipré", "Okumu", "Agbadou", "Foket", "Munetsi", "Atangana", "Ito", "Nakamura", "Touré", "Diakité"]
    }
  },
  {
    "id": 20,
    "date": "2025-02-01",
    "time": "17:00",
    "competition": "Ligue 1",
    "homeTeam": "Brest",
    "homeTeamImage": teams.brest,
    "awayTeam": "PSG",
    "awayTeamImage": teams.psg,
    "score": "2-5",
    "venue": "Stade Francis-Le Blé",
    "status": "completed",
    "goals": [
      { "player": "Gonçalo Ramos", "minute": 15, "team": "PSG" },
      { "player": "Bradley Barcola", "minute": 25, "team": "PSG" },
      { "player": "Steve Mounié", "minute": 40, "team": "Brest" },
      { "player": "Ousmane Dembélé", "minute": 60, "team": "PSG" },
      { "player": "Marco Asensio", "minute": 75, "team": "PSG" },
      { "player": "Romain Del Castillo", "minute": 80, "team": "Brest" },
      { "player": "Vitinha", "minute": 85, "team": "PSG" }
    ],
    "lineup": {
      "PSG": ["Donnarumma", "Hakimi", "Marquinhos", "Pacho", "Nuno Mendes", "Vitinha", "Zaïre-Emery", "Fabián Ruiz", "Dembélé", "Ramos", "Barcola"],
      "Brest": ["Bizot", "Lala", "Chardonnet", "Le Cardinal", "Amavi", "Magnetti", "Lees-Melou", "Camara", "Sima", "Mounié", "Del Castillo"]
    }
  },
  {
    "id": 21,
    "date": "2025-02-07",
    "time": "21:05",
    "competition": "Ligue 1",
    "homeTeam": "PSG",
    "homeTeamImage": teams.psg,
    "awayTeam": "Monaco",
    "awayTeamImage": teams.monaco,
    "score": "2-0",
    "venue": "Parc des Princes",
    "status": "completed",
    "goals": [
      { "player": "Gonçalo Ramos", "minute": 30, "team": "PSG" },
      { "player": "Ousmane Dembélé", "minute": 65, "team": "PSG" }
    ],
    "lineup": {
      "PSG": ["Donnarumma", "Hakimi", "Marquinhos", "Pacho", "Nuno Mendes", "Vitinha", "Zaïre-Emery", "Fabián Ruiz", "Dembélé", "Ramos", "Barcola"],
      "Monaco": ["Majecki", "Singlo", "Kehrer", "Salisu", "Henrique", "Zakaria", "Golovin", "Fofana", "Ben Yedder", "Embolo", "Balogun"]
    }
  },
  {
    "id": 22,
    "date": "2025-02-15",
    "time": "21:05",
    "competition": "Ligue 1",
    "homeTeam": "PSG",
    "homeTeamImage": teams.psg,
    "awayTeam": "Toulouse",
    "awayTeamImage": teams.toulouse,
    "score": "1-0",
    "venue": "Parc des Princes",
    "status": "completed",
    "goals": [
      { "player": "Bradley Barcola", "minute": 50, "team": "PSG" }
    ],
    "lineup": {
      "PSG": ["Donnarumma", "Hakimi", "Pacho", "Beraldo", "Nuno Mendes", "Vitinha", "João Neves", "Lee Kang-in", "Dembélé", "Ramos", "Barcola"],
      "Toulouse": ["Restes", "Kamanzi", "Nicolaisen", "Diarra", "Suazo", "Casseres", "Sierro", "Gboho", "Magri", "Dallinga", "Donnum"]
    }
  },
  {
    "id": 23,
    "date": "2025-02-23",
    "time": "20:45",
    "competition": "Ligue 1",
    "homeTeam": "Lyon",
    "homeTeamImage": teams.lyon,
    "awayTeam": "PSG",
    "awayTeamImage": teams.psg,
    "score": "2-3",
    "venue": "Groupama Stadium",
    "status": "completed",
    "goals": [
      { "player": "Ousmane Dembélé", "minute": 20, "team": "PSG" },
      { "player": "Alexandre Lacazette", "minute": 35, "team": "Lyon" },
      { "player": "Gonçalo Ramos", "minute": 60, "team": "PSG" },
      { "player": "Rayan Cherki", "minute": 75, "team": "Lyon" },
      { "player": "Bradley Barcola", "minute": 85, "team": "PSG" }
    ],
    "lineup": {
      "PSG": ["Donnarumma", "Hakimi", "Marquinhos", "Pacho", "Nuno Mendes", "Vitinha", "Zaïre-Emery", "Fabián Ruiz", "Dembélé", "Ramos", "Barcola"],
      "Lyon": ["Perri", "Mata", "Caleta-Car", "O'Brien", "Tagliafico", "Matic", "Tolisso", "Cherki", "Fofana", "Lacazette", "Benrahma"]
    }
  },
  {
    "id": 24,
    "date": "2025-03-01",
    "time": "21:05",
    "competition": "Ligue 1",
    "homeTeam": "Lille",
    "homeTeamImage": teams.lille,
    "awayTeam": "PSG",
    "awayTeamImage": teams.psg,
    "score": "1-4",
    "venue": "Parc des Princes",
    "status": "completed",
    "goals": [
      { "player": "Ousmane Dembélé", "minute": 15, "team": "PSG" },
      { "player": "Gonçalo Ramos", "minute": 30, "team": "PSG" },
      { "player": "Jonathan David", "minute": 50, "team": "Lille" },
      { "player": "Bradley Barcola", "minute": 70, "team": "PSG" },
      { "player": "Marco Asensio", "minute": 85, "team": "PSG" }
    ],
    "lineup": {
      "PSG": ["Donnarumma", "Hakimi", "Marquinhos", "Pacho", "Nuno Mendes", "Vitinha", "Zaïre-Emery", "Fabián Ruiz", "Dembélé", "Ramos", "Barcola"],
      "Lille": ["Chevalier", "Meunier", "Diakité", "Alexsandro", "Gudmundsson", "André", "Santos", "Zhegrova", "Haraldsson", "Cabella", "David"]
    }
  },
  {
    "id": 25,
    "date": "2025-03-08",
    "time": "17:00",
    "competition": "Ligue 1",
    "homeTeam": "Rennes",
    "homeTeamImage": teams.rennes,
    "awayTeam": "PSG",
    "awayTeamImage": teams.psg,
    "score": "1-4",
    "venue": "Roazhon Park",
    "status": "completed",
    "goals": [
      { "player": "Gonçalo Ramos", "minute": 20, "team": "PSG" },
      { "player": "Ousmane Dembélé", "minute": 40, "team": "PSG" },
      { "player": "Arnaud Kalimuendo", "minute": 60, "team": "Rennes" },
      { "player": "Bradley Barcola", "minute": 75, "team": "PSG" },
      { "player": "Marco Asensio", "minute": 85, "team": "PSG" }
    ],
    "lineup": {
      "PSG": ["Donnarumma", "Hakimi", "Marquinhos", "Pacho", "Nuno Mendes", "Vitinha", "Zaïre-Emery", "Fabián Ruiz", "Dembélé", "Ramos", "Barcola"],
      "Rennes": ["Mandanda", "Seidu", "Wooh", "Theate", "Truffert", "Matusiwa", "Santamaría", "Blas", "Gouiri", "Kalimuendo", "Bourigeaud"]
    }
  },
  {
    "id": 26,
    "date": "2025-03-16",
    "time": "20:45",
    "competition": "Ligue 1",
    "homeTeam": "PSG",
    "homeTeamImage": teams.psg,
    "awayTeam": "Marseille",
    "awayTeamImage": teams.marseille,
    "score": "3-1",
    "venue": "Parc des Princes",
    "status": "completed",
    "goals": [
      { "player": "Bradley Barcola", "minute": 25, "team": "PSG" },
      { "player": "Gonçalo Ramos", "minute": 50, "team": "PSG" },
      { "player": "Mason Greenwood", "minute": 70, "team": "Marseille" },
      { "player": "Ousmane Dembélé", "minute": 85, "team": "PSG" }
    ],
    "lineup": {
      "PSG": ["Donnarumma", "Hakimi", "Marquinhos", "Pacho", "Nuno Mendes", "Vitinha", "Zaïre-Emery", "Fabián Ruiz", "Dembélé", "Ramos", "Barcola"],
      "Marseille": ["Rulli", "Clauss", "Balerdi", "Cornelius", "Merlin", "Rongier", "Veretout", "Harit", "Greenwood", "Wahi", "Henrique"]
    }
  },
  {
    "id": 27,
    "date": "2025-03-29",
    "time": "19:00",
    "competition": "Ligue 1",
    "homeTeam": "Saint-Étienne",
    "homeTeamImage": teams.saintetienne,
    "awayTeam": "PSG",
    "awayTeamImage": teams.psg,
    "score": "1-6",
    "venue": "Stade Geoffroy-Guichard",
    "status": "completed",
    "goals": [
      { "player": "Ousmane Dembélé", "minute": 10, "team": "PSG" },
      { "player": "Gonçalo Ramos", "minute": 20, "team": "PSG" },
      { "player": "Bradley Barcola", "minute": 35, "team": "PSG" },
      { "player": "Ibrahim Wadji", "minute": 50, "team": "Saint-Étienne" },
      { "player": "Marco Asensio", "minute": 65, "team": "PSG" },
      { "player": "Vitinha", "minute": 80, "team": "PSG" },
      { "player": "Lee Kang-in", "minute": 85, "team": "PSG" }
    ],
    "lineup": {
      "PSG": ["Donnarumma", "Hakimi", "Pacho", "Beraldo", "Nuno Mendes", "Vitinha", "João Neves", "Lee Kang-in", "Dembélé", "Ramos", "Barcola"],
      "Saint_Étienne": ["Larsonneur", "Macón", "Batubinsika", "Nadé", "Bentos", "Tardieu", "Amougou", "Monconduit", "Wadji", "Cardona", "Sissoko"]
    }
  },
  {
    "id": 28,
    "date": "2025-04-05",
    "time": "17:00",
    "competition": "Ligue 1",
    "homeTeam": "PSG",
    "homeTeamImage": teams.psg,
    "awayTeam": "Angers",
    "awayTeamImage": teams.angers,
    "score": "1-0",
    "venue": "Parc des Princes",
    "status": "completed",
    "goals": [
      { "player": "Gonçalo Ramos", "minute": 55, "team": "PSG" }
    ],
    "lineup": {
      "PSG": ["Donnarumma", "Hakimi", "Marquinhos", "Pacho", "Nuno Mendes", "Vitinha", "Zaïre-Emery", "Fabián Ruiz", "Dembélé", "Ramos", "Barcola"],
      "Angers": ["Fofana", "Arcus", "Hountondji", "Lefort", "Biumla", "Aholou", "Abdelli", "Belkhdim", "Niane", "Allevinah", "Jean"]
    }
  },
  {
    "id": 29,
    "date": "2025-04-19",
    "time": "17:00",
    "competition": "Ligue 1",
    "homeTeam": "PSG",
    "homeTeamImage": teams.psg,
    "awayTeam": "Le Havre",
    "awayTeamImage": teams.lehavre,
    "score": "2-1",
    "venue": "Parc des Princes",
    "status": "completed",
    "goals": [
      { "player": "Ousmane Dembélé", "minute": 30, "team": "PSG" },
      { "player": "Bradley Barcola", "minute": 60, "team": "PSG" },
      { "player": "Josué Casimir", "minute": 80, "team": "Le Havre" }
    ],
    "lineup": {
      "PSG": ["Donnarumma", "Hakimi", "Marquinhos", "Pacho", "Nuno Mendes", "Vitinha", "Zaïre-Emery", "Fabián Ruiz", "Dembélé", "Ramos", "Barcola"],
      "Le_Havre": ["Desmas", "Nego", "Youte Kinkoue", "Lloris", "Operi", "Kuziaev", "Touré", "Ndiaye", "Kechta", "Casimir", "Joujou"]
    }
  },
  {
    "id": 30,
    "date": "2025-04-22",
    "time": "20:45",
    "competition": "Ligue 1",
    "homeTeam": "Nantes",
    "homeTeamImage": teams.nantes,
    "awayTeam": "PSG",
    "awayTeamImage": teams.psg,
    "score": "1-1",
    "venue": "Stade de la Beaujoire",
    "status": "completed",
    "goals": [
      { "player": "Moses Simon", "minute": 40, "team": "Nantes" },
      { "player": "Gonçalo Ramos", "minute": 75, "team": "PSG" }
    ],
    "lineup": {
      "PSG": ["Donnarumma", "Hakimi", "Pacho", "Beraldo", "Nuno Mendes", "Vitinha", "João Neves", "Lee Kang-in", "Dembélé", "Ramos", "Barcola"],
      "Nantes": ["Lafont", "Duverne", "Castelletto", "Zeze", "Amian", "Chirivella", "Moutoussamy", "Simon", "Abline", "Kadewere", "Mollet"]
    }
  },
  {
    "id": 31,
    "date": "2025-04-25",
    "time": "20:45",
    "competition": "Ligue 1",
    "homeTeam": "PSG",
    "homeTeamImage": teams.psg,
    "awayTeam": "Nice",
    "awayTeamImage": teams.nice,
    "score": "1-3",
    "venue": "Parc des Princes",
    "status": "completed",
    "goals": [
      { "player": "Morgan Sanson", "minute": 20, "team": "Nice" },
      { "player": "Morgan Sanson", "minute": 50, "team": "Nice" },
      { "player": "", "minute": 70, "team": "PSG" },
      { "player": "Gaëtan Laborde", "minute": 85, "team": "Nice" }
    ],
    "lineup": {
      "PSG": ["Donnarumma", "Hakimi", "Marquinhos", "Pacho", "Nuno Mendes", "Vitinha", "Zaïre-Emery", "Fabián Ruiz", "Dembélé", "Ramos", "Barcola"],
      "Nice": ["Bulka", "Ndayishimiye", "Bombito", "Dante", "Clauss", "Rosario", "Thuram", "Cho", "Guessand", "Moffi", "Laborde"]
    }
  },
  {
    "id": 32,
    "date": "2025-05-03",
    "time": "17:00",
    "competition": "Ligue 1",
    "homeTeam": "Strasbourg",
    "homeTeamImage": teams.strasbourg,
    "awayTeam": "PSG",
    "awayTeamImage": teams.psg,
    "score": "2-1",
    "venue": "Stade de la Meinau",
    "status": "completed",
    "goals": [
      { "player": "Habib Diarra", "minute": 20, "team": "Strasbourg" },
      { "player": "Lemarechal", "minute": 60, "team": "Strasbourg" },
      { "player": "Barcola", "minute": 46, "team": "PSG" }
    ],
    "lineup": {
      "PSG": ["Donnarumma", "Hakimi", "Pacho", "Beraldo", "Nuno Mendes", "Vitinha", "João Neves", "Lee Kang-in", "Dembélé", "Ramos", "Barcola"],
      "Strasbourg": ["Petrovic", "Sow", "Perrin", "Sylla", "Santos", "Diarra", "Mwanga", "Bakwa", "Senhadji", "Emegha", "Gameiro"]
    }
  },
  {
    "id": 33,
    "date": "2025-05-10",
    "time": "21:00",
    "competition": "Ligue 1",
    "homeTeam": "Montpellier",
    "homeTeamImage": teams.montpellier,
    "awayTeam": "PSG",
    "awayTeamImage": teams.psg,
    "score": "1-4",
    "venue": "Stade de la Mosson",
    "status": "completed",
    "goals": [
      { "player": "Ousmane Dembélé", "minute": 15, "team": "PSG" },
      { "player": "Gonçalo Ramos", "minute": 40, "team": "PSG" },
      { "player": "Téji Savanier", "minute": 60, "team": "Montpellier" },
      { "player": "Bradley Barcola", "minute": 75, "team": "PSG" },
      { "player": "Marco Asensio", "minute": 85, "team": "PSG" }
    ],
    "lineup": {
      "PSG": ["Donnarumma", "Hakimi", "Marquinhos", "Pacho", "Nuno Mendes", "Vitinha", "Zaïre-Emery", "Fabián Ruiz", "Dembélé", "Ramos", "Barcola"],
      "Montpellier": ["Lecomte", "Tchato", "Omeragic", "Sagnan", "Sacko", "Chotard", "Ferri", "Savanier", "Nordin", "Khazri", "Al-Tamari"]
    }
  },
  {
  id: 34,
  date: "2025-05-17",
  time: "21:00",
  competition: "Ligue 1",
  homeTeam: "PSG",
  homeTeamImage: teams.psg,
  awayTeam: "Auxerre",
  awayTeamImage: teams.auxerre,
  score: "3-1",
  venue: "Parc des Princes",
  status: "completed",
  goals: [
    { player: "Lassine Sinayoko", minute: 30, team: "Auxerre" },
    { player: "Khvicha Kvaratskhelia", minute: 59, team: "PSG" },
    { player: "Marquinhos", minute: 67, team: "PSG" },
    { player: "Khvicha Kvaratskhelia", minute: 88, team: "PSG" }
  ],
  lineup: {
    PSG: ["Donnarumma", "Hakimi", "Marquinhos", "Pacho", "Nuno Mendes", "Vitinha", "Zaïre-Emery", "Fabián Ruiz", "Khvicha Kvaratskhelia", "Gonçalo Ramos", "Bradley Barcola"],
    Auxerre: ["Leon", "Joly", "Jubal", "Pellenard", "Akpa", "Owusu", "Raveloson", "Perrin", "Bair", "Sinayoko", "Aye"]
  }
},
{
  id: 35,
  date: "2024-12-22",
  time: "20:00",
  competition: "Coupe de France",
  homeTeam: "Lens",
  homeTeamImage: teams.lens,
  awayTeam: "PSG",
  awayTeamImage: teams.psg,
  score: "1-1 (4-3 p)",
  venue: "Stade Bollaert-Delelis",
  status: "completed",
  goals: [
    { player: "M'Bala Nzola", minute: 66, team: "Lens" },
    { player: "Gonçalo Ramos", minute: 70, team: "PSG" }
  ],
  lineup: {
    PSG: ["Safonov", "Mukiele", "Beraldo", "Kimpembe", "Zague", "Vitinha", "Zaïre‑Emery", "Fabián Ruiz", "Dembélé", "Ramos", "Barcola"],
    Lens: ["Samba", "Gradit", "Khusanov", "Medina", "Frankowski", "Diouf", "Thomasson", "Fulgini", "Saïd", "Nzola", "Frankowski"]
  }
},
{
  id: 36,
  date: "2025-01-15",
  time: "20:00",
  competition: "Coupe de France",
  homeTeam: "Espaly",
  homeTeamImage: teams.espaly,
  awayTeam: "PSG",
  awayTeamImage: teams.psg,
  score: "2-4",
  venue: "Stade Joseph Desvignes",
  status: "completed",
  goals: [
    { player: "Player X", minute: 30, team: "Espaly" },
    { player: "Randal Kolo Muani", minute: 45, team: "PSG" },
    { player: "Marco Asensio", minute: 60, team: "PSG" },
    { player: "Player Y", minute: 75, team: "Espaly" },
    { player: "Senny Mayulu", minute: 80, team: "PSG" },
    { player: "Désiré Doué", minute: 85, team: "PSG" }
  ],
  lineup: {
    PSG: ["Tenas", "Mukiele", "Beraldo", "Kimpembe", "Zague", "João Neves", "Lee Kang-in", "Soler", "Asensio", "Kolo Muani", "Doué"],
    Espaly: ["Placeholder XI"]
  }
},
{
  id: 37,
  date: "2025-02-04",
  time: "20:00",
  competition: "Coupe de France",
  homeTeam: "Le Mans",
  homeTeamImage: teams.lemans,
  awayTeam: "PSG",
  awayTeamImage: teams.psg,
  score: "0-2",
  venue: "MMArena",
  status: "completed",
  goals: [
    { player: "Randal Kolo Muani", minute: 50, team: "PSG" },
    { player: "Désiré Doué", minute: 80, team: "PSG" }
  ],
  lineup: {
    PSG: ["Tenas", "Mukiele", "Beraldo", "Kimpembe", "Zague", "João Neves", "Lee Kang-in", "Soler", "Asensio", "Kolo Muani", "Doué"],
    Le_Mans: ["Placeholder XI"]
  }
},
{
  id: 38,
  date: "2025-02-26",
  time: "20:00",
  competition: "Coupe de France",
  homeTeam: "Stade Briochin",
  homeTeamImage: teams.briochin,
  awayTeam: "PSG",
  awayTeamImage: teams.psg,
  score: "0-7",
  venue: "Stade Fred-Aubert",
  status: "completed",
  goals: [
    { player: "Randal Kolo Muani", minute: 15, team: "PSG" },
    { player: "Marco Asensio", minute: 25, team: "PSG" },
    { player: "Senny Mayulu", minute: 40, team: "PSG" },
    { player: "Désiré Doué", minute: 50, team: "PSG" },
    { player: "Lee Kang-in", minute: 60, team: "PSG" },
    { player: "Yoram Zague", minute: 75, team: "PSG" },
    { player: "Carlos Soler", minute: 85, team: "PSG" }
  ],
  lineup: {
    PSG: ["Tenas", "Mukiele", "Beraldo", "Kimpembe", "Zague", "João Neves", "Lee Kang-in", "Soler", "Asensio", "Kolo Muani", "Doué"],
    Stade_Briochin: ["Placeholder XI"]
  }
},

{
  id: 39,
  date: "2025-04-01",
  time: "20:00",
  competition: "Coupe de France",
  homeTeam: "Dunkerque",
  homeTeamImage: teams.dunkerque,
  awayTeam: "PSG",
  awayTeamImage: teams.psg,
  score: "2-4",
  venue: "Stade Pierre-Mauroy",
  status: "completed",
  goals: [
    { player: "Vincent Sasso", minute: 7, team: "Dunkerque" },
    { player: "Muhannad Yahya Al‑Saad", minute: 27, team: "Dunkerque" },
    { player: "Ousmane Dembélé", minute: 45, team: "PSG" },
    { player: "Marquinhos", minute: 48, team: "PSG" },
    { player: "Désiré Doué", minute: 62, team: "PSG" },
    { player: "Ousmane Dembélé", minute: 90, team: "PSG" }
  ],
  lineup: {
    PSG: ["Safonov", "Hakimi", "Marquinhos", "Pacho", "Nuno Mendes", "Vitinha", "Zaïre-Emery", "Fabián Ruiz", "Ramos", "Dembélé", "Doué"],
    Dunkerque: []/* official XI from sky sports, omitted here for brevity */
  }
},

{
  id: 40,
  date: "2025-05-24",
  time: "20:00",
  competition: "Coupe de France",
  homeTeam: "PSG",
  homeTeamImage: teams.psg,
  awayTeam: "Reims",
  awayTeamImage: teams.reims,
  score: "3-0",
  venue: "Stade de France",
  status: "completed",
  goals: [
    { player: "Bradley Barcola", minute: 16, team: "PSG" },
    { player: "Bradley Barcola", minute: 19, team: "PSG" },
    { player: "Achraf Hakimi", minute: 43, team: "PSG" }
  ],
  lineup: {
    PSG: ["Safonov","Pacho","Beraldo","Marquinhos","Hakimi","Vitinha","Ruiz","Neves","Doué","Dembélé","Barcola"],
    Reims: ["Diouf","Kipré","Okumu","Akieme","Sekine","Atangana","Koné","Ito","Nakamura","Siebatcheu","Siebatcheu"]
  }
},

  {
  id: 41,
  date: "2025-01-05",
  time: "20:00",
  competition: "Trophée des Champions",
  homeTeam: "PSG",
  homeTeamImage: teams.psg,
  awayTeam: "Monaco",
  awayTeamImage: teams.monaco,
  score: "1-0",
  venue: "Neutral",
  status: "completed",
  goals: [
    { player: "Ousmane Dembélé", minute: 60, team: "PSG" }
  ],
  lineup: {
    PSG: ["Donnarumma", "Hakimi", "Marquinhos", "Pacho", "Nuno Mendes", "Vitinha", "Zaïre‑Emery", "Fabián Ruiz", "Dembélé", "Ramos", "Barcola"],
    Monaco: ["Majecki", "Singlo", "Kehrer", "Salisu", "Henrique", "Zakaria", "Golovin", "Fofana", "Ben Yedder", "Embolo", "Balogun"]
  }
},

{
  id: 42,
  date: "2024-09-18",
  time: "21:00",
  competition: "UEFA Champions League",
  homeTeam: "PSG",
  homeTeamImage: teams.psg,
  awayTeam: "Girona",
  awayTeamImage: teams.girona,
  score: "1-0",
  venue: "Parc des Princes",
  status: "completed",
  goals: [
    { player: "Nuno mendes", minute: 92, team: "PSG" }
  ],
  lineup: {
    PSG: ["Donnarumma","Hakimi","Marquinhos","Pacho","Nuno Mendes","Vitinha","Zaïre‑Emery","Fabián Ruiz","Dembélé","Ramos","Barcola"],
    Girona: ["Gazzaniga","Arnau","David López","Blind","Gutiérrez","Romeu","Martín","Tsygankov","Yáñez","Ruiz","Portu"]
  }
},


  {
    id: 43,
    date: "2024-10-01",
    time: "21:00",
    competition: "UEFA Champions League",
    homeTeam: "Arsenal",
    homeTeamImage: teams.arsenal,
    awayTeam: "PSG",
    awayTeamImage: teams.psg,
    score: "2-0",
    venue: "Emirates Stadium",
    status: "completed",
    goals: [
      { player: "Kai Havertz", minute: 20, team: "Arsenal" },
      { player: "Bukayo Saka", minute: 35, team: "Arsenal" }
    ],
    lineup: {
      PSG: ["Donnarumma", "Hakimi", "Marquinhos", "Pacho", "Nuno Mendes", "Vitinha", "Zaïre‑Emery", "Fabián Ruiz", "D. Doué", "Lee Kang‑in", "Barcola"],
      Arsenal: ["Raya", "Calafiori", "Magalhães", "Saliba", "Timber", "Partey", "Rice", "Saka", "Havertz", "Martinelli", "Trossard"]
    }
  },
  {
    id: 44,
    date: "2024-10-22",
    time: "21:00",
    competition: "UEFA Champions League",
    homeTeam: "PSG",
    homeTeamImage: teams.psg,
    awayTeam: "PSV Eindhoven",
    awayTeamImage: teams.psv,
    score: "1-1",
    venue: "Parc des Princes",
    status: "completed",
    goals: [
      { player: "Gonçalo Ramos", minute: 40, team: "PSG" },
      { player: "Noa Lang", minute: 34, team: "PSV Eindhoven" }
    ],
    lineup: {
      PSG: ["Donnarumma", "Hakimi", "Marquinhos", "Pacho", "Nuno Mendes", "Vitinha", "Zaïre‑Emery", "Fabián Ruiz", "Lee Kang‑in", "Dembélé", "Barcola"],
      PSV_Eindhoven: ["Benítez", "Teze", "Flamingo", "Obispo", "Dams", "Til", "Schouten", "Bakayoko", "Lang", "De Jong", "Pepi"]
    }
  },
  {
    id: 45,
    date: "2024-11-06",
    time: "21:00",
    competition: "UEFA Champions League",
    homeTeam: "PSG",
    homeTeamImage: teams.psg,
    awayTeam: "Atlético Madrid",
    awayTeamImage: cwcTeams.atletico,
    score: "1-2",
    venue: "Parc des Princes",
    status: "completed",
    goals: [
      { player: "Zaïre‑Emery", minute: 14, team: "PSG" },
      { player: "Nahuel Molina", minute: 18, team: "Atlético Madrid" },
      { player: "Ángel Correa", minute: 90 + 3, team: "Atlético Madrid" }
    ],
    lineup: {
      PSG: ["Donnarumma", "Hakimi", "Marquinhos", "Pacho", "Nuno Mendes", "Vitinha", "Zaïre‑Emery", "Vitinha", "Fabián Ruiz", "Dembélé", "Barcola", "Asensio"],
      Atlético_Madrid: ["Oblak", "Molina", "Witsel", "Giménez", "Reinildo", "Koke", "De Paul", "Lino", "Griezmann", "Morata", "Sørensen"]
    }
  },
  {
    id: 46,
    date: "2024-11-26",
    time: "21:00",
    competition: "UEFA Champions League",
    homeTeam: "Bayern Munich",
    homeTeamImage: teams.bayern,
    awayTeam: "PSG",
    awayTeamImage: teams.psg,
    score: "1-0",
    venue: "Allianz Arena",
    status: "completed",
    goals: [
      { player: "Kim Min‑jae", minute: 38, team: "Bayern Munich" }
    ],
    lineup: {
      PSG: ["Safonov", "Pacho", "Nuno Mendes", "Marquinhos", "Hakimi", "Vitinha", "Zaïre‑Emery", "Fabián Ruiz", "João Neves", "Barcola", "Dembélé"],
      Bayern_Munich: ["Neuer", "Upamecano", "Kim Min‑jae", "Davies", "Laimer", "Kimmich", "Goretzka", "Coman", "Musiala", "Sané", "Kane"]
    }
  },


{
  id: 47,
  date: "2024-12-10",
  time: "21:00",
  competition: "UEFA Champions League",
  homeTeam: "Red Bull Salzburg",
  homeTeamImage: teams.salzburg,
  awayTeam: "PSG",
  awayTeamImage: teams.psg,
  score: "0-3",
  venue: "Red Bull Arena",
  status: "completed",
  goals: [
    { player: "Gonçalo Ramos", minute: 30, team: "PSG" },
    { player: "Nuno Mendes", minute: 72, team: "PSG" },
    { player: "Désiré Doué", minute: 85, team: "PSG" }
  ],
  lineup: {
    PSG: [
      "Donnarumma",
      "Hakimi",
      "Marquinhos",
      "Pacho",
      "Nuno Mendes",
      "Vitinha",
      "Fabián Ruiz",
      "João Neves",
      "Lee Kang‑in",
      "Gonçalo Ramos",
      "Bradley Barcola"
    ],
    Red_Bull_Salzburg: [
      "Schlager",
      "Guindo",
      "Baidoo",
      "Dedić",
      "Capaldo",
      "Gloukh",
      "Bajcetic",
      "Bidstrup",
      "Nene Dorgeles",
      "Ratkov",
      "Daghim"
    ]
  }
},

  {
  id: 48,
  date: "2025-01-22",
  time: "21:00",
  competition: "UEFA Champions League",
  homeTeam: "PSG",
  homeTeamImage: teams.psg,
  awayTeam: "Manchester City",
  awayTeamImage: teams.mancity,
  score: "4-2",
  venue: "Parc des Princes",
  status: "completed",
  goals: [
    { player: "Jack Grealish", minute: 50, team: "Manchester City" },
    { player: "Erling Haaland", minute: 53, team: "Manchester City" },
    { player: "Ousmane Dembélé", minute: 56, team: "PSG" },
    { player: "Bradley Barcola", minute: 60, team: "PSG" },
    { player: "João Neves", minute: 78, team: "PSG" },
    { player: "Gonçalo Ramos", minute: 90 + 3, team: "PSG" }
  ],
  lineup: {
    PSG: ["Donnarumma", "Hakimi", "Marquinhos", "Pacho", "Nuno Mendes", "Vitinha", "Zaire‑Emery", "Fabián Ruiz", "Dembélé", "Neves", "Barcola"],
    Manchester_City: ["Ederson", "Walker", "Dias", "Akanji", "Gvardiol", "Rodri", "De Bruyne", "Foden", "Bernardo Silva", "Haaland", "Grealish"]
  }
},

{
  id: 49,
  date: "2025-01-29",
  time: "21:00",
  competition: "UEFA Champions League",
  homeTeam: "VfB Stuttgart",
  homeTeamImage: teams.stuttgart,
  awayTeam: "PSG",
  awayTeamImage: teams.psg,
  score: "1-4",
  venue: "Mercedes‑Benz Arena",
  status: "completed",
  goals: [
    { player: "Bradley Barcola", minute: 6, team: "PSG" },
    { player: "Ousmane Dembélé", minute: 17, team: "PSG" },
    { player: "Ousmane Dembélé", minute: 35, team: "PSG" },
    { player: "Ousmane Dembélé", minute: 54, team: "PSG" },
    { player: "Willian Pacho", minute: 77, team: "VfB Stuttgart", ownGoal: true }
  ],
  lineup: {
    PSG: ["Donnarumma", "Hakimi", "Marquinhos", "Pacho", "Hernández", "Vitinha", "Zaire‑Emery", "Douvé", "Dembélé", "Barcola", "Neves"],
    VfB_Stuttgart: ["Bredlow", "Vagnoman", "Al Dakhil", "Chabot", "Mittelstädt", "Karazor", "Stiller", "Führich", "Millot", "Undav", "Leweling"]
  }
},

  {
    id: 50,
    date: "2025-02-11",
    time: "21:00",
    competition: "UEFA Champions League",
    homeTeam: "PSG",
    homeTeamImage: teams.psg,
    awayTeam: "Brest",
    awayTeamImage: teams.brest,
    score: "3-0",
    venue: "Parc des Princes",
    status: "completed",
    goals: [
      { player: "Ousmane Dembélé", minute: 25, team: "PSG" },
      { player: "Gonçalo Ramos", minute: 50, team: "PSG" },
      { player: "Bradley Barcola", minute: 75, team: "PSG" }
    ],
    lineup: {
      PSG: ["Donnarumma", "Hakimi", "Marquinhos", "Pacho", "Nuno Mendes", "Vitinha", "Zaïre-Emery", "Fabián Ruiz", "Dembélé", "Ramos", "Barcola"],
      Brest: ["Bizot", "Lala", "Chardonnet", "Le Cardinal", "Amavi", "Magnetti", "Lees-Melou", "Camara", "Sima", "Mounié", "Del Castillo"]
    }
  },
  {
    id: 51,
    date: "2025-02-19",
    time: "21:00",
    competition: "UEFA Champions League",
    homeTeam: "Brest",
    homeTeamImage: teams.brest,
    awayTeam: "PSG",
    awayTeamImage: teams.psg,
    score: "0-7",
    venue: "Stade Francis-Le Blé",
    status: "completed",
    goals: [
      { player: "Barcola", minute: 20, team: "PSG" },
      { player: "Kvaratskhelia", minute: 39, team: "PSG" },
      { player: "Vitinha", minute: 59, team: "PSG" },
      { player: "Doue", minute: 64, team: "PSG" },
      { player: "Nuno Mendes", minute: 69, team: "PSG" },
      { player: "Ramos", minute: 76, team: "PSG" },
      { player: "Mayulu", minute: 86, team: "PSG" }
    ],
    lineup: {
      PSG: ["Donnarumma", "Hakimi", "Marquinhos", "Pacho", "Nuno Mendes", "Vitinha", "Nevew", "Fabián Ruiz", "Dembélé", "Kvaratskhelia", "Barcola"],
      Brest: ["Coudert", "Zogbe", "Chardonnet", "Coulibaly", "Haidara", "Pereira-Lage", "Lees-Melou", "Fernandes", "Sima", "Faivre", "Balde"]
    }
  },
  {
    id: 52,
    date: "2025-03-05",
    time: "21:00",
    competition: "UEFA Champions League",
    homeTeam: "PSG",
    homeTeamImage: teams.psg,
    awayTeam: "Liverpool",
    awayTeamImage: teams.liverpool,
    score: "0-1",
    venue: "Parc de princes",
    status: "completed",
    goals: [
      { player: "Elliot", minute: 87, team: "Liverpool" }
    ],
    lineup: {
      PSG: ["Donnarumma", "Hakimi", "Marquinhos", "Pacho", "Nuno Mendes", "Vitinha", "Neves", "Fabián Ruiz", "Dembélé", "Kvaratskhelia", "Barcola"],
      Liverpool: ["Alisson", "Alexander-Arnold", "Konaté", "Van Dijk", "Robertson", "Mac Allister", "Gravenberch", "Szoboszlai", "Salah", "Jota", "Díaz"]
    }
  },
  {
    id: 53,
    date: "2025-03-11",
    time: "21:00",
    competition: "UEFA Champions League",
    homeTeam: "Liverpool",
    homeTeamImage: teams.liverpool,
    awayTeam: "PSG",
    awayTeamImage: teams.psg,
    score: "0-1",
    venue: "Anfield",
    status: "completed",
    goals: [
      { player: "Ousmane Dembélé", minute: 12, team: "PSG" }
    ],
    lineup: {
      PSG: ["Donnarumma", "Hakimi", "Marquinhos", "Pacho", "Nuno Mendes", "Vitinha", "Neves", "Fabián Ruiz", "Dembélé", "Kvaratskhelia", "Barcola"],
      Liverpool: ["Alisson", "Alexander-Arnold", "Konaté", "Van Dijk", "Robertson", "Mac Allister", "Gravenberch", "Szoboszlai", "Salah", "Jota", "Díaz"]
    }
  },
  {
    id: 54,
    date: "2025-04-09",
    time: "21:00",
    competition: "UEFA Champions League",
    homeTeam: "PSG",
    homeTeamImage: teams.psg,
    awayTeam: "Aston Villa",
    awayTeamImage: teams.astonvilla,
    score: "3-1",
    venue: "Parc des Princes",
    status: "completed",
    goals: [
      { player: "Rogers", minute: 35, team: "Aston Villa" },
      { player: "Doue", minute: 39, team: "PSG" },
      { player: "Kvaratskhelia", minute: 49 , team: "PSG" },
      { player: "Nuno Mendes", minute: 92, team: "PSG" }
    ],
    lineup: {
      PSG: ["Donnarumma", "Hakimi", "Beraldo", "Pacho", "Nuno Mendes", "Vitinha", "Neves", "Fabián Ruiz", "Dembélé", "Doue", "Kvaratskhelia"],
      Aston_Villa: ["Martínez", "Cash", "Konsa", "Torres", "Digne", "Onana", "Tielemans", "Bailey", "McGinn", "Rogers", "Watkins"]
    }
  },
  {
    id: 55,
    date: "2025-04-15",
    time: "21:00",
    competition: "UEFA Champions League",
    homeTeamImage: teams.astonvilla,

    homeTeam: "Aston Villa",
    awayTeam: "PSG",
    awayTeamImage: teams.psg,
    score: "3-2",
    venue: "Villa Park",
    status: "completed",
    goals: [
      { player: "Hakimi", minute: 11, team: "PSG" },
      { player: "Nuno Mendes", minute: 27, team: "PSG" },
      { player: "Tielemans", minute: 60, team: "Aston Villa" },
      { player: "McGinn", minute: 55, team: "PSG" },
      { player: "Konsa", minute: 57, team: "Aston Villa" }
    ],
    lineup: {
      PSG: ["Donnarumma", "Hakimi", "Marquinhos", "Pacho", "Nuno Mendes", "Vitinha", "Neves", "Fabián Ruiz", "Dembélé", "Kvaratskhelia", "Barcola"],
      Aston_Villa: ["Martínez", "Cash", "Konsa", "Torres", "Digne", "Onana", "Tielemans", "Rogers", "McGinn", "Kamara", "Rashford"]
    }
  },
  {
    id: 56,
    date: "2025-04-29",
    time: "21:00",
    competition: "UEFA Champions League",
    homeTeam: "Arsenal",
    homeTeamImage: teams.arsenal,
    awayTeam: "PSG",
    awayTeamImage: teams.psg,
    score: "0-1",
    venue: "Emirates Stadium",
    status: "completed",
    goals: [
      { player: "Ousmane Dembélé", minute: 4, team: "PSG" }
    ],
    lineup: {
      PSG: ["Donnarumma", "Hakimi", "Marquinhos", "Pacho", "Nuno Mendes", "Vitinha", "Neves", "Fabián Ruiz", "Dembélé", "Doue", "Kvaratskhelia"],
      Arsenal: ["Raya", "White", "Saliba", "Gabriel", "Timber", "Partey", "Rice", "Saka", "Havertz", "Martinelli", "Ødegaard"]
    }
  },
  {
    id: 57,
    date: "2025-05-07",
    time: "21:00",
    competition: "UEFA Champions League",
    homeTeam: "PSG",
    homeTeamImage: teams.psg,
    awayTeam: "Arsenal",
    awayTeamImage: teams.arsenal,
    score: "2-1",
    venue: "Parc des Princes",
    status: "completed",
    goals: [
      { player: "Fabian Ruiz", minute: 27, team: "PSG" },
      { player: "Hakimi", minute: 72, team: "PSG" },
      { player: "Bukayo Saka", minute: 76, team: "Arsenal" }
    ],
    lineup: {
      PSG: ["Donnarumma", "Hakimi", "Marquinhos", "Pacho", "Nuno Mendes", "Vitinha", "Neves", "Fabián Ruiz", "Kvaratskhelia", "Doue", "Barcola"],
      Arsenal: ["Raya", "Lewis-Skelly;", "Saliba", "Kiwior", "Timber", "Partey", "Rice", "Saka", "Merino", "Martinelli", "Ødegaard"]
    }
  },
  {
    id: 58,
    date: "2025-05-31",
    time: "21:00",
    competition: "UEFA Champions League",
    homeTeam: "Inter Milan",
    homeTeamImage: teams.inter,
    awayTeam: "PSG",
    awayTeamImage: teams.psg,
    score: "0-5",
    venue: "Neutral",
    status: "completed",
    goals: [
      { player: "Hakimi", minute: 12, team: "PSG" },
      { player: "Doue", minute: 20, team: "PSG" },
      { player: "Doue", minute: 73, team: "PSG" },
      { player: "Kvaratskhelia", minute: 73, team: "PSG" },
      { player: "Mayulu", minute: 86, team: "PSG" }
    ],
    lineup: {
      PSG: ["Donnarumma", "Hakimi", "Marquinhos", "Pacho", "Nuno Mendes", "Vitinha", "Neves", "Fabián Ruiz", "Dembélé", "Kvaratskhelia", "Doue"],
      Inter_Milan: ["Sommer", "Pavard", "Acerbi", "Bastoni", "Di marco", "Barella", "Çalhhanoghu","Mkhitaryan","Dumfries", "Thuram","Martinez"]}
    },
     {
    id: 59,
    date: "2025-06-15",
    time: "21:00",
    competition: "FIFA Club World Cup",
    homeTeam: "PSG",
    homeTeamImage: teams.psg,
    awayTeam: "Atletico Madrid",
    awayTeamImage: cwcTeams.atletico,
    score: "4-0",
    venue: "Neutral",
    status: "completed",
    goals: [
      { player: "Fabian Ruiz", minute: 19, team: "PSG" },
      { player: "Vitinha", minute: 45+1, team: "PSG" },
      { player: "Mayulu", minute: 87, team: "PSG" },
      { player: "Lee", minute: 90+7, team: "PSG" },
    ],
    lineup: {
      PSG: ["Donnarumma", "Hakimi", "Marquinhos", "Pacho", "Nuno Mendes", "Vitinha", "Neves", "Fabián Ruiz", "Kvaratskhelia", "Ramos", "Doue"],
      Atlético_Madrid: ["Oblak", "Llorente", "Le Normand", "Lenglet", "Galan", "Simeone", "De Paul","Barrios","Lino","Alvarez","Griezmann"]}
    },
     {
    id: 60,
    date: "2025-06-20",
    time: "21:00",
    competition: "FIFA Club World Cup",
    homeTeam: "PSG",
    homeTeamImage: teams.psg,
    awayTeam: "Botafogo",
    awayTeamImage: cwcTeams.botafogo,
    score: "0-1",
    venue: "Neutral",
    status: "completed",
    goals: [
      { player: "Jesus", minute: 36, team: "Botafogo" },
    ],
    lineup: {
      PSG: ["Donnarumma", "Hakimi", "Beraldo", "Pacho", "Hernandez", "Vitinha", "Zaïre-Emery", "Mayulu", "Doue", "Ramos", "Kvaratskhelia"],
      Botafogo: ["Victor", "Vitinho", "Cunha", "Barboza", "Telles", "Allan", "Savarino","Gregore","Freitas","Guimares","Jesus"]}
    },
         {
    id: 61,
    date: "2025-06-23",
    time: "21:00",
    competition: "FIFA Club World Cup",
    homeTeam: "Seattle Sounders",
    homeTeamImage: cwcTeams.seattlesounders,
    awayTeam: "PSG",
    awayTeamImage: teams.psg,
    score: "0-2",
    venue: "Neutral",
    status: "completed",
    goals: [
      { player: "Khvicha Kvaratskhelia", minute: 35, team: "PSG" },
      { player: "Achraf Hakimi", minute: 67, team: "PSG" },
      
    ],
    lineup: {
      PSG: ["Donnarumma", "Hakimi", "Marquinhos", "Pacho", "Nuno Mendes", "Vitinha", "Neves", "Fabián Ruiz", "Kvaratskhelia", "Mayulu", "Doue"],
      Seattle_Sounders: ["Frei", "Rolden", "Ragen", "Bell", "Tolo", "Roldan", "Vargas", "Kent", "Rusnak", "Rothrock", "Ferreira"]}
    },
    {
    id: 62,
    date: "2025-06-29",
    time: "18:00",
    competition: "FIFA Club World Cup",
    homeTeam: "PSG",
    homeTeamImage: cwcTeams.psg,
    awayTeam: "Inter Miami",
    awayTeamImage: cwcTeams.intermiami,
    score: "vs",
    venue: "Neutral",
    status: "upcoming",
    goals: null,
    lineup: null
    }
]