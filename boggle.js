class BoggleBoard {
  constructor(board) {
    this.board = board
    this.word = ['A', 'P', 'E', 'L']
    this.letter = []
  }

  findingNeighbors(i, j) {
    console.log('' + this.board[i][j]);
    let rowLimit = myArray.length-1;
    let columnLimit = myArray[0].length-1;
    for(let x = Math.max(0, i-1); x <= Math.min(i+1, rowLimit); x++) {
      for(let y = Math.max(0, j-1); y <= Math.min(j+1, columnLimit); y++) {
        if(x !== i || y !== j) {

          console.log(this.board[x][y]);
        }
      }
    }
  }

  findChar(char){
    let rowLimit = myArray.length-1;
    let columnLimit = myArray[0].length-1;
    let letter = {}

    for(let x = 0; x < rowLimit; x++) {
      for(let y = 0; y < columnLimit; y++) {
        console.log(this.board[x][y]);
      }
    }

  }

}
let myArray = [['A', 'P', 'B', 'E'],
              ['J', 'E', 'L', 'K'],
              ['L', 'W', 'K', 'O'],
              ['G', 'T', 'Q', 'Z']]

let mariMain = new BoggleBoard(myArray)

mariMain.findingNeighbors(2, 1)
// mariMain.findChar('E')
// mariMain.findChar('L')
