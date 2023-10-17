document.write("<h1>Welcome, ",  visitor,  "</h1>");
document.write("<h1 style='text-align: center;'>Hello World!!</h1>");


function init(){
    console.log('Page Loaded');
}
let nameN='noura';
function test() {
    //reset the whole body to write! not practical
   // document.write('<h1>'+ name +'</h1>');
    //better way - update specific id
    document.getElementById('header').innerText=nameN;
}
function submited(){ //without form tag 
    let email= document.getElementById('email');
    let name= document.getElementById('name');
    console.log(name, email);
    console.log(name.value, email.value);

}
//with form tag - eventlistener
let forma= document.getElementById('myForm');
/*forma.addEventListener('submit', function (e) {
    e.preventDefault();
    let email= document.getElementById('email');
    let name= document.getElementById('name');
    console.log(email.value, name.value);
    //confirm('thank you')
    //forma.reset();

});*/
forma.addEventListener('submit', (e) => {
    e.preventDefault();
    let email= document.getElementById('email');
    let name= document.getElementById('name');
    console.log(email.value, name.value);
    //confirm('thank you')
    //forma.reset();
    checklist = document.getElementById('check')
    console.log(checklist.selectedIndex);

});

//quick counting app
let counterNum=0;
countID= document.getElementById('count');

function counter(){
counterNum += 1;
countID.innerText=counterNum;
}
function reset(){
countID.innerText=0;
counterNum=0;
}