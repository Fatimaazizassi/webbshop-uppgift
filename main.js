/*import './style.scss';*/

//donutContainer//
const donutHtmlContainer = document. querySelector('#donutsContainer');
const cartHtmlContainer = document.querySelector('#cart');
const chipsContainer = document.querySelector('#chips');


const today = new Date();

// fredag/ måndag rabat
const isFriday= today.getDay()=== 5;
const isMonday= today.getDay()=== 1;
const currentHour = today.getHours ='';

//timer
const letslowneesTimeout = setTimeout(stupidCustomerMessage, 1000 * 60 * 15 );



const donuts = [
{
  name:'Olw Hot Cheddar Chips',
  price:23,
  img:
    {
      src:'images/chips1.jpg',
      alt:'Olw Hot Cheddar Chips',
      width: 200,
      height: 350,

    },
       
  
  rating:3,
  amount: 0,
  category:'snack'
},

{
  name:'Ostbagar Cheez Doodles ',
  price:29,
  img:
    {
        src:'images/Ostbagar.jpg',
        alt:'Ostbagar Cheez Doodles ',
        width: 200,
        height: 350,
  
      },
           
  rating:3,
  amount: 0,
  category:'snack'
},
{
  name: 'Chips Ranch & sourcream',
  price:31,
  img:
  {
    src:'images/Chips Ranch.jpg',
    alt:'Estrella Ranch & Sourcream är finräfflade chips 275g',
    width: 200,
    height: 350,

  },
     
  rating:3,
  amount: 0,
  category:'snack'
},

{
  name: 'Olw Chips Havssalt',
  price:32,
  img:
  {
    src:'images/Olw Chips Havssalt.jpg',
    alt:'Olw Chips Havssalt & svartpeppar',
    width: 200,
    height: 350,

  },
     
  rating:3,
  amount: 0,
  category:'snack'
},

{
  name: 'Tortillachips Sweet Chili & Pepper ',
  price:32,
  img:
  {
    src:'images/chips2.jpg',
    alt:'Tortillachips Sweet Chili & Pepper ',
    width: 200,
    height: 350,

  },
     
  rating:3,
  amount: 0,
  category:'snack'
},

{
  name: 'Ostbagar Cheez Cruncherz ',
  price:32,
  img:
  {
    src:'images/Ostbagar 2.jpg',
    alt:'Tortillachips Sweet Chili & Pepper ',
    width: 200,
    height: 350,

  },
     
  rating:3,
  amount: 0,
  category:'snack'
},

{
  name:'Chips Vickning',
  price:33,
  img:
    {
      src:'images/Chips Vickning.jpg',
      alt:' krispiga grovräfflade potatischips med lätt sälta 275g',
      width: 200,
      height: 350,

    },
       
  
  rating:3,
  amount: 0,
  category:'snack'
},
{
name:'Olw Chips Havssalt',
price:23,
img:
  {
    src:'images/238780 copy.jpg',
    alt:'Chips Havssalt & Svartpeppar',
    width: 200,
    height: 350,

  },
     

rating:3,
amount: 0,
category:'snack'
},
{
name:'Tortillachips ',
price:29,
img:
  {
    src:'images/doritos.jpg',
    alt:'Tortillachips Sweet Chili & Pepper 170g',
    width: 200,
    height: 350,

  },
     

rating:3,
amount: 0,
category:'snack'
},
{
  name:'Nachochips ',
  price:16,
  img:
    {
      src:'images/Nachochips.jpg',
      alt:'nachosallad med, gräddfil, rädisor och tacokryddad färs.',
      width: 200,
      height: 350,
  
    },
       
  
  rating:3,
  amount: 0,
  category:'snack'
  },
  {
    name:'Chips Dill ',
    price:34,
    img:
      {
        src:'images/estrella.jpg',
        alt:' chips med dil smak',
        width: 200,
        height: 350,
    
      },
         
    
    rating:3,
    amount: 0,
    category:'snack'
    },



];

// bild
 donuts.forEach(donut=> {
  console.log(donut);
  chipsContainer.innerHTML +=`
  <article>
  <h2>${donut.name}</h2>
  <img src="${donut.img.src}" alt="${donut.img.alt}" width="${donut.img.width}"
  heigh= "${donut.img.height}" loading="lazy">
  </article>
  `;

});




function stupidCustomerMessage(){
  alert ( 'Du är för långsam att beställa ! skynda på');
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
    
  

    }
    return 1;

  }
 
function printDonuts(){
  donutHtmlContainer.innerHTML = '';
  let priceIncrease= getPriceMultiplier();
  
  donuts.forEach((donut, index) => {
    console.log(donut);
    donutHtmlContainer.innerHTML +=
    `<article>
      <h3>${donut.name} </h3>
      <img src="${donut.img.src}" alt="${donut.img.alt}" width="${donut.img.width}"
      heigh= "${donut.img.height}" loading="lazy">
      <div>Price: <span>${donut.price * priceIncrease}</span> kr </div>
      <div>Raing: <span>${donut.rating}</span></div>
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
      const adjustDounatPrice = donut.price * priceIncrease;
      sum += donut.amount * adjustDounatPrice;
      cartHtmlContainer.innerHTML += `
      <article>
        <span> ${donut.name}</span> | <span>${donut.amount}</span> | <span> ${donut.amount * adjustDounatPrice} kr </span>
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