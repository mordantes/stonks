

export default function rain(amount:number){
    const body = document.querySelector('body') as HTMLBodyElement
    // const oxxxy = ['Головка', 'шлюха', 'жопа', 'член', 'еблан', 'петух', 'мудила', 'Рукоблуд',
    //     'ссанина', 'очко', 'блядун', 'вагина',
    //     'Рукоблуд', 'ссанина', 'очко', 'блядун', 'вагина',
    //     'Пидор', 'пизда', 'туз', 'малафья'
    // ]
    // const work = ["косить траву", "пенсия в 45", "сходить на периметр", "клеить обои", "менять ламинат",
    //         "очередь за забором", "ты обязан", "собирать яблоки", "собирать листву", "пизды получишь",
    //     "ты виноват", "пей стакан", "пошли в баню"
    // ]
    let i = 0
    while (i< amount){
        const drop = document.createElement('i')
        // drop.innerText = work[Math.floor(Math.random() * work.length)]
        const size = Math.random() * 5
        const posX = Math.floor(Math.random() * window.innerWidth)

        const delay = Math.random() * -20
        const duration  = Math.random() * 5
        drop.style.width = .1 + size + 'px'
        drop.style.left = posX + 'px'
        drop.style.animationDelay =  delay + 's'
        drop.style.animationDuration =  5 + duration + 's'
        body.appendChild(drop)
        i++
    }
}
