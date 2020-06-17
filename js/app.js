/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
'use strict';

var allProducts = [];

var lineup = [];

var pic1 = document.getElementById('pic1').style.backgroundImage;

var pic2 = document.getElementById('pic2').style.backgroundImage;

var pic3 = document.getElementById('pic3').style.backgroundImage;

var vote1 = 0;

var vote2 = 0;

var vote3 = 0;

var counter = 0;
/*

THIS IS THE ADDED EVENT LISTENER

*/

//my object blue print

function Product(name, info, price, img, tc, tv) {
  this.name = name;
  this.info = info;
  this.price = price;
  this.tv = tv;
  this.tc = tc;
  this.img = img;
  this.allProducts = [];
  allProducts.push(this);

}

//Hard coded items

new Product('Bag', 'ETCETC', 65, 'img/bag.jpg', 0, 0);
new Product('Banana', 'ETCETC', 65, 'img/banana.jpg', 0, 0);
new Product('Bathroom', 'ETCETC', 65, 'img/bathroom.jpg', 0, 0);
new Product('Boots', 'ETCETC', 65, 'img/boots.jpg', 0, 0);
new Product('Breakfast', 'ETCETC', 65, 'img/breakfast.jpg', 0, 0);

new Product('Bubblegum', 'ETCETC', 65, 'img/bubblegum.jpg', 0, 0);
new Product('Chair', 'ETCETC', 65, 'img/chair.jpg', 0, 0);
new Product('Cthulhu', 'ETCETC', 65, 'img/cthulhu.jpg', 0, 0);
new Product('Dog Duck', 'ETCETC', 65, 'img/dog-duck.jpg', 0, 0);
new Product('Dragon', 'ETCETC', 65, 'img/dragon.jpg', 0, 0);

new Product('Pen', 'ETCETC', 65, 'img/pen.jpg', 0, 0);
new Product('Pet Sweep', 'ETCETC', 65, 'img/pet-sweep.jpg', 0, 0);
new Product('Scissors', 'ETCETC', 65, 'img/scissors.jpg', 0, 0);
new Product('Shark', 'ETCETC', 65, 'img/shark.jpg', 0, 0);
new Product('Sweep', 'ETCETC', 65, 'img/sweep.png', 0, 0);

new Product('Tauntaun', 'ETCETC', 65, 'img/tauntaun.jpg', 0, 0);
new Product('Unicorn', 'ETCETC', 65, 'img/unicorn.jpg', 0, 0);
new Product('Wine Glass', 'ETCETC', 65, 'img/wine-glass.jpg', 0, 0);
new Product('Water Can', 'ETCETC', 65, 'img/water-can.jpg', 0, 0);
new Product('USB', 'ETCETC', 65, 'img/usb.gif', 0, 0);

// placeholder views views

var picv1Views = document.getElementById('pic1Views').innerHTML = 'Views: Start';

var picv2Views = document.getElementById('pic2Views').innerHTML = 'Views: Start';

var picv3Views = document.getElementById('pic3Views').innerHTML = 'Views: Start';

// placeholder views votes

var picv1Votes = document.getElementById('pic1Votes').innerHTML = 'Votes: Start';

var picv2Votes = document.getElementById('pic2Votes').innerHTML = 'Votes: Start';

var picv3Votes = document.getElementById('pic3Votes').innerHTML = 'Votes: Start';

// now the render

