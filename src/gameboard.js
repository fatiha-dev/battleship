const Gameboard = () => {
    const board = Array(10).fill(null).map(() => Array(10).fill(null));
    const ships = [];
  
    const placeShip = (ship, x, y, isHorizontal) => {
      if (isHorizontal) {
        for (let i = 0; i < ship.length; i++) {
          if (x + i >= 10) {
            return false;
          }
          if (board[x + i][y]) {
            return false;
          }
        }
        for (let i = 0; i < ship.length; i++) {
          board[x + i][y] = ship;
        }
      } else {
        for (let i = 0; i < ship.length; i++) {
          if (y + i >= 10) {
            return false;
          }
          if (board[x][y + i]) {
            return false;
          }
        }
        for (let i = 0; i < ship.length; i++) {
          board[x][y + i] = ship;
        }
      }
      ships.push(ship);
      return true;
    };
  
    const receiveAttack = (x, y) => {
      const target = board[x][y];
      if (!target) {
        board[x][y] = 'miss';
        return 'miss';
      }
      target.hit();
      if (target.isSunk()) {
        return 'sunk';
      }
      return 'hit';
    };
  
    const allShipsSunk = () => ships.every(ship => ship.isSunk());
  
    return {
      board,
      placeShip,
      receiveAttack,
      allShipsSunk
    };
  };
  