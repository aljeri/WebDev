//callback

function fetchData(callback) {
    console.log('testing..2')
    setTimeout(() => {
        callback('Data fetched using callback!');
    }, 1000);
}

fetchData((data) => {
    console.log('testing... 1')
    console.log(data);  
    console.log('testing..3')
});



//promise
/*
function fetchData() {
    console.log('testing..2')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched using promise!');
            reject('not working')
        }, 1000);
        console.log('testing..3')

    });

}

fetchData()
    .then(data => {
        console.log('testing..1')
        console.log(data);  // Outputs: "Data fetched using promise!"
    })
    .catch(error => {
        console.error('Error:', error);
    });
*/
   
//async/await
 /*
function fetchData() {
    return new Promise((resolve, reject) => {
        console.log(new Date().getSeconds(),':testing..3')
        setTimeout(() => {
            resolve('Data fetched using async/await!');
        }, 1000);
    });
}

async function displayData() {
    try {
        console.log(new Date().getSeconds(),':testing..1')
        const data = await fetchData();
        console.log(new Date().getSeconds(),':testing..2')
        console.log(data);  // Outputs: "Data fetched using async/await!"
    } catch (error) {
        console.error('Error:', error);
    }
}

displayData();
console.log(new Date().getSeconds(), ':testing..4')
*/


