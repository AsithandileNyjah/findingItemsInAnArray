let display = document.querySelector('[display]')

let enteredArray = document.querySelector('[entries]').value.split(' ')

let btn = document.querySelector('[rem]')

btn.addEventListener('click', remove)

function remove() {
    let enteredArray = document.querySelector('[entries]').value.split(' ');
    let noRepeat = [...new Set(enteredArray)];
    let sortedArray = noRepeat.sort((a, b) => a - b); // Fix the typo here
    console.log(sortedArray);
    display.value = sortedArray.join(' '); // Fix the assignment here
}




// clear button
let klear = document.querySelector('[clear]')

klear.addEventListener('click', clear)

function clear (){
    document.querySelector('[display]').value = '';
    document.querySelector('[entries]').value = '';
}