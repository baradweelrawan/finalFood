'use strict'
// let divEl=document.getElementById('continer');
let table = document.getElementById('myTable');

let foods=[];
// let images=['pizza.jpg' ,'shawarma.jpg','thumbnail (1).jpg']

function Foodslover(customerName,foodType){
    this.customerName=customerName;
    this.foodType=foodType;
    // this.imagesName = images.split('.')[0];
    // this.source='images' +imagesName ;
    // this.priceFood=[]
    this.img = `images/${foodType}.jpg`
    foods.push(this);
}

myForm.addEventListener('submit',handleSubmit);

function handleSubmit(event){
    event.preventDefault();
    let customerName=event.target.customerName.value;
    let foodType=event.target.foodType.value;
    new Foodslover(customerName,foodType);

    settingItems();
    render();
}


function getRandom() {
    return Math.random();
    
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
    console.log(normalObj);
    if (normalObj !== null){
        foods = normalObj ;
  }
  console.log(foods);
  render();
  
  
}

function render(){
    let tableEl=document.createElement('table');
    table.appendChild(tableEl);

    for (let i =0 ; i<foods.length ; i++){
        tableEl.textContent='';

        let trEl=document.createElement('tr');
        tableEl.appendChild(trEl);

        let tdEl=document.createElement('td');
        trEl.appendChild(tdEl);

        let imgEl=document.createElement('img');
        tdEl.appendChild(imgEl);
        imgEl.setAttribute('src',foods[i].img);

        let td1El=document.createElement('td');
        trEl.appendChild(td1El);

        let pEl=document.createElement('p');
        td1El.appendChild(pEl);
        pEl.textContent=`Customer Name:${foods[i].customerName}`;

        let p1El=document.createElement('p');
        td1El.appendChild(p1El);
        p1El.textContent=`Food Type:${foods[i].foodType}`;

        let p2El=document.createElement('p');
        td1El.appendChild(p2El);
        pEl.textContent=`Food Price:${getRandom()}`;
    }
}   
 
gettingItems();
