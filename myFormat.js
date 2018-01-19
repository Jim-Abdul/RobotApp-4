const board = [
    ['T', 'T', '.', 'F'],
    ['T', '.', '.', '.'],
    ['.', '.', '.', '.'],
    ['R', '.', '.', 'W']
  ];
  
//------------------------------

const robot = {
    x: 0,
    y: 0,
    dir: 'up'
  };
 
//------------------------------

  let moves = 0;
  let turns = 0;
  let applesEaten = 0;
  

//------------------------------

const trailIndicators = {
    left: '←',
    right: '→',
    up: '↑',
    down: '↓'
  };

//------------------------------

board.reverse();

//------------------------------

  function move() {

    let x = robot.x;
    let y = robot.y;

    if (robot.dir === 'up') {
      robot.dir = 'up';
      if (y < board.length - 1) {
        y = y + 1
      } else {
        y = y
      }

    } else if (robot.dir === 'down') {
      robot.dir = 'down';
      if (y > 0) {
        y = y - 1
      } else {
        y = y
      }

    } else if (robot.dir === 'left') {
      robot.dir = 'left';
      if (x > 0) {
        x = x - 1
      } else {
        x = x
      }

    } else if (robot.dir === 'right') {
      robot.dir = 'right';
      if (x < board[0].length - 1) {
        x = x + 1
      } else {
        x = x
      }

    }

    const cell = board[y][x];

    if (cell === '.' || cell === 'F' || cell === 'A') {
      board[robot.y][robot.x] = trailIndicators[robot.dir];
      robot.x = x;
      robot.y = y;
      if (cell === 'F') {
        console.log(`flag reached in ${moves} moves and ${turns} turns`);
        if (applesEaten > 0) {
          console.log('total apples eaten: ' + applesEaten);
        }
      } else if (cell === 'A') {
        applesEaten += 1;
        console.log('apple eaten: YUM');
      }
    } else {
      console.log('move blocked by obstacle');
    }

    moves += 1;
    
  }
  move();

//------------------------------------------------------------

  function turn(turnDirection) {
    
    if (turnDirection !== 'left' && turnDirection !== 'right') {
      console.log('ignoring invalid turn', turnDirection);
      return;
    }

    if (robot.dir === 'up') {
      robot.dir = 'up';
      if (turnDirection === 'left') {
        robot.dir = 'left';
      } else {
        robot.dir = 'right';
      }
    } else if (robot.dir === 'down') {
      robot.dir = 'down';
      if (turnDirection === 'left') {
        robot.dir = 'right';
      } else {
        robot.dir = 'left';
      }
    } else if (robot.dir === 'left') {
      robot.dir = 'left';
      if (turnDirection === 'left') {
        robot.dir = 'down';
      } else {
        robot.dir = 'up';
      }
    } else if (robot.dir === 'right') {
      robot.dir = 'right';
      if (turnDirection === 'left') {
        robot.dir = 'up';
      } else {
        robot.dir = 'down';
      }
    }
    
  }
  turn();
