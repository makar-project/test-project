async function countdownTimer(seconds){
    let time = seconds
    const timer = new Promise((resolve)=>{
        let Interval = setInterval(()=>{
            console.log(time)
            time--
            if(time < 0) {
                clearInterval(Interval)
                resolve()
            }
        },1000)
    })
}   
countdownTimer(10)