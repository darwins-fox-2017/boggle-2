//boggle ke1
// function boggle(num){
// var bboard = []
// var alphabets = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')
//
//   for (var i = 0; i < num; i++){
//     let papan = []
//     bboard.push(papan)
//     for(var j = 0; j < num; j++){
//       let random = Math.floor(Math.random() * 26)
//          papan.push(alphabets[random])
//        }
//   }
//   return bboard
// }
// console.log(boggle(4));

//bogl ke2
//papan
var dataTes =
[['B', 'C', 'F', 'W'],
[ 'Q', 'E', 'D', 'A' ],
[ 'M', 'K', 'U', 'X' ],
[ 'L', 'J', 'S', 'R' ]]

//libary
var tes= ['CEK','ADEK','ADU','DUS','ADUK','KEDUA','NANDFNDINIAD','SATU','DUA']
//'CEK','ADEK','ADU','DUS','ADUK','KEDUA','NANDFNDINIAD','SATU','DUA'

//grouping alphabets
function tetangga(lib,papan){
  var huruf=[]
  for(var i=0; i<papan.length;i++){
    for(var j=0;j<papan[i].length;j++){

        if(lib===papan[i][j]){
          huruf.push(papan[i][j+1])
          // console.log(huruf);
          huruf.push(papan[i][j-1])
          if(papan[i-1] !== undefined ){
            huruf.push(papan[i-1][j])
            huruf.push(papan[i-1][j-1])
            huruf.push(papan[i-1][j+1])
            // console.log(huruf);
          }
          else{
            huruf.push(0)
          }
          if(papan[i+1] !== undefined){
            huruf.push(papan[i+1][j])
            huruf.push(papan[i+1][j-1])
            huruf.push(papan[i+1][j+1])
            // console.log(huruf);
          }
          else{
            huruf.push(0)
          }
      }

    }
  }
  // console.log(huruf);
  return huruf
}

//cek
function cek(tes,datates){
  var j=[]
  for(var i=0;i<tes.length-1;i++){
    j.push(tetangga(tes[i],datates))
  }

  // console.log(j);
  var p=''
  for(var l=0;l<j.length;l++){
    for(var n=0;n<j[l].length;n++){
      if(tes[l+1]===j[l][n]){
        p +='1'
        // console.log(p);
      }
    }
  }
  if(p.length===tes.length-1){
    // console.log(tes);
    return tes;
  }
  // console.log(tes);
}

//print library match
function boggle(lib,papan){
  var res = 'hasil pencarian di papan menemukan kata berikut: '
  var temp=[]
  for(var i=0;i<lib.length;i++){
    temp.push(cek(lib[i],papan))
    // console.log(temp);
  }
  for(var j=0;j<temp.length;j++){
    if(temp[j] !==undefined){
      res += temp[j]+' '
    }
  }
  console.log(temp);
  return res
}




console.log(dataTes);

console.log(boggle(tes,dataTes))