function render() {

  var viewsA = 0;

  var viewsB = 0;

  var viewsC = 0;

  // random number for image 1

  var a = Math.floor(Math.random() * allProducts.length); // returns a random integer from 20

  // var a= 0;

  // random number for image 2

  var b = Math.floor(Math.random() * allProducts.length); // returns a random integer from 0 to 10

  // random number for image 3

  var c = Math.floor(Math.random() * allProducts.length); // returns a random integer from 0 to 10

  lineup.push(a, b, c);


///


////




////




// Here is store the first vote


  console.log(lineup);

<<<<<<< HEAD
=======
>>>>>>> 2c70a7540e5f06ea6f50a1b354742457c045bcd9
=======
>>>>>>> 816a6375466daa7943c907021fdfb2a8eb668611
  // random number for image 1

  pic1 = allProducts[a].img;

  viewsA ++;

  picv1Views = allProducts[a].tv += viewsA;

  // make img 2 not match 1

  while (a === b) {

    b = Math.floor(Math.random() * allProducts.length); // returns a random integer from 0 to 10

  }

  pic2 = allProducts[b].img;

  viewsB ++;

  picv2Views = allProducts[b].tv += viewsB;

  while (b === c || a === c) {

    c = Math.floor(Math.random() * allProducts.length); // returns a random integer from 0 to 10

  }

  pic3 = allProducts[c].img;

  viewsC ++;

  picv3Views = allProducts[c].tv += viewsC;


  document.getElementById("pic1").style.background = "url("+pic1+") blue no-repeat";
  document.getElementById("pic1").style.backgroundSize = '100% 100%';
  document.getElementById('pic1Views').innerHTML = 'Views: ' + allProducts[a].tv;

  document.getElementById('pic1Votes').innerHTML = 'Votes: ' + allProducts[a].tc;

  document.getElementById("pic2").style.background = "url("+pic2+")  blue no-repeat";
  document.getElementById("pic2").style.backgroundSize = '100% 100%';
  document.getElementById('pic2Views').innerHTML = 'Views: ' + allProducts[b].tv;

  document.getElementById('pic2Votes').innerHTML = 'Votes: ' + allProducts[b].tc;

  document.getElementById("pic3").style.background = "url("+pic3+")  blue no-repeat";
  document.getElementById("pic3").style.backgroundSize = '100% 100%';
  document.getElementById('pic3Views').innerHTML = 'Views: ' + allProducts[c].tv;
  document.getElementById('pic3Votes').innerHTML = 'Votes: ' + allProducts[c].tc;

  viewsA = 0;

  viewsB = 0;

  viewsC = 0;

  votecounter();


}


// Render

render();



function voteForOne(){

  console.log('When voting for one is: ' + lineup);

  var voteslip = lineup[0];

  allProducts[voteslip].tc ++;

  lineup = [];

  console.log(allProducts[voteslip].tv + 'new vote num' );

  //// till here

  var viewsA = 0;

  var viewsB = 0;

  var viewsC = 0;

  // random number for image 1

  var a = Math.floor(Math.random() * allProducts.length); // returns a random integer from 20

  // var a= 0;

  console.log('value of a is ' + a);

  // random number for image 2

  var b = Math.floor(Math.random() * allProducts.length); // returns a random integer from 0 to 10

  console.log('value of b is ' + b);

  // random number for image 3

  var c = Math.floor(Math.random() * allProducts.length); // returns a random integer from 0 to 10

  console.log('value of c is ' + c);

  lineup.push(a, b, c);

  console.log(lineup);

  // random number for image 1

  pic1 = allProducts[a].img;

  viewsA ++;

  picv1Views = allProducts[a].tv += viewsA;

  // make img 2 not match 1

  while (a === b) {

    b = Math.floor(Math.random() * allProducts.length); // returns a random integer from 0 to 10

  }

  pic2 = allProducts[b].img;

  viewsB ++;

  picv2Views = allProducts[b].tv += viewsB;

  while (b === c || a === c) {

    c = Math.floor(Math.random() * allProducts.length); // returns a random integer from 0 to 10

  }

  pic3 = allProducts[c].img;

  viewsC ++;

  picv3Views = allProducts[c].tv += viewsC;


  document.getElementById("pic1").style.background = "url("+pic1+") blue no-repeat";
  document.getElementById("pic1").style.backgroundSize = '100% 100%';
  document.getElementById('pic1Views').innerHTML = 'Views: ' + allProducts[a].tv;

  document.getElementById('pic1Votes').innerHTML = 'Votes: ' + allProducts[a].tc;
  console.log(allProducts[a].tc);

  document.getElementById("pic2").style.background = "url("+pic2+")  blue no-repeat";
  document.getElementById("pic2").style.backgroundSize = '100% 100%';
  document.getElementById('pic2Views').innerHTML = 'Views: ' + allProducts[b].tv;

  document.getElementById('pic2Votes').innerHTML = 'Votes: ' + allProducts[b].tc;

  document.getElementById("pic3").style.background = "url("+pic3+")  blue no-repeat";
  document.getElementById("pic3").style.backgroundSize = '100% 100%';
  document.getElementById('pic3Views').innerHTML = 'Views: ' + allProducts[c].tv;
  document.getElementById('pic3Votes').innerHTML = 'Votes: ' + allProducts[c].tc;

  viewsA = 0;

  viewsB = 0;

  viewsC = 0;

}


