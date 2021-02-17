let range = document.querySelectorAll('input[type=range]');
let text = document.querySelectorAll('input[type=text]');
let textBlock = document.querySelectorAll('.text__block');
let result = document.querySelector('.result');

for(let i = 0; i < range.length; i++) {
        range[i].oninput = function() {
            for(let j = 0; j < text.length; j++) {
                text[i].value = this.value;
textBlock[i].innerHTML = `border-top-left-radius:  ` +this.value+ `px;` ;
            }
result.style.borderRadius = text[0].value+ `px ` +text[1].value+ `px `+text[2].value+ `px `+text[3].value+ `px ` ;
        }
}
