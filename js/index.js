const pullButton = document.getElementById('ziehen');
const players_amt = 4;
let murder_amt = 1;
let innocent_amt = players_amt - murder_amt;

function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

pullButton.addEventListener('click', () => {
    let pulledRole;
    if (murder_amt > 0) {
        let pulledNumber = randomIntFromInterval(0, innocent_amt);
        console.log(pulledNumber);
        if (pulledNumber == 0) {
            pulledRole = 'Mörder';
            murder_amt--;
        } else {
            pulledRole = 'Unschuldig';
            innocent_amt--;
        }
        Swal.fire(pulledRole);
    } else {
        Swal.fire('Unschuldig');
    }
});
