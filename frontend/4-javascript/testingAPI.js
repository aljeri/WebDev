

/*
fetch('https://reqres.in/api/users')
.then (res => console.log(res)) //complete response message
*/

/*
fetch('https://reqres.in/api/users')
.then (res => res.json()) //returns another promise
.then(data => console.log(data))
*/

/*
fetch('https://reqres.in/api/users/40') //request a user (fail 404)
.then (res => res.json()) //did not catch the error
.then( data => console.log(data))
*/

/*
//specify the valid response
fetch('https://reqres.in/api/users/40') //request a user (fail 404)
.then (res => {
    if (res.ok) { //returns 200 OK 
        return res.json()
    }else{
        return console.log('error');
    }
    
})
.then( data => console.log(data)) //I still get undefined here!
*/

/* //catch the error 
fetch('https://reqres.in/api/users/40') //request a user (fail 404)
.then (res => {
    if (res.ok) { //returns 200 OK 
        res.json()
    }else{
        console.log('error');
        throw new Error('Network response was not ok'); // Throw an error to stop the promise chain

    }
    
})
.then( data => console.log(data))
.catch(error => console.error('There has been a problem with your fetch operation:', error));
*/

/*
// create method
fetch('https://reqres.in/api/users', {
method:'POST', //Create method
headers: {
    'Content-type': 'application/json'
},
body: JSON.stringify({
    name:'User 1'
})
})
.then (res =>{
    return res.json()
})
.then(data=>console.log(data))
*/

/*
fetch('https://reqres.in/api/users/4', {
method:'PUT', //update methodd
headers: {
    'Content-type': 'application/json'
},
body: JSON.stringify({
    first_name:'User 1'
})
})
.then (res => {
         console.log(res)
         return res.json() })
.then(data => console.log(data))
*/