/*
contoh kamus :
APPLE
SIT
TRIP
TURNE
SUPER

shake(4)
[[ 'D', 'G', 'H', 'I'],
['K', 'L', 'P', 'S'],
'Y', 'E', 'U', 'T'],
['E', 'O', 'R', 'N']]

solve()
2 words found :
TURN
SUPER

Going deeper (optional)
berada di satu garis lurus, terkoneksi secara diagonal / vertikal / horizontal dst.

*/

import { words } from './data.js';


class Boggle {
  constructor(){
    this._table = []
    this._data = words
  }

  generate(value){
    for(var i=0; i<value; i++){
      this._table.push([])
      for(var j=0; j<value; j++){
        this._table[i].push([])
      }
    }
  }

  insert(){
    for(var i = 0; i < this._table.length; i ++){

      for(var j = 0; j < this._table.length; j ++){
        this._table[i][j] = this.shake()
      }
    }
  }

  random(){
    var random = Math.floor(Math.random() * 25);
    return random
  }

  shake(){
    var alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
    return alphabet[this.random()]
  }
  start(value){
    this.generate(value)
    this.insert()
    console.log("Boggle Table : ");
    console.log(this._table);
    console.log("Words found : ");
    console.log(this.release1());

  }
  solve(){
    var temp = this._table[0][0]
    var sto = []
    for(var idx=0; idx<this._data.length; idx++){
      var mem = this._data[idx]
      if (mem[0]==temp){
        sto.push(this._data[idx])
      }
    }
    return sto
  }

  release1(){
    var has =""
    var sorted = []
    var str = this._table.join()
    str = str.replace(/,/g, "");
    str = str.split("").sort();
    str = str.join("");
    for(var a=0; a<this._data.length; a++){
      var res = this._data[a].split("").sort()
          res = res.join("")
      var regex = new RegExp(".+?(?="+ res +")","gi")
      if(regex.test(str) == true){
        sorted.push(this._data[a])
      }
    }
    if(sorted.length != 0){
      return sorted
    } else {
      return `No words found !`
    }
  }
}

var bogel = new Boggle()

bogel.start(7);
