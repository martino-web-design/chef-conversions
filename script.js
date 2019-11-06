var sel = document.querySelector('select');
var size = document.querySelector('.size');
var input = document.querySelector('#input');
var total = document.querySelector('.total');

// Select value change
function changeValues(){
  if(sel.value == "3"){
    size.textContent = "3oz bag= ";
    input.value = 1;
    total.textContent = "0.19lbs"
  }
  else if(sel.value == "6"){
    size.textContent = "6oz tub= ";
    input.value = 1;
    total.textContent = "0.38lbs"
  }
  else if(sel.value == "8"){
    size.textContent = "8oz tub= ";
    input.value = 1;
    total.textContent = "0.50lbs"
  }
}

// ou to lb
function ouLb(x){
  const ou = x;
  const lb = 0.0625 * ou;
  return lb;
}

// Input value change
input.oninput = function(){
  if(sel.value == "3"){
  const val = input.value;
  total.textContent = (3 * ouLb(val)).toFixed(2) + "lbs";
  }
  else if(sel.value == "6"){
  const val = input.value;
  total.textContent = (6 * ouLb(val)).toFixed(2) + "lbs";
  }
  else if(sel.value == "8"){
  const val = input.value;
  total.textContent = (8 * ouLb(val)).toFixed(2) + "lbs";
  }
}
