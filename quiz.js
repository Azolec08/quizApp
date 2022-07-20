
let quizeData = [
    {
        question:'What is the protagonist in the anime One Piece?',
        a:'Roronoa Zoro',
        b:'Nico Robin',
        c:'Monkey D Luffy',
        d:'Chopper',
        Correct:'C'
    },

    {
        question:'What is the the Treasure name in the Anime One piece?',
        a:'One Piece',
        b:'Marijoa',
        c:'Zou',
        d:'Joy Boy',
        Correct:'a'
    },
    {
        question:'What is the Vice Captain in Monkey D luffy Ship?',
        a:'Roronoa Zoro',
        b:'Ussop',
        c:'WhiteBeard',
        d:'Tono tono Chopper',
        Correct:'a'
    },
    {
        question:'What is the Most saddest Movie in the List?',
        a:'Pororo',
        b:'SpongeBob',
        c:'Devine Blade',
        d:'Titanic',
        Correct:'d'

    },
    {
        question:'What is the most popular anime now in 2022?',
        a:'One Piece',
        b:'Dragon Ball',
        c:'One Punch Man',
        d:'GTA',
        Correct:'a',
    }
]

const question = document.querySelector('.question')

const a_text = document.querySelector('#a-text')
const b_text = document.querySelector('#b-text')
const c_text = document.querySelector('#c-text')
const d_text = document.querySelector('#d-text')
const submit = document.querySelector('#submit')

let i = 0

loadQuiz()

function loadQuiz(){
    let currentQuiz = quizeData[i]
    question.innerHTML = currentQuiz.question

    a_text.innerHTML = currentQuiz.a
    b_text.innerHTML = currentQuiz.b
    c_text.innerHTML = currentQuiz.c
    d_text.innerHTML = currentQuiz.d

    
}

submit.addEventListener('click', () =>{
    i++
   
   
})