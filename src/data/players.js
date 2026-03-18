
export const playersData = [
  // Cricket Players
  {
    id: 1,
    name: "Virat Kohli",
    sport: "Cricket",
    country: "India",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop&crop=face",
    position: "Batsman",
    age: 35,
    matches: 274,
    runs: 12898,
    average: 57.32,
    centuries: 46,
    halfCenturies: 65,
    achievements: [
      "ICC ODI Player of the Year 2012, 2017, 2018",
      "ICC Test Player of the Year 2018",
      "Fastest to 8000, 9000, 10000, 11000, 12000 ODI runs"
    ],
    careerHighlights: [
      "Scored 183 runs vs Pakistan in 2012 Asia Cup",
      "Led India to ICC Cricket World Cup 2011 victory",
      "First player to score 3 consecutive ODI centuries"
    ],
    stats: {
      batting: { runs: 12898, average: 57.32, strikeRate: 93.62 },
      bowling: { wickets: 4, average: 166.5, economy: 5.12 },
      fielding: { catches: 210, runOuts: 15 }
    }
  },
  {
    id: 2,
    name: "Steve Smith",
    sport: "Cricket",
    country: "Australia",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    position: "Batsman",
    age: 34,
    matches: 96,
    runs: 8647,
    average: 57.67,
    centuries: 30,
    halfCenturies: 37,
    achievements: [
      "ICC Test Player of the Year 2015",
      "ICC Test Team of the Decade 2011-2020",
      "Ranked No. 1 Test batsman (2015-2021)"
    ],
    careerHighlights: [
      "Scored 239 vs England at Edgbaston 2019",
      "Ashes series wins 2017-18, 2019",
      "Double century in his comeback test"
    ],
    stats: {
      batting: { runs: 8647, average: 57.67, strikeRate: 55.8 },
      bowling: { wickets: 17, average: 47.8, economy: 3.2 },
      fielding: { catches: 185, runOuts: 8 }
    }
  },
  
  // Football Players
  {
    id: 3,
    name: "Lionel Messi",
    sport: "Football",
    country: "Argentina",
    image: "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=300&h=300&fit=crop&crop=face",
    position: "Forward",
    age: 36,
    matches: 1033,
    goals: 821,
    assists: 358,
    trophies: 42,
    achievements: [
      "8 Ballon d'Or awards",
      "FIFA World Cup 2022",
      "Copa América 2021"
    ],
    careerHighlights: [
      "91 goals in calendar year 2012",
      "Most goals for Barcelona (672)",
      "World Cup Golden Ball 2014, 2022"
    ],
    stats: {
      scoring: { goals: 821, assists: 358, averageGoals: 0.79 },
      passing: { passAccuracy: 86.2, keyPasses: 2.8 },
      defense: { tackles: 1.2, interceptions: 0.8 }
    }
  },
  {
    id: 4,
    name: "Cristiano Ronaldo",
    sport: "Football",
    country: "Portugal",
    image: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=300&h=300&fit=crop&crop=face",
    position: "Forward",
    age: 38,
    matches: 1189,
    goals: 873,
    assists: 254,
    trophies: 36,
    achievements: [
      "5 Ballon d'Or awards",
      "UEFA European Championship 2016",
      "UEFA Nations League 2019"
    ],
    careerHighlights: [
      "Most goals in UEFA Champions League (140)",
      "All-time top international goalscorer (128)",
      "Goals in 5 different World Cups"
    ],
    stats: {
      scoring: { goals: 873, assists: 254, averageGoals: 0.73 },
      passing: { passAccuracy: 81.8, keyPasses: 2.1 },
      defense: { tackles: 1.8, interceptions: 1.2 }
    }
  },
  
  // Basketball Players
  {
    id: 5,
    name: "LeBron James",
    sport: "Basketball",
    country: "USA",
    image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=300&h=300&fit=crop&crop=face",
    position: "Forward",
    age: 39,
    games: 1492,
    points: 38440,
    rebounds: 10667,
    assists: 10420,
    championships: 4,
    achievements: [
      "4 NBA Championships",
      "4 NBA MVP Awards",
      "NBA All-Time Scoring Leader"
    ],
    careerHighlights: [
      "Scored 61 points vs Bobcats 2014",
      "Triple-double in NBA Finals 2012",
      "First player with 30k+ points, 10k+ rebounds, 10k+ assists"
    ],
    stats: {
      scoring: { points: 38440, average: 27.2, fieldGoal: 50.5 },
      rebounding: { total: 10667, average: 7.5, offensive: 1.2 },
      playmaking: { assists: 10420, average: 7.3, turnovers: 3.5 }
    }
  },
  {
    id: 6,
    name: "Stephen Curry",
    sport: "Basketball",
    country: "USA",
    image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=300&h=300&fit=crop&crop=face",
    position: "Point Guard",
    age: 35,
    games: 826,
    points: 21712,
    rebounds: 4284,
    assists: 5688,
    championships: 4,
    achievements: [
      "4 NBA Championships",
      "2 NBA MVP Awards",
      "NBA All-Time 3-Point Leader"
    ],
    careerHighlights: [
      "Scored 62 points vs Trail Blazers 2021",
      "First unanimous MVP in NBA history 2016",
      "Made 402 three-pointers in 2015-16 season"
    ],
    stats: {
      scoring: { points: 21712, average: 26.3, fieldGoal: 47.3 },
      rebounding: { total: 4284, average: 5.2, offensive: 0.8 },
      playmaking: { assists: 5688, average: 6.9, turnovers: 3.1 }
    }
  },
  
  // Tennis Players
  {
    id: 7,
    name: "Roger Federer",
    sport: "Tennis",
    country: "Switzerland",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&h=300&fit=crop&crop=face",
    position: "All-Rounder",
    age: 42,
    matches: 1526,
    titles: 103,
    grandSlams: 20,
    weeksAtNo1: 310,
    achievements: [
      "20 Grand Slam singles titles",
      "8 Wimbledon titles",
      "ATP Tour Finals champion 6 times"
    ],
    careerHighlights: [
      "Wimbledon 2008 final vs Nadal (Greatest match ever)",
      "Australian Open 2017 comeback win",
      "Oldest world No. 1 at age 36"
    ],
    stats: {
      serving: { aces: 11444, doubleFaults: 2748, firstServe: 62 },
      returning: { breakPointsSaved: 69, breakPointsWon: 42 },
      overall: { winPercentage: 82.1, matchWins: 1253 }
    }
  },
  {
    id: 8,
    name: "Serena Williams",
    sport: "Tennis",
    country: "USA",
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=300&fit=crop&crop=face",
    position: "All-Rounder",
    age: 42,
    matches: 1014,
    titles: 73,
    grandSlams: 23,
    weeksAtNo1: 319,
    achievements: [
      "23 Grand Slam singles titles (Open Era record)",
      "4 Olympic gold medals",
      "Career Golden Slam in singles and doubles"
    ],
    careerHighlights: [
      "Australian Open 2017 while pregnant",
      "US Open 1999 at age 17",
      "Longest span between Grand Slam wins (17 years)"
    ],
    stats: {
      serving: { aces: 3844, doubleFaults: 1456, firstServe: 68 },
      returning: { breakPointsSaved: 62, breakPointsWon: 45 },
      overall: { winPercentage: 85.6, matchWins: 868 }
    }
  },
  
  // Additional Cricket Players
  {
    id: 9,
    name: "Babar Azam",
    sport: "Cricket",
    country: "Pakistan",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f3d?w=300&h=300&fit=crop&crop=face",
    position: "Batsman",
    age: 29,
    matches: 117,
    runs: 5729,
    average: 56.43,
    centuries: 19,
    halfCenturies: 31,
    achievements: [
      "ICC ODI Player of the Year 2022",
      "No. 1 ODI batsman (2021-2023)",
      "Fastest to 1000, 2000, 3000 T20I runs"
    ],
    careerHighlights: [
      "158 runs vs New Zealand 2022",
      "196 runs vs England 2022",
      "Captain of Pakistan cricket team"
    ],
    stats: {
      batting: { runs: 5729, average: 56.43, strikeRate: 89.8 },
      bowling: { wickets: 8, average: 45.2, economy: 6.8 },
      fielding: { catches: 89, runOuts: 12 }
    }
  },
  
  // Additional Football Players
  {
    id: 10,
    name: "Kylian Mbappé",
    sport: "Football",
    country: "France",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop&crop=face",
    position: "Forward",
    age: 25,
    matches: 418,
    goals: 292,
    assists: 108,
    trophies: 18,
    achievements: [
      "FIFA World Cup 2018",
      "World Cup Golden Boot 2022",
      "Ligue 1 Player of the Year 2019, 2021, 2022"
    ],
    careerHighlights: [
      "Hat-trick in World Cup Final 2022",
      "Youngest player to score 30+ Champions League goals",
      "Fastest to 200 goals for PSG"
    ],
    stats: {
      scoring: { goals: 292, assists: 108, averageGoals: 0.7 },
      passing: { passAccuracy: 78.4, keyPasses: 2.3 },
      defense: { tackles: 1.5, interceptions: 0.9 }
    }
  },
  
  // Additional Basketball Players
  {
    id: 11,
    name: "Kevin Durant",
    sport: "Basketball",
    country: "USA",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    position: "Forward",
    age: 35,
    games: 986,
    points: 27404,
    rebounds: 7087,
    assists: 4283,
    championships: 2,
    achievements: [
      "2 NBA Championships",
      "NBA MVP 2014",
      "4 NBA Scoring Titles"
    ],
    careerHighlights: [
      "54 points vs Warriors 2014",
      "50-point triple-double 2022",
      "Olympic gold medals 2012, 2016, 2020"
    ],
    stats: {
      scoring: { points: 27404, average: 27.8, fieldGoal: 49.8 },
      rebounding: { total: 7087, average: 7.2, offensive: 1.0 },
      playmaking: { assists: 4283, average: 4.3, turnovers: 3.1 }
    }
  },
  
  // Additional Tennis Players
  {
    id: 12,
    name: "Rafael Nadal",
    sport: "Tennis",
    country: "Spain",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&h=300&fit=crop&crop=face",
    position: "All-Rounder",
    age: 37,
    matches: 1316,
    titles: 92,
    grandSlams: 22,
    weeksAtNo1: 209,
    achievements: [
      "22 Grand Slam singles titles",
      "14 French Open titles (record)",
      "Olympic gold medals 2008, 2016"
    ],
    careerHighlights: [
      "French Open 2008-2014 dominance",
      "US Open 2010 comeback vs Djokovic",
      "Australian Open 2022 at age 35"
    ],
    stats: {
      serving: { aces: 5234, doubleFaults: 1987, firstServe: 65 },
      returning: { breakPointsSaved: 67, breakPointsWon: 44 },
      overall: { winPercentage: 83.1, matchWins: 1094 }
    }
  }
];

export const sportsCategories = ["All", "Cricket", "Football", "Basketball", "Tennis"];
