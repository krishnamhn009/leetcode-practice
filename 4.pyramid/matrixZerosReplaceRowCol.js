// Tuntun is very creative. She is thinking of a new way to modify the matrix but she is very weak in coding so help her to do so. You are given a n x m integer matrix matrix, if an element is 0, set its entire row and column to 0's.

// You must do it in place.

// Input Format

// - The first line contains two space-separated integers ‘N’ and ‘M’, denoting the no. of the rows and columns of the matrix.

// - The next 'N' lines will contain ‘M’ space separated integers representing the elements of the matrix.

// Output Format:
// print the modified grid in a separate line.
// Example
// 1 1 1                  1 0 1
// 1 0 1     =>           0 0 0
// 1 1 1                  1 0 1


 function solve(n, m, matrix) {
       let rows =n;
  let cols =m;
  
  let firstRowZero = false;
  let firstColZero = false;

  // Check if first row has zero
  for (let j = 0; j < cols; j++) {
    if (matrix[0][j] === 0) {
      firstRowZero = true;
      break;
    }
  }

  // Check if first column has zero
  for (let i = 0; i < rows; i++) {
    if (matrix[i][0] === 0) {
      firstColZero = true;
      break;
    }
  }

  // Use first row and column as markers
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  // Set zeroes based on markers
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  // Zero out first row if needed
  if (firstRowZero) {
    for (let j = 0; j < cols; j++) {
      matrix[0][j] = 0;
    }
  }

  // Zero out first column if needed
  if (firstColZero) {
    for (let i = 0; i < rows; i++) {
      matrix[i][0] = 0;
    }
  }
  //console.log(matrix)
       for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].join(" "));
  }

       }
       let mat = [
  [1, 2, 3],
  [4, 0, 6],
  [7, 8, 9]
];

console.log(solve(3,3,mat));