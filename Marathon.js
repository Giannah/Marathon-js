class Marathon {
  calculateResult() {
    const startPosition = 1288
    const input = [
      '114 8',
      '137 19',
      '104 9',
      '38 13',
      '140 10',
      '28 17',
      '40 8',
      '18 5',
      '141 1',
      '5 0',
      '15 17',
      '106 15',
      '120 18',
      '88 2',
      '54 3',
      '134 17',
      '70 12',
      '22 15',
      '56 12',
      '104 10',
      '143 6',
      '108 8',
      '154 1',
      '64 9',
      '81 17',
      '88 3',
      '121 2',
      '77 10',
      '82 6',
      '34 6',
      '25 12',
      '79 2',
      '46 8',
      '86 13',
      '120 12',
      '40 8',
      '26 12',
      '71 19',
      '71 18',
      '57 1',
      '54 1',
      '144 16',
    ]

    function toGainedPositions(element) {
      const positionsAsStrings = element.split(' ')
      const lostPlaces = Number(positionsAsStrings[0])
      const earnedPlaces = Number(positionsAsStrings[1])

      const gainedPositions = earnedPlaces - lostPlaces

      return gainedPositions
    }

    const finalPosition = input
      .map(toGainedPositions)
      .reduce(
        (currentPosition, gainedPositions) => currentPosition - gainedPositions,
        startPosition,
      )
    if (finalPosition >= 1 && finalPosition <= 100) {
      return '1100'
    } else if (finalPosition >= 101 && finalPosition <= 10_000) {
      return '100'
    } else {
      return 'KO'
    }
  }
}

const marathon = new Marathon()

console.log(marathon.calculateResult())
