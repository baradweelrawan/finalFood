'use strict'
let divEl=document.getElementById('continer');

let foods=[];
let priceFood=[];
let images=['pizza.jpg' ,'shawarma.jpg','thumbnail (1).jpg']

function Foodslover(customerName,foodType){
    this.customerName=customerName;
    this.foodType=foodType;
    // this.imagesName = images.split('.')[0];
    // this.source='images' +imagesName ;
    this.priceFood=[]
    foods.push(this)
}

function getRandom() {
    for(let i=0 ; i<foods.length ;i++){
       this.priceFood.push(Math.random());

    }
     
 }

 function settingItems(){
   
    let data = JSON.stringify(foods);
    localStorage.setItem('food',data);
 }

 function gettingItems(){
    let stringObj = localStorage.getItem('food')
    console.log(stringObj);
    console.log(typeof stringObj);
    let normalObj = JSON.parse(stringObj );
    if (normalObj !== null){
        foods = normalObj ;
  }
  
  
}

function render(){
    let tableEl=document.createElement('table');
    divEl.appendChild(tableEl);

    let trEl=document.createElement('tr');
    tableEl.appendChild(trEl);

    let tdEl=document.createElement('td');
    trEl.appendChild(tdEl);
    for (let i =0 ; i<foods.length ; i++){
        let tdEl=document.createElement('td');
        tdEl.setAttribute('src',foods[i].source);
        trEl.appendChild(tdEl);
    }

    for (let j=0; j<foods.length ; j++){
        let td1El=document.createElement('td');
        td1El.textContent(`customerName:${customerName[j]}: ,foodType:${foodType[j]} `)
        trEl.appendChild(tdEl);
} 
}
render();


function handleSubmit(event){
    event.preventDefault();
    let customerName=event.target.customerName.value;
    let foodType=event.target.foodType.value;
    new Foodslover(customerName,foodType);

    settingItems();
    // render();
}



gettingItems();
myForm.addEventListener('submit',handleSubmit);
