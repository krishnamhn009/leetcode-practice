// Bholu and Dholu play a game. Initially each player receives one fixed positive integer that doesn't change throughout the game. Bholu receives number a and Dholu receives number b. They also have a heap of n stones. The players take turns to make a move and Bholu starts. During a move a player should take from the heap the number of stones equal to the greatest common divisor of the fixed number he has received and the number of stones left in the heap. A player loses when he cannot take the required number of stones (i. e. the heap has strictly less stones left than one needs to take). Your task is to determine who wins the game.

// Euclidean gcd
function gcd(x, y) {
  x = Math.abs(x);
  y = Math.abs(y);
  while (y !== 0) {
    let r = x % y;
    x = y;
    y = r;
  }
  return x;
}

// returns "Bholu" if Bholu wins, otherwise "Dholu"
function whoWins(n, a, b) {
  let stones = n;
  let turn = 0; // 0 => Bholu, 1 => Dholu

  while (true) {
    if (turn === 0) {
      const g = gcd(a, stones);
      if (stones < g) return "Dholu"; // Bholu cannot move -> Bholu loses -> Dholu wins
      stones -= g;
    } else {
      const g = gcd(b, stones);
      if (stones < g) return "Bholu";
      stones -= g;
    }
    turn = 1 - turn; // switch turn
  }
}

// Example
console.log(whoWins(10, 4, 3)); // prints winner name
