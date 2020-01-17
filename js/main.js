
//let rollNum;
let img1 = 'img/dice1.svg';
let img2 = 'img/dice2.svg';
let img3 = 'img/dice3.svg';
let img4 =  'img/dice4.svg';
let img5 = 'img/dice5.svg';
let img6 = 'img/dice6.svg';

let image = document.getElementById('img');

function RollDice(){

  let rollNum = Math.floor(Math.random() * 6);

  if(rollNum == 1){
    console.log('number is 1');
    image.src = img1;
  }
    else if(rollNum == 2){
      console.log('number is 2');
      image.src = img2;
    }
    else if( rollNum == 3){
      console.log('number is 3');
      image.src = img3;
    }
    else if(rollNum == 4){
      console.log('number is 4');
      image.src = img4;
    }
    else if( rollNum == 5){
      console.log('number is 5');
      image.src = img5;
    }
    else if(rollNum == 6){
      console.log('number is 6');
      image.src = img6;
    }
  }


  document.getElementById('rollBtn').addEventListener("click",RollDice);


