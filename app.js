const h1 = document.querySelector('h1');
var count = 0;

function add() {
    count +=1;
    h1.innerHTML=count;
}

function minus() {
  count -=1;
  h1.innerHTML=count;
}

