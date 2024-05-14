const darkTheme = document.getElementById("light")
const body = document.body

darkTheme.addEventListener("click", function(event){
    event.preventDefault();
    body.classList.toggle('black')
   
})

const nav = document.getElementById('nav');
const ham = document.getElementById('ham')
const body1 = document.body



ham.addEventListener('click', function(event){
    body1.classList.toggle('active')
})