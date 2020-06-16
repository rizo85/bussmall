/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
'use strict';

var pic1 = document.getElementById('pic1').style.backgroundImage;

var pic2 = document.getElementById('pic2');

var pic3 = document.getElementById('pic3');

var allProducts = [];

/*

THIS IS THE ADDED EVENT LISTENER

*/

// const form = document.getElementById('form');

// pic1.addEventListener('onClick', logSubmit);

// function logSubmit(event) {

//   CookieStoreForm(document.getElementById('name').value,document.getElementById('minC').value,document.getElementById('maxC').

//   value,document.getElementById('cPS').value);

//   event.preventDefault();
// }


// function CookieStoreForm(name,minC,maxC,cPH) {


//   // console.log(name);

//   // console.log(maxC);

//   // console.log(minC);

//   // console.log(cPH);

//   //deletes the table and we can start fresh!

//   var Table = document.getElementById('cookieTable');
//   Table.innerHTML = '';

//   //This creates new store
//   new CookieStore(name, maxC, minC, cPH);

//   makeHeaderRow();
//   renderallcookieshops();
//   totalCookiesPerHour();

// }

//my object blue print

function Product(name, info, price, img) {
  this.name = name;
  this.info = info;
  this.price = price;
  this.img = img;
  this.allProducts = [];
  allProducts.push(this);

}



// now the render

Product.prototype.render = function() {


  var a = Math.floor(Math.random() * allProducts.length); // returns a random integer from 0 to 10

  var b = Math.floor(Math.random() * allProducts.length); // returns a random integer from 0 to 10

  var c = Math.floor(Math.random() * allProducts.length); // returns a random integer from 0 to 10

  pic1 = allProducts[a].img;

  while (a === b) {

    b = Math.floor(Math.random() * allProducts.length); // returns a random integer from 0 to 10

  }

  pic2 = allProducts[b].img;

  while (b === c || a === c) {

    c = Math.floor(Math.random() * allProducts.length); // returns a random integer from 0 to 10

  }

  pic3 = allProducts[c].img;

  document.getElementById("pic1").style.background = "url("+pic1+") blue no-repeat";

  document.getElementById("pic1").style.backgroundSize = '100% 100%';

  document.getElementById("pic2").style.background = "url("+pic2+")  blue no-repeat";
  document.getElementById("pic2").style.backgroundSize = '100% 100%';


  document.getElementById("pic3").style.background = "url("+pic3+")  blue no-repeat";
  document.getElementById("pic3").style.backgroundSize = '100% 100%';

};


// document.getElementById("pic1").style.background = "url('img/water-can.jpg') blue repeat-x center";

// CookieStore.prototype.render = function() {

new Product('Water Can', 'ETCETC', 65, 'img/water-can.jpg');
new Product('USB', 'ETCETC', 65, 'img/usb.gif');
new Product('Chair', 'ETCETC', 65, 'img/chair.jpg');

new Product('Bag', 'ETCETC', 65, 'img/bag.jpg');
new Product('Banana', 'ETCETC', 65, 'img/banana.jpg');
new Product('Bathroom', 'ETCETC', 65, 'img/bathroom.jpg');
new Product('Boots', 'ETCETC', 65, 'img/boots.jpg');
new Product('Breakfast', 'ETCETC', 65, 'img/breakfast.jpg');
new Product('Bubblegum', 'ETCETC', 65, 'img/bubblegum.jpg');

new Product('Pen', 'ETCETC', 65, 'img/pen.jpg');
new Product('Pet Sweep', 'ETCETC', 65, 'img/pet-sweep.jpg');
new Product('Scissors', 'ETCETC', 65, 'img/scissors.jpg');
new Product('Shark', 'ETCETC', 65, 'img/shark.jpg');
new Product('Sweep', 'ETCETC', 65, 'img/sweep.png');
new Product('Tauntaun', 'ETCETC', 65, 'img/tauntaun.jpg');
new Product('Unicorn', 'ETCETC', 65, 'img/unicorn.jpg');
new Product('Wine Glass', 'ETCETC', 65, 'img/wine-glass.jpg');

new Product('Cthulhu', 'ETCETC', 65, 'img/cthulhu.jpg');
new Product('Dog Duck', 'ETCETC', 65, 'img/dog-duck.jpg');
new Product('Dragon', 'ETCETC', 65, 'img/dragon.jpg');

console.log(allProducts);

function renderAllProducts() {

  for(var i in allProducts) {

    allProducts[i].render();

  }

}

renderAllProducts();


//Why re-invent the wheel?

// get the people per hour between the ranges

// CookieStore.prototype.custPerHr = function () {
//   return Math.ceil(Math.random() * ((this.maxCust) - (this.minCust)) + this.minCust);
// };

//get the cookies sold p/h

// CookieStore.prototype.cookiesPerHr = function () {
//   return Math.round(this.cookiesPerSale * this.custPerHr());
// };

