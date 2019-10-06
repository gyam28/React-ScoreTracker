const scores = [
  {
    _id: "5b21ca3eeb7f6fbccd471810",
    name: "Shakira",
    score: 6
  },
  {
    _id: "5b21ca3eeb7f6fbccd471811",
    name: "Lizzie",
    score: 4
  },
  {
    _id: "5b21ca3eeb7f6fbccd471812",
    name: "Storm Trooper",
    score: 8
  },
  {
    _id: "5b21ca3eeb7f6fbccd471813",
    name: "Dexter",
    score: 5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471814",
    name: "Rocky",
    score: 3
  },
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    name: "Milka",
    score: 1
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    name: "Chewbacca",
    score: 7
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    name: "Redbull",
    score: 9
  }
];

export function getScores() {
  return scores;
}

export function createScore(player, points) {
  const newScore = { _id: Date.now().toString(), name: player, score: points };
  return newScore;
}
