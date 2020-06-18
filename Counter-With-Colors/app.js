let count = 0;
let interval = 1000 ;
let a; // To set and clear Interval

const number = document.getElementById('number');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn) {
    btn.addEventListener('click', function(event) {
        const styles = event.currentTarget.classList;
        if(styles.contains('decrease')){
            clearInterval(a);
            a = setInterval(() => {
                count--;
                number.textContent = count;
                checkColor();
            }, interval);
        }
        
        else if(styles.contains('increase')){
            clearInterval(a);
            a = setInterval(() => {
                count++;
                number.textContent = count;
                checkColor();
            }, interval); 
         }

        else {
            clearInterval(a);
            count = 0;
            number.textContent = count;
            checkColor();
         }
    });
});

function checkColor() {
    if(count < 0){
        number.style.color = 'red';
     }
     else if(count > 0){
        number.style.color = 'green';
     }
     else{
        number.style.color = 'blue';
    }
}
