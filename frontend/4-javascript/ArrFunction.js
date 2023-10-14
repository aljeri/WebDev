let arr=[1,2,3,4,5];

//.map() traverse the array

const mapped = arr.map((ele)=>{
    return ele;
});
console.log(mapped); // print all the array

//.filter return the element only with condition
const filtered=  arr.filter((ele)=>
{
    if (ele>2){
        return true;
    }
    return false;
});
console.log(filtered); //prints only [3,4,5]

//.forEach() function works like a loop
arr.forEach((ele)=>{
    console.log(ele);
});


//.reduce() compress all the elements into one value
let res= arr.reduce((addition,ele)=>{
    console.log(addition, ele);
    return addition+ele;
}); //addition will start with 1 (first element in array), ele= 2nd element in array
console.log(res);

//you can set the addition to be a certain value from the start
let res2= arr.reduce((addition,ele)=>{
    console.log(addition, ele);
    return addition+ele;
},3); 
console.log(res);


//.indexOf() find the index of element
let arr2= ['hi','there','test','here'];
console.log(arr2.indexOf('test')); //prints 2


//.includes() this is used to check if element exists (boolean)
console.log(arr2.includes('hi'));

//.find find element in objects
let animals=[
    {
        name: 'dog',
        age:100
    },
    {
        name: 'cat',
        age:10
    }
]
var animal = animals.find(s=> {
    return s.name=='cat';
})
console.log(animal);


const colors=['red','blue','green'];
//MAP method
const items = colors.map((item)=>
    '<li>'+item +'</li>'
);
console.log(items);

const items2 = colors.map((item)=>
`<li>${item}</li>`
);
console.log(items2);

const one=[1,2,3];
const two=[4,5,6];
//Spread operator - similar to concat

const cobmine = [...one,...two];
console.log(cobmine);