/*Chamando os valores do HTML e salvando nas const*/
const daysEl   = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl   = document.getElementById('seconds');
/*SALVANDO A DATA DESEJADA*/
const newYears = '25 dec 2021';
/* Criando a função contador */
function countdown(){
/* Salva na variável newYearsDate a data para o contador começar*/
    const newYearsDate = new Date(newYears);
/*Salva em currentDate a data atual*/
    const currentDate = new Date();
/*Pega a data atual subtrai pela escolhida e divide para saber o total de segundos faltando*/
    const totalSeconds = (newYearsDate - currentDate) / 1000;
/* Aqui começa a salvar dentro das const  */     
    const days = Math.floor(totalSeconds / 3600 / 24);

    const hours = Math.floor(totalSeconds/3600) % 24;
    
    const mins = Math.floor(totalSeconds/60) % 60;

    const seconds = Math.floor(totalSeconds) % 60;
/* Utilizamos o innerHTLM, para mostrar a informação na página */
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);

}
function formatTime(time){
    return time < 10 ? (`0${time}`) : time;

}
//initial call
countdown();
setInterval(countdown, 1000);

