
var value;
function recursiveFibonacci(n)  {
  if(n<2){
    return n;
  }
  else if(n==3){
      return 1;
  }
    else
        return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}
function recursiveTribonacci(n)
{
    if(n==1){
        return 0;
    }
    else if(n==2){
        return 1;
    }
    else if(n==3){
        return 1;
    }
    else if(n>3){
        return (recursiveTribonacci(n-1)+recursiveTribonacci(n-2)+recursiveTribonacci(n-3));
    }
    else{
        return -1;
    }
}

function recursivePell(n){
    if(n === 0){
      return 1;
    }
    else if (n===1){
      return 2;
    }
    else{
      return (2*recursivePell(n - 1)) + recursivePell(n - 2);
    }

}
function fibonacci(value1){
  fibDivs(value1,0);
}
function tribonacci(value1){
  tribDivs(value1,0);
}
function pell(value1){
  pellDivs(value1,0);
}
function fibDivs(n,x){
  if(n<0)return;
  var levelColor=(.1*x);
  var value;
  var div = document.createElement('div');
  div.setAttribute("id", "stepDivFib");
  if(n==1)
    value = 0;
  else if(n==2)
    value = 1;
  else if(n==3)
    value = 1;
  else {value = recursiveFibonacci(n);}
  var node = document.createTextNode('Fib('+ n + ') = ' + value);
  div.appendChild(node);
  var element = document.getElementById('fib');
  element.appendChild(div);
  div.style.backgroundColor = 'rgba(128,0,128,'+ levelColor+')';
  fibDivs(n-1,x+1);
}
function tribDivs(n,x){
  if(n<0)return;
  var levelColor=(.1*x);
  var value;
  var div = document.createElement('div');
  div.setAttribute("id", "stepDivTrib");
  if(n<2){
    if(n === 0){
      value=0;
    }
    else if (n===1){
      value=1;
    }
  }
  else {value = recursiveTribonacci(n);}
  var node = document.createTextNode('Fib('+ n + ') = ' + value);
  div.appendChild(node);
  var element = document.getElementById('trib');
  element.appendChild(div);
  div.style.backgroundColor = 'rgba(128,0,128,'+ levelColor+')';
  tribDivs(n-1,x+1);
}

function pellDivs(n,x){
  if(n<0)return;
  var levelColor=(.1*x);
  var value;
  var div = document.createElement('div');
  div.setAttribute("id", "stepDivPell");
  if(n<2){
    if(n === 0){
      value=1;
    }
    else if (n===1){
      value=2;
    }
  }
  else {value = recursivePell(n);}
  var node = document.createTextNode('Pell('+ n + ') = ' + value);
  div.appendChild(node);
  var element = document.getElementById('pell');
  element.appendChild(div);
  div.style.backgroundColor = 'rgba(128,0,128,'+ levelColor+')';
  pellDivs(n-1,x+1);
}
var fibButton = function(me) {
  while(document.getElementById("stepDivFib")){
    var element = document.getElementById("stepDivFib");
    element.parentNode.removeChild(element);
    }
	var form = me.parentNode;
	var slider = form.querySelector('input');
	value = slider.value;
  fibonacci(value);
}
var fibSlider = function(me) {

	var form = me.parentNode;
	var button = form.querySelector('button');
	button.textContent = 'Fib(' + me.value + ')';

}
var tribButton = function(me) {
  while(document.getElementById("stepDivTrib")){
    var element = document.getElementById("stepDivTrib");
    element.parentNode.removeChild(element);
    }
	var form = me.parentNode;
	var slider = form.querySelector('input');
	value = slider.value;
  tribonacci(value);
}
var tribSlider = function(me) {
	var form = me.parentNode;
	var button = form.querySelector('button');
	button.textContent = 'Trib(' + me.value + ')';

}
var pellButton = function(me) {
  while(document.getElementById("stepDivPell")){
    var element = document.getElementById("stepDivPell");
    element.parentNode.removeChild(element);
    }
	var form = me.parentNode;
	var slider = form.querySelector('input');
	value = slider.value;
  pell(value);
}
var pellSlider = function(me) {
	var form = me.parentNode;
	var button = form.querySelector('button');
	button.textContent = 'Pell(' + me.value + ')';

}