function voteForTwo(){

  console.log('When voting for one is: ' + lineup);

  var voteslip = lineup[1];

  allProducts[voteslip].tc ++;

  lineup = [];

  console.log(allProducts[voteslip].tv + 'new vote num' );

  //// till here

  var viewsA = 0;

  var viewsB = 0;

  var viewsC = 0;

  // random number for image 1

  var a = Math.floor(Math.random() * allProducts.length); // returns a random integer from 20

  // var a= 0;

  console.log('value of a is ' + a);

  // random number for image 2

  var b = Math.floor(Math.random() * allProducts.length); // returns a random integer from 0 to 10

  console.log('value of b is ' + b);

  // random number for image 3

  var c = Math.floor(Math.random() * allProducts.length); // returns a random integer from 0 to 10

  console.log('value of c is ' + c);

  lineup.push(a, b, c);

  console.log(lineup);

  // random number for image 1

  pic1 = allProducts[a].img;

  viewsA ++;

  picv1Views = allProducts[a].tv += viewsA;

  // make img 2 not match 1

  while (a === b) {

    b = Math.floor(Math.random() * allProducts.length); // returns a random integer from 0 to 10

  }

  pic2 = allProducts[b].img;

  viewsB ++;

  picv2Views = allProducts[b].tv += viewsB;

  while (b === c || a === c) {

    c = Math.floor(Math.random() * allProducts.length); // returns a random integer from 0 to 10

  }

  pic3 = allProducts[c].img;

  viewsC ++;

  picv3Views = allProducts[c].tv += viewsC;


  document.getElementById("pic1").style.background = "url("+pic1+") blue no-repeat";
  document.getElementById("pic1").style.backgroundSize = '100% 100%';
  document.getElementById('pic1Views').innerHTML = 'Views: ' + allProducts[a].tv;

  document.getElementById('pic1Votes').innerHTML = 'Votes: ' + allProducts[a].tc;
  console.log(allProducts[a].tc);

  document.getElementById("pic2").style.background = "url("+pic2+")  blue no-repeat";
  document.getElementById("pic2").style.backgroundSize = '100% 100%';
  document.getElementById('pic2Views').innerHTML = 'Views: ' + allProducts[b].tv;

  document.getElementById('pic2Votes').innerHTML = 'Votes: ' + allProducts[b].tc;

  document.getElementById("pic3").style.background = "url("+pic3+")  blue no-repeat";
  document.getElementById("pic3").style.backgroundSize = '100% 100%';
  document.getElementById('pic3Views').innerHTML = 'Views: ' + allProducts[c].tv;
  document.getElementById('pic3Votes').innerHTML = 'Votes: ' + allProducts[c].tc;

  viewsA = 0;

  viewsB = 0;

  viewsC = 0;

}

