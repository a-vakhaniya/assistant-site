const title = document.querySelector('.hero h1')

const btn = document.querySelector('.btn')  // нашли кнопку на странице

const notification = document.querySelector('.notification') // нашли уведомление

// находим все ссылки в навигации
const navLinks = document.querySelectorAll('nav a')

// для каждой ссылки добавляем обработчик клика 
navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault()
        
        const targetId = link.getAttribute('href') // получаем #services
        const target = document.querySelector(targetId) // находим секцию
        
        target.scrollIntoView({ behavior: 'smooth' }) // плавная прокрутка
    })
})

/* при клике меняется сообщение */
let clicked = false

function showThanks() {
    // код первого клика
    title.innerHTML = "Спасибо! Напишу вам в ближайшее время 👋"
    clicked = true
}

function showAlready() {
    // код второго клика
    title.innerHTML = "Я уже получил ваше сообщение!"
}

btn.addEventListener('click', function(event) {
    event.preventDefault()
    
    if (clicked === false) {
        showThanks()
    } else {
        showAlready()
    }
})


 
