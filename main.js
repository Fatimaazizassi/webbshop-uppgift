'./style.scss';

//donutContainer//
const donutHtmlContainer = document. querySelector('#donutContainer');
const cartHtmlContainer = document.querySelector('#cart');

const donuts = [
{
  name:'donut 1',
  price:10,
  image:[
    {
      src:'bild1.jpg',
      alt:'rosa munk',

    },
    {
      src:'blid2.jpg',
      alt:'rosa munk',
    },   
  ],
  rating:3,
  amount: 0,
  category:'sweet'
},

{
  name:'donut 2',
  price:50,
  image:[
    {
      src:'bild1.jpg',
      alt:'rosa munk',

    },
    {
      src:'blid2.jpg',
      alt:'rosa munk',
    },   
  ],
  rating:3,
  amount: 0,
  category:'sweet'
},

{
  name: 'donut 3',
  price:20,
  image:[
    {
      src:'bild1.jpg',
      alt:'rosa munk',

    },
    {
      src:'blid2.jpg',
      alt:'rosa munk',
    },   
  ],
  rating:3,
  amount: 0,
  category:'sweet'
},

];
function decreaseAmount(e) {
  const index = e.currentTarget.dataset.id;
  if(donuts[index].amount <= 0){
    donuts[index].amount = 0;
  } else{
    donuts[index].amount -= 1;
  }
  
  printDonuts();
}

function increaseAmount(e) {
  const index =e.currentTarget.dataset.id;
    donuts[index].amount += 1;
    printDonuts();
  }
 
function printDonuts(){
  donutHtmlContainer.innerHTML = '';
  
  donuts.forEach((donut, index) => {
    /*console.log(donut);*/
    donutHtmlContainer.innerHTML +=
    `<article>
      <h3>${donut.name} </h3>
      <div>Price: <span>${donut.price}</span> kr </div>
      <div>Raing: <span>${donut.rating}</span> kr </div>
      <div>Amount: <span>${donut.amount}</span> </div>
      <button class="minus" data-id="${index}"> - </button>
      <button class="plus" data-id="${index}"> + </button>
      </article>
    `;

  });
  const minusBtns = document.querySelectorAll ('button.minus');
  const plusBtns = document.querySelectorAll ('button.plus');

  minusBtns.forEach( btn => {
    btn.addEventListener('click', decreaseAmount);

  });
  plusBtns.forEach( btn => {
    btn.addEventListener('click', increaseAmount);

  });

  printCartDonuts(); // anropa summan

}

function printCartDonuts(){
  cartHtmlContainer.innerHTML ='';
    let sum = 0;  // total summan
  donuts.forEach(donut=> {
    if(donut.amount > 0) {
      sum += donut.amount * donut.price;
      cartHtmlContainer.innerHTML += `
      <article>
        <span> ${donut.name}</span> | <span>${donut.amount}</span> | <span> ${donut.amount * donut.price} kr </span>
       </article>
      `;

    }
  });

  cartHtmlContainer.innerHTML += `<p>Total sum: ${sum} Kr</p>`;

}
printDonuts();

