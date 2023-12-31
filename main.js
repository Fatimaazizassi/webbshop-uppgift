 import './style.scss';

 //chipsContainer//
const chipsHtmlContainer = document. querySelector('#chipsesContainer');
const cartHtmlContainer = document.querySelector('#cart');
const chipsContainer = document.querySelector('#chips');

const chipses = [
  {
    name:'Olw Hot Cheddar Chips',
    price:10,
    img:
      {
        src:'images/chips1.jpg',
        alt:'Olw Hot Cheddar Chips',
        width: 300,
        height: 450,
        
  
      },
         
    
    rating:3,
    amount: 0,
    category:'snack',
    description:'Flavored chips popular OLW cheez cruncherz flamin',
  
  
  },
  
  {
    name:'Ostbagar Cheez Doodles ',
    price:29,
    img:
      {
          src:'images/Ostbagar.jpg',
          alt:'Ostbagar Cheez Doodles ',
          width: 300,
        height: 450,
        },
             
    rating:4,
    amount: 0,
    category:'snack',
    description:'Brittle and crispy corn rings flavored with mild cheese seasoning.',
  },
  {
    name: 'Doritos Hot Chili  ',
    price:32,
    img:
    {
      src:'images/chips2.jpg',
      alt:'Tortillachips Sweet Chili & Pepper ',
      width: 300,
      height: 450,
    },
       
    rating:5,
    amount: 0,
    category:'snack',
    description:'tortilla chip made from freshly roasted corn, with the delicious taste of sweet chili peppe',
  },
  
  {
    name: 'Chips Ranch & sourcream',
    price:31,
    img:
    {
      src:'images/Chips Ranch.jpg',
      alt:'Estrella Ranch & Sourcream är finräfflade chips 275g',
      width: 300,
        height: 450,
    },
       
    rating:4,
    amount: 0,
    category:'snack',
    description:'Finely grooved potato chips with garlic, tomato, cheese, onion and sour cream flavour.',
  },
  
  {
    name: 'Olw Chips Havssalt ',
    price:32,
    img:
    {
      src:'images/Olw Chips Havssalt.jpg',
      alt:'Olw Chips Havssalt & svartpeppar',
      width: 300,
      height: 450,
    },
       
    rating:3,
    amount: 0,
    category:'snack',
    description: 3,
  },
  
  
  {
    name: 'Ostbagar Cruncherz ',
    price:32,
    img:
    {
      src:'images/Ostbagar 2.jpg',
      alt:'Tortillachips Sweet Chili & Pepper ',
      width: 300,
      height: 450,
  
    },
       
    rating:4,
    amount: 0,
    category:'snack',
    description:'Cheese bows with the same good taste as the original cheez doodles but extra crispy and crunchy',
  },
  
  {
    name:'Chips Vickning',
    price:33,
    img:
      {
        src:'images/Chips Vickning.jpg',
        alt:' krispiga grovräfflade potatischips med lätt sälta 275g',
        width: 300,
        height: 450,
  
      },
         
    
    rating:2,
    amount: 0,
    category:'snack',
    description:'Ribbed potato chips, lightly salted 250g',
  },
  {
  name:'Lays Chips & Onion ',
  price:23,
  img:
    {
      src:'images/lays.jpg',
      alt:'Sour Cream & Onion ',
      width: 300,
      height: 450,
  
    },
       
  
  rating:4,
  amount: 0,
  category:'snack',
  description:'Lays Chips Sour Cream & Onion ',
  },
  {
  name:'Doritos Sweet Chili  ',
  price:29,
  img:
    {
      src:'images/doritos.jpg',
      alt:'Tortillachips Sweet Chili & Pepper 170g',
      width: 300,
      height: 450,
  
    },
       
  
  rating:5,
  amount: 0,
  category:'snack',
  description:'tortilla chip made from freshly roasted corn, with the delicious taste of sweet chili pepper',
  },
  {
    name:'Nachochips ',
    price:16,
    img:
      {
        src:'images/Nachochips.jpg',
        alt:'nachosallad med, gräddfil, rädisor och tacokryddad färs.',
        width: 300,
        height: 450,
      },
         
    
    rating:3,
    amount: 0,
    category:'snack',
    description:'Nachos are baked on corn flour and then deep fried',
    },
    {
      name:'Estrella Dill Chips  ',
      price:34,
      img:
        {
          src:'images/estrella.jpg',
          alt:' chips med dil smak',
          width: 300,
          height: 450,
      
        },
           
      
      rating:3,
      amount: 0,
      category:'snack',
      description:'Ribbed potato chips with dill and chive flavor from Estrella.',
      },
  
  ];

  // kort & faktora
  const cardInvoiceRadios = Array.from(document.querySelectorAll('input[name="payment-option"]'));
  const inputs= [
    document.querySelector('#creditCardNumber'),
    document.querySelector('#creditCardYear'),
    document.querySelector('#creditCardMonth'),
    document.querySelector('#creditCardCvc'),
    document.querySelector('#personalID'),
    document.querySelector('#firstName'),
    document.querySelector('#lastName'),
    document.querySelector('#adress'),
    document.querySelector('#postNummer'),
    document.querySelector('#postOrt'),
    document.querySelector('#portKod'),
    document.querySelector('#tel'),
    document.querySelector('#email'),

  ];
  const invoiceOption = document.querySelector('#invoice');
  const cardOption = document.querySelector('#card');

   // defauld option 
   let selectedPaymentOption = 'card';
  // Regex
  const firstNameRegExp = new RegExp(/^[a-zA-ZäöåÄÖÅ]+$/);
  const addressRegExp = new RegExp(/^[A-z0-9\s]+$/);
  const PostNummerRegExp = new RegExp(/[A-Z]{1,2}[0-9][0-9A-Z]?\s?[0-9][A-Z][A-Z]/);
  const postOrtRegExp = new RegExp(/([0-9]{4})(?![0-9])/);
  const portKodRegExp = new RegExp(/^[a-zA-Z\u4e00-\u9eff\s'-.]+$/);
  const emailRegExp = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/); 
  const telRegExp = new RegExp(/^[0-9]{10}$/);
  const personalIdRegEx = new RegExp(/^(\d{10}|\d{12}|\d{6}-\d{4}|\d{8}-\d{4}|\d{8} \d{4}|\d{6} \d{4})/);
 
 const creditCardNumberRegEx = new RegExp(/^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/); // MasterCard

 const creditCardMonthRegEx = new RegExp (/^(0[1-9]|[10-2])$/);
  //aktivera knapp beställ
  const orderBtn = document.querySelector('#orderBtn');
  
  // Add event listeners
  inputs.forEach(input => {
    input.addEventListener('focusout', activateOrderButton);
    input.addEventListener('change', activateOrderButton);
  });
  cardInvoiceRadios.forEach(radioBtn =>{
   radioBtn.addEventListener('change', switchPaymentMethod);
 
  });

 /*
  * Switches between invoice payment method and
  * card payment method. Toggles their visibility.
  */
  function switchPaymentMethod(e) {
    console.log('switch');
    cardOption.classList.toggle('hidden');
   invoiceOption.classList.toggle('hidden');
 
  
   selectedPaymentOption = e.target.value;

  }
  
  function isPersonalIdNumbervalid(){
   return personalIdRegEx.exec(personalId.value);
    
  }
  /*
 * Activate order button if all fields are
 * correctly filled.
 */
  function activateOrderButton() {
    orderBtn.setAttribute('disabled', '');
  
 // kontrol activeted faktura
   if (selectedPaymentOption === 'invoice' && !isPersonalIdNumbervalid()) {
      orderBtn.removeAttribute ('disabled');
    }
   
    else if (selectedPaymentOption ==='invoice' && !isPersonalIdNumbervalid()) {
      return;
   } 

   if (firstNameRegExp.exec(firstName.value) === null){
    console.warn('First Name wrong');
    return;
  }
 if (firstNameRegExp.exec(lastName.value) === null){
    console.warn('Last Name wrong');
    return;
  }
  if (telRegExp.exec(tel.value) === null){
    console.warn('tel not valid');
    return;
  }

  if (postOrtRegExp.exec(postOrt.value) === null){
    console.warn('name not valid');
    return;
  }
  if (portKodRegExp.exec(portKod.value) === null){
    console.warn('number not valid');
    return;
  }

 if (emailRegExp.exec(email.value) === null){
    console.warn('email not valid');
    return;
  }
 

  if (addressRegExp.exec(adress.value) === null){
    console.warn('address not valid');
    return;
  }
  if (PostNummerRegExp.exec(PostNummer.value) === null){
    console.warn('number not valid');
    return;
  }

   else if (selectedPaymentOption ==='card') {
     // check card number
     if (creditCardNumberRegEx.exec(creditCardNumber.value) === null) {
 
       return;
     }
 
     // Check card year
     let year = Number(creditCardYear.value);
     const today = new Date();
     const shortYear = Number(String(today.getFullYear()).substring(2));
     
     if (year > shortYear + 2 || year < shortYear) {
       console.warn('Credit card year not valid.');
       return;
     }
     //  Check card month
     if (creditCardMonthRegEx.exec(creditCardMonth.value) === null) {
 
      return;
    }
    
     // Check card CVC
     if (creditCardCvc.value.length !== 3) {
      console.warn('CVC not valid.');
      return;
     }
    }
    
 
 orderBtn.removeAttribute ('disabled');
 
}


const today = new Date();

// fredag/ måndag rabat
const isFriday= today.getDay()=== 5;
const isMonday= today.getDay()=== 1;
const currentHour = today.getHours ='';

//timer
const letslowneesTimeout = setTimeout(stupidCustomerMessage, 1000 * 60 * 15 );


function stupidCustomerMessage(){
  alert ( 'Du är för långsam att beställa !');
}

function decreaseAmount(e) {
  const index = e.currentTarget.dataset.id;
   if(chipses[index].amount <= 0){
     chipses[index].amount = 0;
  } else{
    chipses[index].amount -= 1;
   }
  
  printchipses();
}

function increaseAmount(e) {
  const index =e.currentTarget.dataset.id;
    chipses[index].amount += 1;
    printchipses();
  }
  // friday & > 15:00 && m0nday & <=3
  function getPriceMultiplier (){
    if ((isFriday && currentHour >= 15) || (isMonday && currentHour <= 3)){
    return 1.15;
 
    }
    return 1;

  }
 
function printchipses(){
  chipsHtmlContainer.innerHTML = '';
  let priceIncrease= getPriceMultiplier();
  
  chipses.forEach((chips, index) => {
   // console.log(chips);
    chipsHtmlContainer.innerHTML +=
    `<article>
      <h3 class=" chips-title">${chips.name} </h3>
      <img src="${chips.img.src}" alt="${chips.img.alt}" width="${chips.img.width}"
      heigh= "${chips.img.height}" loading="lazy">
      <div class=" price">Price: <span>${chips.price * priceIncrease}</span> kr/st </div>
      <div class="rating">Rating: <span>${chips.rating}</span></div>
      <div class="description">Description: <span>${chips.description}</span><div>
      </span><span>${chips.favorit}</span><div>
      <div class="amount">Amount: <span>${chips.amount}</span> </div>
      <button class="minus" data-id="${index}"> - </button>
      <button class="plus" data-id="${index}"> + </button>
     <span> ${chips.amount * chips.price} kr - Standard pris</span>

  
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

  printCartchipses(); // anropa summan

}

function printCartchipses(){
  cartHtmlContainer.innerHTML ='';
    let sum = 0;  // total summan
    let orderchipsAmount = 0;
    let msg=''; // 10% rabatt
    let priceIncrease = getPriceMultiplier();

    //cart
  chipses.forEach(chips => {
    orderchipsAmount += chips.amount;
    if(chips.amount > 0) {
      let chipsPrice = chips.price;
        if (chips.amount >= 10){
          console.log('rabat')
          chipsPrice *= 0.9;
        }
      const adjustDounatPrice = chips.price * priceIncrease;
      const totalDiscounted = chips.amount * adjustDounatPrice;
      sum += chips.amount * adjustDounatPrice; // muliplication
      cartHtmlContainer.innerHTML += `
      <article class="topay">
        <span> ${chips.name}${chips.amount}st</span> <span> ${totalDiscounted} kr </span>
       </article>
      `;
    }
    
  });

  if (sum <= 0) {
    return;
  }
  // 10% rabbat på hela beställning
  if (today.getDay()=== 1){
    sum *= 0.9;
    msg += '<p>Måndagsrabatt: 10 % på hela beställningen</p>'

   
  }


  cartHtmlContainer.innerHTML += `<p class="topay">Total: ${sum} Kr</p>`;
  cartHtmlContainer.innerHTML += `<div class="topay"> ${msg}</div>`;

  if ( orderchipsAmount > 15){
    cartHtmlContainer.innerHTML += '<p class="topay"> Frakt: 0 Kr</p>';
  } else{

// shipping sum & chash button & gobach page button
  cartHtmlContainer.innerHTML += `<p class="topay"><span id="bil" class="material-symbols-outlined">
  local_shipping
  </span>: ${Math.round(25 + (0.1 * sum))} Kr</p>
  
  
  `;

// chash button
 const cartButton = document.querySelector('#cartButton');
  cartButton.addEventListener('click',function()
  {
    document.getElementById("chipsesContainer").style.display = "none";
    document.getElementById("money").style.display = "block";

  });



  const goBack = document.querySelector('#goBack');
  goBack.addEventListener('click', function(){

  document.getElementById("chipsesContainer").style.display = "grid";
  document.getElementById("money").style.display = "none";
});
 
  }
}

printchipses();


//button Beställning
const orderBtnClick = document.querySelector('#orderBtnClick');
orderBtnClick.addEventListener('click', showOrder);


function showOrder(){
  // dölj besällningsformuläret
  const orderForm =document.querySelector('#orderBtn')
  orderForm.classList.add('hidden');

  // vissa beställnings bäkreftelsen
  const orderConfirmation = document.querySelector('#orderConfirmation')
  orderConfirmation.classList.remove('hidden');

  //hämta namn
  const clienName = document.querySelector('#firstName').value;
  document.querySelector('#nameFirst').innerHTML=clienName;

}

