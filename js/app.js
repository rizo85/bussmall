/* eslint-disable no-unused-vars */
'use strict';

/*

My code has a lot of issues, chief amongts them is that im displaying the same images sometimes twice in a row.
It should always be random 3 no repeats. Had to redo everything and add an array to have some references.

Created an array with random number so as to not repeat them, and populate it with some numbers so as to have something to compare it to:
*/

var randomNumbersForImages = [1,2,3];

//sure, the first three are hard coded, but the next set will be random and not create a pattern.

//array for my products

var productsList = [];

var totalClickCounter = 0;

function Product (productName, filePath, clicks, timesDisplayed) {
  this.productName = productName;
  this.filePath = filePath;
  this.clicks = 0;
  this.timesDisplayed = 0;
  productsList.push(this);
}

//Create instances

//bs
var bag = new Product('Bag', 'img/bag.jpg', 0, 0);
var banana = new Product('Banana', 'img/banana.jpg', 0, 0);
var bathroom = new Product('Bathroom', 'img/bathroom.jpg', 0, 0);
var boots = new Product('Boots', 'img/boots.jpg', 0, 0);
var breakfast = new Product('Breakfast', 'img/breakfast.jpg', 0, 0);
var bubblegum = new Product('Bubblegum', 'img/bubblegum.jpg', 0, 0);

//cs
var chair = new Product('Chair', 'img/chair.jpg', 0, 0);
var cthulhu = new Product('Cthulhu', 'img/cthulhu.jpg', 0, 0);

//ds
var dog = new Product('Dog', 'img/dog-duck.jpg', 0, 0);
var dragon = new Product('Dragon', 'img/dragon.jpg', 0, 0);

//p
var pen = new Product('Pen', 'img/Pen.jpg', 0, 0);
var petSweep = new Product('Pet Sweeper', 'img/pet-sweep.jpg', 0, 0);

//s
var scissors = new Product('Scissors', 'img/scissors.jpg', 0, 0);
var shark = new Product('Shark', 'img/shark.jpg', 0, 0);
var sweep = new Product('Baby Sweeper', 'img/sweep.png', 0, 0);

//t
var tauntaun = new Product('Tauntaun', 'img/tauntaun.jpg', 0, 0);

//u
var unicorn = new Product('Unicorn', 'img/unicorn.jpg', 0, 0);
var usb = new Product('USB', 'img/usb.gif', 0, 0);

//w
var watercan = new Product('Water Can', 'img/water-can.jpg', 0, 0);
var wineglass = new Product('Wine Glass', 'img/wine-glass.jpg', 0, 0);

//Assigning variable names to each product displayed
var productLeft = document.getElementById('pic1');
var productCenter = document.getElementById('pic2');
var productRight = document.getElementById('pic3');

productLeft.addEventListener('click', handleClickOnProductLeft);
productCenter.addEventListener('click', handleClickOnProductCenter);
productRight.addEventListener('click', handleClickOnProductRight);

//Declare global variables to store the random numbers generated within the randomMaker function
var randomNumLeft;
var randomNumCenter;
var randomNumRight;

//Calls imageMaker function to initially set a group of images when browser window loads
imageMaker();

var clickData = localStorage.getItem('clickPersist');
if (clickData) {
  totalClicks = parseInt(localStorage.getItem('clickPersist'));
} else {
  var totalClicks = 0;
}

// Creating a function to handle click on left product window
function handleClickOnProductLeft() {
  if (totalClicks > 0) {

    productsList = JSON.parse(localStorage.getItem('chartPersist'));
    totalClicks = parseInt(localStorage.getItem('clickPersist'));
    // document.getElementById('img22').innerHTML = intparse(totalClicks);
  }

  productsList[randomNumLeft].clicks++;
  console.log('Left was clicked');
  imageMaker();
  totalClicks += 1;
  console.log();
  console.log('The total number of clicks is ' + totalClicks);

  // showing the number of click on screen
  document.getElementById('img21').innerHTML = totalClicks;
  localStorage.setItem('chartPersist',JSON.stringify(productsList));
  localStorage.setItem('clickPersist',totalClicks);
  if (totalClicks >= 25) {
    document.getElementById('picRow').style.display = 'none';
    document.getElementById('spacerRow').style.display = 'none';
    document.getElementById('infoRow').style.backgroundColor = 'white';
    // displayResults();
  }
}

// Creating a function to handle click on center product window
function handleClickOnProductCenter() {
  if (totalClicks > 0) {
    productsList = JSON.parse(localStorage.getItem('chartPersist'));
    totalClicks = parseInt(localStorage.getItem('clickPersist'));
  }
  productsList[randomNumCenter].clicks++;
  console.log('Center was clicked');
  imageMaker();
  totalClicks += 1;
  console.log('The total number of clicks is ' + totalClicks);

  // showing the number of click on screen
  document.getElementById('img21').innerHTML = totalClicks;
  localStorage.setItem('chartPersist',JSON.stringify(productsList));
  localStorage.setItem('clickPersist',totalClicks);
  if (totalClicks >= 25) {

    document.getElementById('picRow').style.display = 'none';
    document.getElementById('spacerRow').style.display = 'none';
    document.getElementById('infoRow').style.backgroundColor = 'white';
  }
}
// Creating a function to handle click on right product window
function handleClickOnProductRight() {
  if (totalClicks > 0) {
    productsList = JSON.parse(localStorage.getItem('chartPersist'));
    totalClicks = parseInt(localStorage.getItem('clickPersist'));
  }
  productsList[randomNumRight].clicks++;
  console.log('Right was clicked');
  imageMaker();
  totalClicks += 1;
  console.log('The total number of clicks is ' + totalClicks);

  // showing the number of click on screen
  document.getElementById('img21').innerHTML = totalClicks;
  localStorage.setItem('chartPersist',JSON.stringify(productsList));
  localStorage.setItem('clickPersist',totalClicks);
  if (totalClicks >= 25) {

    document.getElementById('picRow').style.display = 'none';
    document.getElementById('spacerRow').style.display = 'none';
    document.getElementById('infoRow').style.backgroundColor = 'white';
  }
}

