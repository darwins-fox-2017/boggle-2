"use strict"
import {words} from "./data.js"

class Board {
  constructor(panjang, lebar) {
    this.board = [];
    this.panjang = panjang;
    this.lebar = lebar;
    this.alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W',
                    'X','Y','Z'];
  }

  shake() {
    for (let i = 0; i < this.panjang; i++) {
      this.board.push([]);
      for (let j = 0; j < this.lebar; j++) {
        let random = Math.floor(Math.random() * 26);
        this.board[i].push(this.alphabet[random]);
      }
    }
    return this.board;
  }
}

class Boggler{
  constructor(wordSearch, data){
    this.wordSearch = wordSearch.toUpperCase();
    this.data = data;
    this.result = []
    this.start = ""
    this.point = 1
    this.finish = false
    this.val = 0
  }
  toObject(){
    let result = []
    for (let i = 0; i < this.data.length; i++){
      for (let j = 0; j < this.data[i].length; j++){
        let ini = {}
        ini["letter"] = this.data[i][j]
        ini["position"] = [i, j]
        this.result.push(ini)
      }
    }
    return this.result
  }

  searchFirstIndex() {
    for (let j = 0; j < this.result.length; j++){
      if (this.result[j].letter == this.wordSearch[0]){
        this.start = this.result[j]
      return true
      }
    }
    return false
  }

  searchNext() {
    while (!this.finish && this.val < 10){
      let a = 0, b = 0, c = 0, d = 0
      if (this.start.position[0] != 0){
        b = -1
      }
      if (this.start.position[1] != 0){
        a = -1
      }
      let left = this.start.position[0] +b
      let right = this.start.position[1] +a
      if (left == 0){c = -1}
      if (right == 0){d = -1}
      for (let i = left; i < left +2 +c; i++){
        for (let j = right; j < right +2 +d; j++ ){
          if (this.start.position == [i,j] || i < 0 || j < 0 || i > 3 || j > 3){
          } else if (this.data[i][j] == this.wordSearch[this.point]){
            this.start.position = [i,j]
            this.start.letter = this.wordSearch[this.point]
            this.point++
            break;
          }
        }
      }
      this.val++
      if (this.point == this.wordSearch.length){
        this.finish = true
        return true
      }
    }
    return false
  }
  running(){
    this.toObject();
    if (this.searchFirstIndex()){
      return this.searchNext()
    } else { return false}
  }
}

function viaKamus(board){
  let result = []
  console.log(board);
  for (let i = 0; i < words.length; i++){
    let solve = new Boggler(words[i], board)
    if (solve.running()){
      result.push(words[i])
    }
  }
  return `${result}\nditemukan ${result.length} kata dikamus pada board`
}
var boggleBoard = new Board(6,6)
console.log(viaKamus(boggleBoard.shake()));
