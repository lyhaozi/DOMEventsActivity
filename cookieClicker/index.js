// const counter = document.querySelector('#counter')
// const counterBox = document.createElement('counterBox')
// counterBox.style.border = "1px solid blueviolet";
const img = document.querySelector('.img')
const button = document.querySelector('#img');
// let number = document.querySelector('#number');
let number 
number = 0;
img.addEventListener('click', function(){
    console.log('clickme');
number++;
// button.innerHTML = counter
document.querySelector('#number').innerHTML = number;
}

)
