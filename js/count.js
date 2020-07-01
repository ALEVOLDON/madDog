let count = 0, message = "";

function countClick(){
new Audio('audio/dog-hit.mp3').play()
count++;
if (count == 1) { message = 'Этого недостаточно... вы нажали только один раз.' } 
else if (count >= 2 && count <= 10) { message = 'Вы нажали ' + count + ' раз... Можно больше.' } 
else { message = 'Браво! Вы были настойчивы, чтобы нажать ' + count + ' раз.' }
document.getElementById('rez').innerHTML = message;
}