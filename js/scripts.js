const btn = document.querySelector('.btn')
let input = document.querySelector('.input')
const timeNumber = document.querySelector('.cont_time')

async function timer() {
    value = input.value
    const timer_ = new Promise((resolve)=>{
        const interval = setInterval(()=>{
            timeNumber.innerHTML = value
            value--
            if (value <= 4 ) {
                timeNumber.style.color = 'red'
            }
            if(value < 0) {
                clearInterval(interval)
                resolve()
            }
        }, 1000)
    })
}
btn.addEventListener('click', function(){
    timeNumber.style.opacity = '100%'
    timer()
})