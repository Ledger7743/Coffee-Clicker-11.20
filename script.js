/* eslint-disable no-alert */

/***The line below allows us to access the data from the window object.
 * This comes from the data.js file***/
const data = window.data;

/***Before we can begin manipulating the DOM we need to gain access to two DOM Nodes***/
// 1. Declare a variable bigCoffee that holds reference to the element with id 'big_coffee'.
const bigCoffee = document.getElementById('big_coffee');

// 2. Declare a variable producerContainer that holds reference to the element with id 'producer_container'.
const producerContainer = document.getElementById('producer_container');

/***Don't worry about the specifics of the condition in this if statement for now.
 * Just follow the instructions in it to ensure the application has base functionality.
 * We'll discuss in depth later what process is, but it's not necessary just yet.***/
if (typeof process === 'undefined') {
  /********************
   *   Event Listeners
   ********************/

  /* 1. Add a 'click' event listener to the bigCoffee element(giant coffee emoji) you referenced above.
   * It should call the clickCoffee function below and be passed the global data object.*/
  bigCoffee.addEventListener ('click', () => clickCoffee(data));

  /* 2. Add a 'click' event listener to the producerContainer(Coffee Producers panel) you referenced above.
   * It should call the buyButtonClick function below and be passed the browser event and global data object.*/
  producerContainer.addEventListener('click', (event) => buyButtonClick(event, data));
 
  //function buyButtonClick(event, data) {
  // your code here
  //}

  // You don't need to edit this line of code. It calls the tick function passing in the data object every 1000ms or 1s.
  setInterval(() => tick(data), 1000);
}

// Now you're ready to start running the tests. Good luck!

/**************
 *   SLICE 1
 **************/
 const coffeeCounter = document.getElementById('coffee_counter')


function updateCoffeeView(coffeeQty) {
    //  constant variable (coffeeCounter is equal to the ID 'coffee_counter')
      const coffeeCounter = document.getElementById('coffee_counter');
    
   // variable coffeecounter.(all child nodes are removed and replaced by only one new text node) string = coffeeqty (the number of coffees)   
     
    coffeeCounter.innerText =coffeeQty;
    //console.log("XQQQQQQQ" , coffeeQty)
     
  }


function clickCoffee(data) {
//variable before ++ = returns that now
//variable after ++ = returns that later 
  let newQty =data.coffee +=1;
  return updateCoffeeView(newQty);

}

/**************
 *   SLICE 2
 **************/

// Reguler for loop solution that works with arrays
function unlockProducers(producers, coffeeCount) {
  for (let i = 0; i < producers.length; i++) {
    if (coffeeCount >= producers[i].price / 2) {
      producers[i].unlocked = true;
    }
  }

 // while (coffeeCount >= data.results.properties) {
 //   let unlockProducers = true;
 //   }
}
   // loop through the producers array passed into the function
  // for each producer, if the coffeeCount (passed in) is greater than or equal
  // to half the producer's price, reassign the producers.unlocked property to equal true

function getUnlockedProducers(data) {
    const results = data.producers.filter(producers => producers.unlocked === true);
    // console.log (results);
    return(results);

  // // use the Array.prototype.filter() method
  // filter through the data.producers property, and return an array with only the producers whose
  // unlocked property is true
}

function makeDisplayNameFromId(id) {
  const removeChar = id.replaceAll('_', ' ');
  //console.log(removeChar)
  // want to remove All the '_' first
  const words = removeChar.split(" ");
  //console.log(words)
  // want to split words into array so we can attack each word separately
  for (let i=0; i<words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    //substr - is the string within the string
  }

  return words.join("_");
  //lastly word is still in the array but has its first letter capitalized. We then need to string the array back together to close it. 
  
}

// You shouldn't need to edit this function-- its tests should pass once you've written makeDisplayNameFromId
function makeProducerDiv(producer) {
  const containerDiv = document.createElement('div');
  containerDiv.className = 'producer';
  const displayName = makeDisplayNameFromId(producer.id);
  const currentCost = producer.price;
  const html = `
  <div class="producer-column">
    <div class="producer-title">${displayName}</div>
    <button type="button" id="buy_${producer.id}">Buy</button>
  </div>
  <div class="producer-column">
    <div>Quantity: ${producer.qty}</div>
    <div>Coffee/second: ${producer.cps}</div>
    <div>Cost: ${currentCost} coffee</div>
  </div>
  `;
  containerDiv.innerHTML = html;
  return containerDiv;
}

function deleteAllChildNodes(parent) {
  while (parent.hasChildnodes()){
    parent.removeChild(parent.firstChild);
    //googled has to remove child nodes. Not sure how this works....
  }
}

function renderProducers(data) {
  unlockProducers(data.producers, data.coffee);
  const producerContainer = document.querySelector("#producer_container");
  deleteAllChildNodes(producerContainer);
  let unlockedProdOnly = getUnlockedProducers(data);
  let newProducerDiv = makeProducerDiv(unlockedProdOnly);

 //makeProducerContainer.append(); 

 producerContainer.appendChild(newProducersDiv);

}



 //var render = function (bigCoffee, producer_container) {
  //var node = document.querySelector(selector);
  //if(!node) return;
 // node.innerHTML = template;

 
 //render(template, '#main');






/**************
 *   SLICE 3
 **************/

function getProducerById(data, producerId) {
  // your code here
}

function canAffordProducer(data, producerId) {
  // your code here
}

function updateCPSView(cps) {
  // your code here
}

function updatePrice(oldPrice) {
  // your code here
}

function attemptToBuyProducer(data, producerId) {
  // your code here
}

function buyButtonClick(event, data) {
  // your code here
}

function tick(data) {
  // your code here
}

/**********************************
 *  Congratulations! You did it!
 **********************************/

// You don't need to edit any of the code below
// If we aren't in a browser and are instead in node
// we'll need to export the code written here so we can import and
// run the tests in Mocha. More on this later.
// Don't worry if it's not clear exactly what's going on here.
if (typeof process !== 'undefined') {
  module.exports = {
    updateCoffeeView,
    clickCoffee,
    unlockProducers,
    getUnlockedProducers,
    makeDisplayNameFromId,
    makeProducerDiv,
    deleteAllChildNodes,
    renderProducers,
    updateCPSView,
    getProducerById,
    canAffordProducer,
    updatePrice,
    attemptToBuyProducer,
    buyButtonClick,
    tick,
  };
}
