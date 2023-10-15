document.body.style.minWidth="400px";
document.body.style.maxWidth="400px";
document.body.style.backgroundColor="lightblue"

const addBtn = document.getElementById('add-btn');
const allList = document.getElementById('list-links')
const delBtn = document.getElementById('delete-btn');
const tabBtn = document.getElementById('tab-btn');
window.onload= ()=>{
    getlist= localStorage.getItem('linkList');
    LinkList= JSON.parse(getlist);
    if (LinkList==null)
    LinkList=[]
    else render();
}
addBtn.addEventListener('click', ()=>{
    console.log('add button clicked')
    const inputVal= document.getElementById('inputValue');
    if (inputVal.value.length>0)
    {
        LinkList.push(inputVal.value)
        inputVal.value="";
        localStorage.setItem('linkList', JSON.stringify(LinkList));
        render();
    }
    else{
        alert('empty value');
    }
});


function render(){
    console.log(LinkList);
    links = '';
    LinkList.forEach((ele)=>{
     if (ele.includes('https'))
     links += `<li> <a target='_blank' href='${ele}'>${ele}</a></li>`
    else
    links += `<li> <a target='_blank' href='https://${ele}'>${ele}</a></li>`

     }); 
    allList.innerHTML=links;
}
delBtn.addEventListener('dblclick', ()=>{
    LinkList=[]
    localStorage.removeItem('linkList');
    render();
})


tabBtn.addEventListener('click', ()=>{
    console.log('tab clicked');
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;
        // use `url` here inside the callback because it's asynchronous!
        LinkList.push(url)
        localStorage.setItem('linkList', JSON.stringify(LinkList));
        render();

    });

});