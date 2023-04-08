const Ship = require('./ship');

test('Ship has correct length', () => {
  const myShip = Ship(3);
  expect(myShip.length).toBe(3);
});

test('Ship is not initially sunk', () => {
  const myShip = Ship(3);
  expect(myShip.isSunk()).toBe(false);
});

test('Ship is sunk when hit enough times', () => {
  const myShip = Ship(3);
  myShip.hit();
  myShip.hit();
  myShip.hit();
  expect(myShip.isSunk()).toBe(true);
});

test('Ship is not sunk when hit fewer times', () => {
  const myShip = Ship(3);
  myShip.hit();
  myShip.hit();
  expect(myShip.isSunk()).toBe(false);
});
