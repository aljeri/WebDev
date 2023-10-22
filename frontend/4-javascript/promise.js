
let p = new Promise ((resolve, reject) => {
    let a = 1+1 //(success) or a = 1+3 (failed)
    if(a ==2){
        resolve('success')
    }else{
        reject('failed')
    }
})
p.then((message) =>{
    console.log('Message: '+message)
}).catch((message)=>{
    console.log('Message: '+message)
})


   
        