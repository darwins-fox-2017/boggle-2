"use-strict"

class BoggleBoard{
  constructor(){
    this.board = [
      ['P','E','A','A'],
      ['I','E','E','P'],
      ['N','N','L','P'],
      ['K','E','E','A']
    ]
    this.kamus = ['PEN', 'PINEAPPLE', 'APPLE']
    this.coordinate = [
      [-1,-1],[-1,0],[-1,1],
      [0,-1],        [0,1],
      [1,-1],[1,0],[1,1]
    ]
    this.start = []

    this.coba = []
  }



  // boardPlay(row,column){
  //   for(let i = 0; i<row; i++){
  //     this.board.push([])
  //     for(let j = 0; j<column; j++){
  //       this.board[i].push(String.fromCharCode(Math.floor(Math.random()*(90-65+1)+65)))
  //     }
  //   }
  // }

  // shake(x = 5,y = 5){
  //   this.boardPlay(x,y)
  //   console.log(this.board)
  // }

  // checkAround(x,y,val){// x,y indexdimulai pencarian, val nilai dari huruf yang dicheck?
  //
  //   for (let j = 0; j < this.coordinate.length; j++) {
  //     let coordX = this.coordinate[j][0]+x
  //     let coordY = this.coordinate[j][1]+y
  //     let currCoord = JSON.stringify({"x" : coordX, "y" : coordY})
  //     let lastCoord = JSON.stringify(this.start[this.start.length-1])
  //
  //     if(coordX >= 0 && coordY>= 0 && currCoord!=lastCoord){
  //       if(val == this.board[coordX][coordY]){
  //         this.start.push({"x" : coordX, "y" : coordY})
  //         this.coba.push(val)
  //         return true
  //       }
  //     }
  //   }
  //   return false
  // }

  checkAround(x,y,val){// x,y indexdimulai pencarian, val nilai dari huruf yang dicheck?

    for (let j = 0; j < this.coordinate.length; j++) {
      let coordX = this.coordinate[j][0]+x
      let coordY = this.coordinate[j][1]+y
      let currCoord = JSON.stringify({"x" : coordX, "y" : coordY})
      let lastCoord = JSON.stringify(this.start[this.start.length-1])

      if(coordX >= 0 && coordY>= 0 && currCoord!=lastCoord){
        if(val == this.board[coordX][coordY]){
          this.start.push({"x" : coordX, "y" : coordY})
          this.coba.push(val)
          return true
        }
      }
    }
    return false
  }

  checkInBoard(val){ // check first alfabet if it exists in board
    for (let k = 0; k < this.board.length; k++) {
      for (let l = 0; l < this.board[l].length; l++) {
        if(val == this.board[k][l]){
          this.start.push({"x" : k, "y" : l})
          return true
        }
      }
    }
    return false
  }

  solve(){
    let x = 0
    let y = 0
    let letter = this.board.length * this.board[0].length // banyak huruf
    let kamus = this.kamus.length // semua kata dalam kamus
    let indexKamus = 0

    // while(kamus--){

      let kataCari = this.kamus[indexKamus]
      // "PEN"

      if (this.checkInBoard(kataCari[0])) {
        this.coba.push(kataCari[0])
        kataCari = kataCari.slice(1)

        // this.checkAround(this.start[0].x,this.start[0].y,kataCari)
        for(let i = 0; i<kataCari.length; i++){
          this.checkAround(this.start[i].x,this.start[i].y,kataCari[i])
        // }
      }else{
        indexKamus++
      }

      console.log(this.start);
      console.log(this.coba);



      // if(val == this.board[x+coord[0]][y+coord[1]]){
      //   return true
      // }

    // }


  }
}

var boggle = new BoggleBoard()



boggle.solve(9,9)
