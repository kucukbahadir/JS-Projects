let count = 0;
let interval = 1000 ;
let a;

const number = document.getElementById('number');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn) {
    btn.addEventListener('click', function(event) {
        const styles = event.currentTarget.classList;
        if(styles.contains('decrease')){

            number.style.color = 'red';
            clearInterval(a);
            a = setInterval(() => {
                count--;
                number.textContent = count;
            }, 1000);
        }
        
        else if(styles.contains('increase')){
            number.style.color = 'green';
            clearInterval(a);
            a = setInterval(() => {
                count++;
                number.textContent = count;
            }, 1000); 
         }

        else {
            number.style.color = 'blue';
            clearInterval(a);
            count = 0;
            number.textContent = count;
         }   
    });
});