// Finding my buttons on the html

var button = document.getElementById('button');
var button2 = document.getElementById('button2');


// My buttons event listener
button.addEventListener('click', handleButtonClicked);
button2.addEventListener('click', handleButtonClicked2);



function handleButtonClicked() {
  localStorage.clear();
  window.location.reload();
}


//Function to generate chart


function chartMaker(){

  var ctx = document.getElementById('myChart').getContext('2d');
  var chart = new Chart(ctx, {
  // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
      labels: ['Bag', 'Banana', 'Bathroom', 'Boots', 'Breakfast', 'Bubblegum', 'Chair', 'Cthulhu', 'Dog Duck', 'Dragon', 'Pen', 'Pet Sweeper', 'Scissors', 'Shark', 'Baby Sweeper', 'Tauntaun', 'Unicorn', 'Usb', 'Water can', 'Wine glass'],
      datasets: [{
        label: 'Votes',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [productsList[0].clicks, productsList[1].clicks, productsList[2].clicks, productsList[3].clicks, productsList[4].clicks, productsList[5].clicks, productsList[6].clicks, productsList[7].clicks, productsList[8].clicks, productsList[9].clicks, productsList[10].clicks, productsList[11].clicks, productsList[12].clicks, productsList[13].clicks, productsList[14].clicks, productsList[15].clicks, productsList[16].clicks, productsList[17].clicks, productsList[18].clicks, productsList[19].clicks]
      }]
    },


    /// now render the views



    // Configuration options go here
    options: {}
  });


}

function chartMaker2(){

  var ctx2 = document.getElementById('myChart2').getContext('2d');
  var chart2 = new Chart(ctx2, {
  // The type of chart we want to create
    type: 'horizontalBar',

    // The data for our dataset
    data: {
      labels: ['Bag', 'Banana', 'Bathroom', 'Boots', 'Breakfast', 'Bubblegum', 'Chair', 'Cthulhu', 'Dog Duck', 'Dragon', 'Pen', 'Pet Sweeper', 'Scissors', 'Shark', 'Baby Sweeper', 'Tauntaun', 'Unicorn', 'Usb', 'Water can', 'Wine glass'],
      datasets: [{
        label: 'Views',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [productsList[0].timesDisplayed, productsList[1].timesDisplayed, productsList[2].timesDisplayed, productsList[3].timesDisplayed, productsList[4].timesDisplayed, productsList[5].timesDisplayed, productsList[6].timesDisplayed, productsList[7].timesDisplayed, productsList[8].timesDisplayed, productsList[9].timesDisplayed, productsList[10].timesDisplayed, productsList[11].timesDisplayed, productsList[12].timesDisplayed, productsList[13].timesDisplayed, productsList[14].timesDisplayed, productsList[15].timesDisplayed, productsList[16].timesDisplayed, productsList[17].timesDisplayed, productsList[18].timesDisplayed, productsList[19].timesDisplayed]
      }]
    },


    /// now render the views



    // Configuration options go here
    options: {}
  });


}



function handleButtonClicked2() {
  chartMaker();
  chartMaker2();
}



//
//Generates a random integer
function randoMaker() {
  var randomNumber = Math.floor(Math.random() * productsList.length);
  //this pushes to my random array
  randomNumbersForImages.push(randomNumber);
  console.log('random num is: ' + randomNumber);
  return randomNumber;
}

//Function to create a set of 3 different images on the screen and log how many times the image displayed
function imageMaker() {


  randomNumLeft = randoMaker();
  console.log(randomNumLeft);
  randomNumCenter = randoMaker();

  while(randomNumLeft === randomNumCenter || randomNumCenter === randomNumbersForImages[0] || randomNumCenter === randomNumbersForImages[1] || randomNumCenter === randomNumbersForImages[2]) {
    randomNumCenter = randoMaker();
  }

  console.log(randomNumCenter);
  randomNumRight = randoMaker();
  while(randomNumRight === randomNumLeft || randomNumRight === randomNumCenter || randomNumRight === randomNumbersForImages[0] || randomNumRight === randomNumbersForImages[1] || randomNumRight === randomNumbersForImages[2]) {
    randomNumRight = randoMaker();
  }

  console.log(randomNumRight);

// I want the name of the products to show

  document.getElementById('pic1Views').innerHTML = '' + productsList[randomNumLeft].productName + '';
  document.getElementById('pic2Views').innerHTML = '' + productsList[randomNumCenter].productName + '';
  document.getElementById('pic3Views').innerHTML = '' + productsList[randomNumRight].productName + '';

  productLeft.src = productsList[randomNumLeft].filePath;
  productsList[randomNumLeft].timesDisplayed++;
  productCenter.src = productsList[randomNumCenter].filePath;
  productsList[randomNumCenter].timesDisplayed++;
  productRight.src = productsList[randomNumRight].filePath;
  productsList[randomNumRight].timesDisplayed++;


  // deleting my random array older values to allow the images to come back.
  randomNumbersForImages.shift();
  randomNumbersForImages.shift();
  randomNumbersForImages.shift();

}


