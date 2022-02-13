function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4){
        return pin;
    }else{
        return getPin();
    }

}

function generatePin(){
    const generatedPin = getPin();
    document.getElementById('display-pin').value = generatedPin;
}

document.getElementById('key-pad').addEventListener('click', function (event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value = '';
        }
    }else{
    const previousNumber = calcInput.value;
    const newCalc = previousNumber + number;
    calcInput.value = newCalc
    }    
})

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;

    if(pin == typedNumbers){
        document.getElementById('mached').style.display = 'block';
        document.getElementById('unmached').style.display = 'none';
    }else{
        document.getElementById('unmached').style.display = 'block';
        document.getElementById('mached').style.display = 'none';
    }
}

document.getElementById('submit').addEventListener('click', function (){
    verifyPin();
})