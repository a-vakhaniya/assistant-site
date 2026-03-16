const btn = document.querySelector('.btn')  // нашли кнопку на странице
const title  = document.querySelector('.hero h2')
const notification = document.querySelector('.notification') // нашли уведомление

btn.addEventListener('click', function() {  // слушаем клик
    event.preventDefault()  // отменяем переход по ссылке
    title.innerHTML = "Спасибо! Напишу вам в ближайшее время 👋"
    notification.style.display = 'block' // показываем уведомление
    setTimeout(function() { // код который выполнится через задержку
        window.location.href = btn.href// переадресация на другую страницу
    }, 2000) // 2000 = 2 секунда
 
})

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




 