function voteForThree(){

  console.log('When voting for one is: ' + lineup);

  var voteslip = lineup[2];

  allProducts[voteslip].tc ++;

  lineup = [];

  console.log(allProducts[voteslip].tv + 'new vote num' );

  //// till here

  var viewsA = 0;

  var viewsB = 0;

  var viewsC = 0;

  // random number for image 1

  var a = Math.floor(Math.random() * allProducts.length); // returns a random integer from 20

  // var a= 0;

  console.log('value of a is ' + a);

  // random number for image 2

  var b = Math.floor(Math.random() * allProducts.length); // returns a random integer from 0 to 10

  console.log('value of b is ' + b);

  // random number for image 3

  var c = Math.floor(Math.random() * allProducts.length); // returns a random integer from 0 to 10

  console.log('value of c is ' + c);

  lineup.push(a, b, c);

  console.log(lineup);

  // random number for image 1

  pic1 = allProducts[a].img;

  viewsA ++;

  picv1Views = allProducts[a].tv += viewsA;

  // make img 2 not match 1

  while (a === b) {

    b = Math.floor(Math.random() * allProducts.length); // returns a random integer from 0 to 10

  }

  pic2 = allProducts[b].img;

  viewsB ++;

  picv2Views = allProducts[b].tv += viewsB;

  while (b === c || a === c) {

    c = Math.floor(Math.random() * allProducts.length); // returns a random integer from 0 to 10

  }

  pic3 = allProducts[c].img;

  viewsC ++;

  picv3Views = allProducts[c].tv += viewsC;


  document.getElementById("pic1").style.background = "url("+pic1+") blue no-repeat";
  document.getElementById("pic1").style.backgroundSize = '100% 100%';
  document.getElementById('pic1Views').innerHTML = 'Views: ' + allProducts[a].tv;

  document.getElementById('pic1Votes').innerHTML = 'Votes: ' + allProducts[a].tc;
  console.log(allProducts[a].tc);

  document.getElementById("pic2").style.background = "url("+pic2+")  blue no-repeat";
  document.getElementById("pic2").style.backgroundSize = '100% 100%';
  document.getElementById('pic2Views').innerHTML = 'Views: ' + allProducts[b].tv;

  document.getElementById('pic2Votes').innerHTML = 'Votes: ' + allProducts[b].tc;

  document.getElementById("pic3").style.background = "url("+pic3+")  blue no-repeat";
  document.getElementById("pic3").style.backgroundSize = '100% 100%';
  document.getElementById('pic3Views').innerHTML = 'Views: ' + allProducts[c].tv;
  document.getElementById('pic3Votes').innerHTML = 'Votes: ' + allProducts[c].tc;

  viewsA = 0;

  viewsB = 0;

  viewsC = 0;

}





// document.getElementById("pic1").style.background = "url('img/water-can.jpg') blue repeat-x center";

// function Product(name, info, price, img, tc, tv) {



// console.log(allProducts);

// function renderAllProducts() {

//   for(var i in allProducts) {

//     allProducts[i].render();

//   }

// }



// renderAllProducts();


function resetter() {

  console.log('starting func resetter');

  for(var i in allProducts) {

    allProducts[i].tv = 0;

  }

}

//Why re-invent the wheel?

// get the people per hour between the ranges

// CookieStore.prototype.custPerHr = function () {
//   return Math.ceil(Math.random() * ((this.maxCust) - (this.minCust)) + this.minCust);
// };

//get the cookies sold p/h

// CookieStore.prototype.cookiesPerHr = function () {
//   return Math.round(this.cookiesPerSale * this.custPerHr());
// };

function renderNums(){

  var ctx = document.getElementById('myChart').getContext('2d');
  var chart = new Chart(ctx, {
  // The type of chart we want to create
    type: 'horizontalBar',

    // The data for our dataset
    data: {
      labels: ['Bag', 'Banana', 'Bathroom', 'Boots', 'Breakfast', 'Bubblegum', 'Chair', 'Cthulhu', 'Dog Duck', 'Dragon', 'Pen', 'Pet Sweeper', 'Scissors', 'Shark', 'Baby Sweeper', 'Tauntaun', 'Unicorn', 'Usb', 'Water can', 'Wine glass'],
      datasets: [{
        label: 'Total votes',
        labelColor: '#000000',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(8, 10, 13)',
        data: [allProducts[0].tc, allProducts[1].tc,allProducts[2].tc, allProducts[3].tc,allProducts[4].tc, allProducts[5].tc,allProducts[6].tc, allProducts[7].tc,allProducts[8].tc, allProducts[9].tc,allProducts[10].tc, allProducts[11].tc,allProducts[12].tc, allProducts[13].tc,allProducts[14].tc, allProducts[15].tc,allProducts[16].tc, allProducts[17].tc,allProducts[18].tc, allProducts[19].tc]
      }]
    },


    /// now render the views


    // Configuration options go here
    options: {}
  });


}


