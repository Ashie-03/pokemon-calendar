document.querySelector('#create').addEventListener('click', create)

function create(){
    /* Displaying the quote */
    let quote = document.querySelector('#quoteValue').value
    document.querySelector('#quote').innerText = `"${quote}"`
}

/* Bg changer */

document.getElementById('eevee').onclick = eevee
document.getElementById('pikachu').onclick = pikachu
document.getElementById('minccino').onclick = minccino
document.getElementById('shaymin').onclick = shaymin
document.getElementById('emolga').onclick = emolga
document.getElementById('jigglypuff').onclick = jigglypuff

imagePokemon = document.querySelector('#imagePokemon')

function eevee(){
    imagePokemon.style.backgroundImage = 'url("eevee.png")';
    imagePokemon.style.backgroundSize = '250px 200px';
    document.querySelector('.container').style.background = 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)';
    document.querySelector('.container').style.color = '#a52a2a'
}

function pikachu(){
    imagePokemon.style.backgroundImage = 'url("Pikachu.png")';
    imagePokemon.style.backgroundSize = '250px 200px';
    document.querySelector('.container').style.background = 'linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%)';
    document.querySelector('.container').style.color = '#ffff00'
}

function minccino(){
    imagePokemon.style.backgroundImage = 'url("Minccino.png")';
    imagePokemon.style.backgroundSize = '250px 200px';
    document.querySelector('.container').style.background = 'linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%)';
    document.querySelector('.container').style.color = '#808080'
}

function shaymin(){
    imagePokemon.style.backgroundImage = 'url("Shaymin.png")';
    imagePokemon.style.backgroundSize = '250px 200px';
    document.querySelector('.container').style.background = 'linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)';
    document.querySelector('.container').style.color = '#008000'
}

function emolga(){
    imagePokemon.style.backgroundImage = 'url("Emolga.png")';
    imagePokemon.style.backgroundSize = '250px 200px';
    document.querySelector('.container').style.background = 'linear-gradient(225deg, #f595ce 0%, #856d9d 50%, #6699c0 100%)';
    document.querySelector('.container').style.color = '#000'
}

function jigglypuff(){
    imagePokemon.style.backgroundImage = 'url("Jigglypuff.png")';
    imagePokemon.style.backgroundSize = '250px 200px';
    document.querySelector('.container').style.background = 'linear-gradient(180deg, #A9C9FF 0%, #FFBBEC 100%)';
    document.querySelector('.container').style.color = '#75466b'
}


