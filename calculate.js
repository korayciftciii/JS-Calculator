const display=document.querySelector('.calculater-input');
const keys=document.querySelector('.calculater-keys');
const operator=document.querySelector('.operator');

let displayValue='0';
update();
function update(){

    display.value=displayValue;


}
keys.addEventListener('click',function(e){
    const element=e.target;
if(!element.matches('button'))return;
//matches ile button eşleşmediğinde false değer alıyor if e girmeyip geri döndürmüyor ama değilini alırsak true dönüp geri gönderiri,
if(element.classList.contains('operator')){}
if(element.classList.contains('decimal')){ inputDecimal();   update();return;} 
if(element.classList.contains('clear')){clear();update(); return;} 
if(element.classList.contains('equal-sign')){} 
inputNumber(element.value);
update();
});

function inputNumber(num){
  
displayValue=displayValue==='0' ? num: displayValue+num;


}


function clear(){
    displayValue='0';
}

function inputDecimal()
{
 
if(!displayValue.includes('.'))
{
    displayValue+='.';
}

}