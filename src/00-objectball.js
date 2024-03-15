function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1
          }
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12
          }
        }
      }
    };
  }
  
  function numPointsScored(playerName) {
    const game = gameObject();
    for (const team in game) {
      if (game.hasOwnProperty(team)) {
        const players = game[team].players;
        if (players.hasOwnProperty(playerName)) {
          return players[playerName].points;
        }
      }
    }
    return null; // Player not found
  }
  
  function shoeSize(playerName) {
    const game = gameObject();
    for (const team in game) {
      if (game.hasOwnProperty(team)) {
        const players = game[team].players;
        if (players.hasOwnProperty(playerName)) {
          return players[playerName].shoe;
        }
      }
    }
    return null; // Player not found
  }
  
  function teamColors(teamName) {
    const game = gameObject();
    for (const team in game) {
      if (game.hasOwnProperty(team) && game[team].teamName === teamName) {
        return game[team].colors;
      }
    }
    return null; // Team not found
  }
  
  function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
  }
  
  function playerNumbers(teamName) {
    const game = gameObject();
    for (const team in game) {
      if (game.hasOwnProperty(team) && game[team].teamName === teamName) {
        const players = game[team].players;
        return Object.values(players).map(player => player.number);
      }
    }
    return null; // Team not found
  }
  
  function playerStats(playerName) {
    const game = gameObject();
    for (const team in game) {
      if (game.hasOwnProperty(team)) {
        const players = game[team].players;
        if (players.hasOwnProperty(playerName)) {
          return players[playerName];
        }
      }
    }
    return null; // Player not found
  }
  
  function bigShoeRebounds() {
    const game = gameObject();
    let largestShoeSize = 0;
    let playerWithLargestShoe = null;
    for (const team in game) {
      if (game.hasOwnProperty(team)) {
        const players = game[team].players;
        for (const playerName in players) {
          if (players.hasOwnProperty(playerName)) {
            const shoeSize = players[playerName].shoe;
            if (shoeSize > largestShoeSize) {
              largestShoeSize = shoeSize;
              playerWithLargestShoe = playerName;
            }
          }
        }
      }
    }
    return playerStats(playerWithLargestShoe).rebounds;
  }
  
  function mostPointsScored() {
    const game = gameObject();
    let maxPoints = 0;
    let playerWithMostPoints = null;
    for (const team in game) {
      if (game.hasOwnProperty(team)) {
        const players = game[team].players;
        for (const playerName in players) {
          if (players.hasOwnProperty(playerName)) {
            const points = players[playerName].points;
            if (points > maxPoints) {
              maxPoints = points;
              playerWithMostPoints = playerName;
            }
          }
        }
      }
    }
    return playerWithMostPoints;
  }
  
  function totalPoints(teamName) {
    const game = gameObject();
    let totalPoints = 0;
    for (const team in game) {
      if (game.hasOwnProperty(team) && game[team].teamName === teamName) {
        const players = game[team].players;
        for (const playerName in players) {
          if (players.hasOwnProperty(playerName)) {
            totalPoints += players[playerName].points;
          }
        }
      }
    }
    return totalPoints;
  }
  
  function winningTeam() {
    const game = gameObject();
    const homePoints = totalPoints(game.home.teamName);
    const awayPoints = totalPoints(game.away.teamName);
    if (homePoints > awayPoints) {
      return game.home.teamName;
    } else if (awayPoints > homePoints) {
      return game.away.teamName;
    } else {
      return "It's a tie!";
    }
  }
  
  function playerWithLongestName() {
    const game = gameObject();
    let longestNameLength = 0;
    let playerWithLongestName = null;
    for (const team in game) {
      if (game.hasOwnProperty(team)) {
        const players = game[team].players;
        for (const playerName in players) {
          if (players.hasOwnProperty(playerName)) {
            if (playerName.length > longestNameLength) {
              longestNameLength = playerName.length;
              playerWithLongestName = playerName;
            }
          }
        }
      }
    }
    return playerWithLongestName;
  }
  
 
  console.log(numPointsScored("Alan Anderson")); 
  console.log(shoeSize("Ben Gordon")); 
  console.log(teamColors("Brooklyn Nets")); 
  console.log(teamNames()); 
  console.log(playerNumbers("Brooklyn Nets")); 
  console.log(playerStats("Jason Terry")); 
  console.log(bigShoeRebounds());
  console.log(mostPointsScored()); 
  console.log(winningTeam()); 
  console.log(playerWithLongestName()); 
  