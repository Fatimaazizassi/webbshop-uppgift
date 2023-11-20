'./style.scss';

//donutContainer//
const donutHtmlContainer = document. querySelector('#donutContainer');
const cartHtmlContainer = document.querySelector('#cart');
const today = new Date();

// fredag/ måndag rabat
const isFriday= today.getDay()=== 5;
const isMonday= today.getDay()=== 1;
const currentHour = today.getHours ='';

//timer

const letslowneesTimeout = setTimeout(stupidCustomerMessage, 1000 * 60 * 15 );

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

function stupidCustomerMessage(){
  alert ( 'du är för långsam att beställa !');
}



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
  // friday & > 15:00 && m0nday & <=3
  function getPriceMultiplier (){
    if ((isFriday && currentHour >= 15) || (isMonday && currentHour <= 3)){
    return 1.15;
    return 1;
  

    }
    return 1;

  }
 
function printDonuts(){
  donutHtmlContainer.innerHTML = '';
  let priceIncrease= getPriceMultiplier();
  
  donuts.forEach((donut, index) => {
    /*console.log(donut);*/
    donutHtmlContainer.innerHTML +=
    `<article>
      <h3>${donut.name} </h3>
      <div>Price: <span>${donut.price * priceIncrease}</span> kr </div>
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
    let orderDonutAmount = 0;
    let msg=''; // 10% rabat
    let priceIncrease = getPriceMultiplier();

    //cart
  donuts.forEach(donut => {
    orderDonutAmount += donut.amount;
    if(donut.amount > 0) {
      let donutPrice = donut.price;
        if (donut.amount >= 10){
          donutPrice *= 0.9;
        }
      const adjusteDounatPrice = donut.price * priceIncrease;
      sum += donut.amount * adjusteDounatPrice;
      cartHtmlContainer.innerHTML += `
      <article>
        <span> ${donut.name}</span> | <span>${donut.amount}</span> | <span> ${donut.amount * adjusteDounatPrice} kr </span>
       </article>
      `;
    }
    
  });

  if (sum <= 0) {
    return;
  }

  if (today.getDay()=== 1){
    sum *= 0.9;
    msg += '<p>Måndagsrabatt: 10 % på hela beställningen</p>'

   
  }


  cartHtmlContainer.innerHTML += `<p>Total sum: ${sum} Kr</p>`;
  cartHtmlContainer.innerHTML += `<div> ${msg}</div>`;

  if ( orderDonutAmount > 15){
    cartHtmlContainer.innerHTML += '<p> Shipping: 0 Kr</p>';
  } else{

  cartHtmlContainer.innerHTML += `<p> Shipping: ${Math.round(25 + (0.1 * sum))} Kr</p>`;

  }

}
printDonuts();

