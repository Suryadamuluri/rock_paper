const value={
  wins:0,
  looses:0,
  ties:0,
};
function computermove() {
  const r = Math.random();
  let cmpmove = '';
  if (r > 0 && r < 1 / 3) {
    cmpmove = 'rock';
  }

  else if (r > 1 / 3 && r < 2 / 3) {
    cmpmove = 'scisors';
  }

  else {
    cmpmove = 'paper';
  }
  return cmpmove;
}


function choice(move) {
  let result = '';
  const k = computermove();
  if (move === 'paper') {
    if (k === 'paper') {
      result = 'tie';
    }
    else if (k === 'rock') {
      result = 'you win';
    }
    else {
      result = 'you lose';
    }
  }
  else if (move === 'rock') {
    if (k === 'rock') {
      result = 'tie';
    }
    else if (k === 'scisors') {
      result = 'you win';
    }
    else {
      result = 'you lose';
    }
  }
  else {
    if (k === 'paper') {
      result = 'you win';
    }
    else if (k === 'scisors') {
      result = 'you tie';
    }
    else {
      result = 'you lose';
    }
  }
  if(result==="you win"){
value.wins+=1;
  }
  else if (result==="you lose"){
value.looses+=1;
  }
  else{
    value.ties+=1;
  }
  alert(`YOU SELECTED ${move},THE COMPUTER SELECTED THE ${k}. ${result}
  wins : ${value.wins} looses : ${value.looses} ties : ${value.ties}`);
}