function renderViews(){

  var ctx = document.getElementById('myChart2').getContext('2d');
  var chart = new Chart(ctx, {
  // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
      labels: ['Bag', 'Banana', 'Bathroom', 'Boots', 'Breakfast', 'Bubblegum', 'Chair', 'Cthulhu', 'Dog Duck', 'Dragon', 'Pen', 'Pet Sweeper', 'Scissors', 'Shark', 'Baby Sweeper', 'Tauntaun', 'Unicorn', 'Usb', 'Water can', 'Wine glass'],
      datasets: [{
        label: 'Views',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [allProducts[0].tv, allProducts[1].tv,allProducts[2].tv, allProducts[3].tv,allProducts[4].tv, allProducts[5].tv,allProducts[6].tv, allProducts[7].tv,allProducts[8].tv, allProducts[9].tv,allProducts[10].tv, allProducts[11].tv,allProducts[12].tv, allProducts[13].tv,allProducts[14].tv, allProducts[15].tv,allProducts[16].tv, allProducts[17].tv,allProducts[18].tv, allProducts[19].tv]
      }]
    },


    /// now render the views



    // Configuration options go here
    options: {}
  });


}


document.getElementById("pic1").addEventListener("click", function() {

  counter++;

  clickCounter();

  console.log('Counter is at ' + counter);

  if(counter > 24){

    renderNums();

    renderViews();

    document.getElementById('picRow').style.display = 'none';

    document.getElementById('spacerRow').style.display = 'none';

    document.getElementById('infoRow').style.backgroundColor = 'white';


  } else {

    voteForOne();


  }
});


document.getElementById("pic2").addEventListener("click", function() {

  counter++;

  clickCounter();


  if(counter > 24){

    renderNums();

    renderViews();

    document.getElementById('picRow').style.display = 'none';

    document.getElementById('spacerRow').style.display = 'none';

    document.getElementById('infoRow').style.backgroundColor = 'white';


  } else {

    voteForTwo();


  }

});

document.getElementById("pic3").addEventListener("click", function() {

  counter++;

  clickCounter();

  console.log(counter);

  if(counter > 24){

    renderNums();

    renderViews();

    document.getElementById('picRow').style.display = 'none';

    document.getElementById('spacerRow').style.display = 'none';

    document.getElementById('infoRow').style.backgroundColor = 'white';

  } else {

    voteForThree();


  }

});



function clickCounter() {
  if(typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("img21").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
  } else {
    document.getElementById("img21").innerHTML = "Sorry, your browser does not support web storage...";
  }
}

function voteCounter() {
  if(typeof(Storage) !== "undefined") {
    if (localStorage.votecount) {
      localStorage.votecount = Number(localStorage.votecount)+1;
    } else {
      localStorage.votecount = 1;
    }
    document.getElementById("img21").innerHTML = "You have clicked the button " + localStorage.votecount + " time(s).";
  } else {
    document.getElementById("img21").innerHTML = "Sorry, your browser does not support web storage...";
  }
}

function viewCounter() {
  if(typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("img21").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
  } else {
    document.getElementById("img21").innerHTML = "Sorry, your browser does not support web storage...";
  }
}


function getVals() {

  console.log(counter + ' counter retrieved at load.');

  if (localStorage.clickcount === undefined) {
    document.getElementById("img21").innerHTML = 'click an image!';
  } else {
    document.getElementById("img21").innerHTML = "You have voted: " + localStorage.clickcount + " time(s).";
    counter = parseInt(localStorage.clickcount);
  }

}

window.onload = (event) => {
  console.log('page is fully loaded');
  getVals();
};

