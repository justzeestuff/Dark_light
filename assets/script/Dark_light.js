const Button = document.querySelector('.Light_switch');
const bulb = document.querySelector('.bulb');
const sun = document.querySelector('.Sun');
const moon = document.querySelector('.Moon');
const body = document.body;

const storage = localStorage.getItem('theme');

if(storage === 'light'){
    bulb.src = 'assets/img/On.png';
    body.classList.replace('dark', 'light');
    moon.style.bottom   = '-20px';
    sun.style.bottom   = '5.5px';
}

Button.addEventListener('click', () => {
    if(body.classList.contains('dark')){
        bulb.src = 'assets/img/On.png';
        body.classList.replace('dark', 'light');
        moon.style.bottom   = '-20px';
        sun.style.bottom   = '5.5px';
        localStorage.setItem('theme', 'light'); 
    }
    else{
        bulb.src = 'assets/img/Off.png';
        body.classList.replace('light', 'dark');
        moon.style.bottom   = '6.5px';
        sun.style.bottom   = '-20px';
        localStorage.setItem('theme', 'dark'); 
    }
})