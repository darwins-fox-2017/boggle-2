class BoggleBoard {
  constructor(board) {
    this.board = board
    // Test correct
    // this.word = ['A', 'P', 'E', 'L']
    // Test another correcr
    // this.word = ['B', 'L', 'K', 'Q']
    // Test fail
    this.word = ['B', 'L', 'K', 'G']
    this.letter = []
  }

  findingNeighbors(i, j, next) {
    // console.log('' + this.board[i][j]);
    let rowLimit = myArray.length-1;
    let columnLimit = myArray[0].length-1;
    for(let x = Math.max(0, i-1); x <= Math.min(i+1, rowLimit); x++) {
      for(let y = Math.max(0, j-1); y <= Math.min(j+1, columnLimit); y++) {
        if(x !== i || y !== j) {
          // debugger
          if (this.board[x][y] == next) {
            return true
          }
        }
      }
    }
    return false
  }

  findChar(char){
    let rowLimit = myArray.length-1;
    let columnLimit = myArray[0].length-1;

    for(let x = 0; x < rowLimit; x++) {
      for(let y = 0; y < columnLimit; y++) {
        if (this.board[x][y] == char) {
          // console.log('found ' + char + ' at ' + x + ' and ' + y);
          return [x, y]
        }
      }
    }

  }

  findChaining(){
    let len = this.word.length -1
    let foundCount = 0
    for (let i = 0; i < len; i++) {
      let charPos = this.findChar(this.word[i])
      // console.log('next : ' + this.word[i+1]);
      if (this.findingNeighbors(charPos[0], charPos[1], this.word[i+1])) {
        foundCount++
      }
      // console.log('nextnya ketemu : ' + this.findingNeighbors(charPos[0], charPos[1], this.word[i+1]));
    }
    if (len == foundCount) {
        console.log('Yes, bener, Sis!');
        return true
    } else {
      console.log('Ah, sorry sis, gak ketemu!');
      return false
    }
  }

}
let myArray = [['A', 'P', 'B', 'E'],
              ['J', 'E', 'L', 'K'],
              ['L', 'W', 'K', 'O'],
              ['G', 'T', 'Q', 'Z']]

let mariMain = new BoggleBoard(myArray)
mariMain.findChaining()
