
const keys = document.querySelectorAll('.key')
const audio = document.querySelectorAll('audio')

const keysArr = Array.from(keys)
const audioArr = Array.from(audio)

const colors = ['red', 'blue', 'pink', 'green', 'yellow']

function randomColors() {
    return Math.floor(Math.random() * colors.length)
}


document.addEventListener('keydown', function (e) {
    keysArr.map((el, item) => {
        if (el.id === e.code) {
            audioArr[item].play()
            el.style.backgroundColor = colors[randomColors()]
            el.style.transition = '.2s'
        } else {
            audioArr[item].pause()
            el.style.backgroundColor = '#333'
        }
    })
})


