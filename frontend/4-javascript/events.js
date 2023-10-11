  

var elements = document.querySelectorAll('h1');

elements.forEach(itm => {
    itm.addEventListener('mouseover', () => {
        let currentTime = new Date().toISOString();
    console.log(currentTime + ': hahaha\n');
    });
});

function submitForm(e){
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    console.log(email);
}
document.getElementById('myForm').addEventListener('submit', submitForm, false);
