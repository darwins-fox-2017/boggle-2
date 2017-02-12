class BoggleBoard {
    constructor() {
        this.board;
        let alfabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.alfabet = alfabet.split('');
    }
    shake(dimensi) {
        this.board = [];
        for (let line = 0; line < dimensi; line++) {
            let lineValue = [];
            for (var collum = 0; collum < dimensi; collum++) {
                lineValue.push(this.randomAlfabet())
            }
            this.board.push(lineValue);
        }
    }
    randomAlfabet() {
        let indexAlfabet = Math.floor(Math.random() * (this.alfabet.length - 1))
        return this.alfabet[indexAlfabet];
        return indexAlfabet
    }

    solver(board, word) {
        word = word.toUpperCase();
        word = word.split('');
        //menyimpan panjang bagian kata yang telah di temukan.
        let finlen = 0;
        //lakukan perulangan sebanyak board
        for (var i = 0; i < board.length; i++) {
            for (var j = 0; j < board[0].length; j++) {
                //jika ditemukan huruf di board yang sama dengan huruf pertama kata yang di cek
                let finlen = 0;
                let row = i;
                let coll = j;
                if (word[0] == board[row][coll]) {
                    //console.log(row, coll);
                    finlen++;
                    for (var wordIn = 1; wordIn < word.length; wordIn++) {
                        //melakukan pengecekan terhadap tetangga dari huruf yang sama.
                        if (this.checkNeigbor(row, coll, word[wordIn], board).length == 2) {
                            //merubah posisi menjadi posisi kata huruf terakhir yang didapati sama
                            let newpos = this.checkNeigbor(row, coll, word[wordIn], board);
                            row = newpos[0];
                            coll = newpos[1];
                            finlen++
                        } else {
                            break;
                        }
                    }
                    //membandingkan jika panjang huruf yang ditemukan sama dengan panjang kata maka kata telah di temukan didalam boogle
                    if (finlen == word.length) {
                        return true;
                    }
                }

            }
        }
        return false;
    }

    checkNeigbor(i, j, char, board) {
        let maxboardi = board.length - 1;
        let maxboardj = board[0].length - 1;

        for (var row = Math.max(0, i - 1); row <= Math.min(i + 1, maxboardi); row++) {
            for (var coll = Math.max(0, j - 1); coll <= Math.min(j + 1, maxboardi); coll++) {
                //console.log(row,coll);
                if (row != i || coll != j) {
                    if (board[row][coll] == char) {
                        return [row, coll];
                    }
                }
            }
        }
        return [];
    }


}

var bogle = new BoggleBoard();
let board = [
    ['O', 'M', 'B', 'E'],
    ['V', 'O', 'L', 'K'],
    ['E', 'W', 'K', 'O'],
    ['G', 'T', 'Q', 'Z']
];

console.log(bogle.solver(board, 'move'));
//console.log(bogle.checkNeigbor(0, 0,'P', board));
