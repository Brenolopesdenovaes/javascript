const hourhand = document.querySelector('.hour-hand')
const minutehand = document.querySelector('.minute-hand')
const secondhand = document.querySelector('.second-hand')


const getTime = () =>{
    const date = new Date();

    return {
    hours : date.getHours (),
        minutes : date.getMinutes(),
        seconds : date.getSeconds()
    }
}

setInterval(()=>{

    const{seconds,minutes,hours} = getTime();

    secondhand.style.transform = `translate(0, -50%) rotate(${seconds * 6}deg)`;
    minutehand.style.transform = `translate(0, -50%) rotate(${minutes * 6}deg)`;
    hourhand.style.transform = `translate(0, -50%) rotate(${hours *30}deg)`;

},1000);
