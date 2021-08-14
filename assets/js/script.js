//Wait for the DOM to load before running code
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName('button');

    for(let button of buttons){
        button.addEventListener('click', function(){
            if(this.getAttribute('data-type' === 'submit')){
                alert('You have clicked the submit button');
            } else {
                let gameType = this.getAttribute('data-type');
                alert(`You clicked ${gameType}`);
            }
        })
    }
})


function runGame(){

}

function checkAnswer(){

}

function calculateCorrectAnswer(){

}

function incrementScore(){

}

function incrementWrongAnswer(){

}

function displayAdditionQuestion(){

}

function displaySubtractionQuestion(){

}

function displayMultiplyQuestion(){

}