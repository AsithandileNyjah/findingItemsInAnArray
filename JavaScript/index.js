let display = document.querySelector('[display]')

let enteredArray = document.querySelector('[entries]').value.split(' ')

let btn = document.querySelector('[rem]')

btn.addEventListener('click', remove)

function remove(){
    let enteredArray = document.querySelector('[entries]').value.split(' ');
    let newArray = [...new Set(enteredArray)];
    console.log(newArray);
    display.value = newArray.join('" "')
}



// clear button
let klear = document.querySelector('[clear]')

klear.addEventListener('click', clear)

function clear (){
    document.querySelector('[display]').value = '';
    document.querySelector('[entries]').value = '';
}