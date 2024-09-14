const pullButton = document.getElementById('ziehen');
let roles = ['Mörder', 'Mensch', 'Mensch1', 'Mensch'];

pullButton.addEventListener('click', () => {
    let pulledRole;
    if (roles.length > 0) {
        pulledRole = roles[Math.floor(Math.random() * roles.length)];
        //remove one element from the array (not all of type)
        roles.splice(roles.indexOf(pulledRole), 1);
        console.log(roles);
        Swal.fire(pulledRole);
    } else {
        Swal.fire('Es gibt keine Rollen mehr!');
    }
});
