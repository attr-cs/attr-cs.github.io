const items = [
    {name:"Jeans",price:20,id:"item0"},
    {name:"T-shirt",price:98,id:"item1"},
    {name:"coat",price:1200,id:"item2"},
    {name:"pants",price:780,id:"item3"},
    {name:"shoes",price:54,id:"item4"},
];

const itemsContainer = document.getElementById("items");
const cartContainer = document.getElementById("cart-items");
const priceArea = document.getElementById("price");
const noOfItems = document.getElementById("item-no");


let cart = [];
let counter = 0;
let price = 0;
let itemNo = 0;
let listEmpty = 1;

items.forEach(element => {
    addToItems(element);
});

const item1 = document.getElementById("item0");
const item2 = document.getElementById("item1");
const item3 = document.getElementById("item2");
const item4 = document.getElementById("item3");
const item5 = document.getElementById("item4");



onClickOnItem(item1);
onClickOnItem(item2);
onClickOnItem(item3);
onClickOnItem(item4);
onClickOnItem(item5);

let tempItem;
function addToCart(item)
{
    itemNo++;
    tempItem = item;
    tempItem.id1 = itemNo;
    cart.push(item);
    cartContainer.innerHTML += `<p class="cartItem" id="${itemNo}">${itemNo} - ${item.name} of cost <b>$${item.price}</b> <span id="green">added!</span></p>`
    price += item.price;
    priceArea.innerText = price;
    noOfItems.innerText = itemNo;
    listEmpty = 0;
        if (!listEmpty){
            const tempone = document.getElementById("text2");
            tempone.innerText = "";
        }
    cartContainer.scrollTop = cartContainer.scrollHeight;
}


function onClickOnItem(myItem)
{
    myItem.onclick = ()=>{
        items.forEach(element=>{
            if(element.id == myItem.id)
            {
                addToCart(element);
            }
        });
    };    
}

function addToItems(element)
{
    itemsContainer.innerHTML += `<p id="item${counter++}">Name: <span class="name">${element.name}</span> Price: <span id="green">$</span>${element.price}</p>`
}


let customName = "";
let customPrice = 0;
const nameInput = document.getElementById("item-name");
const priceInput = document.getElementById("item-price");
const customButton = document.getElementById("mybutton");
const textArea = document.getElementById("text");
const customItems = [];

customButton.onclick = ()=>{
    myButton();
};

function myButton()
{

    customName = nameInput.value;
    customPrice = parseFloat(priceInput.value);
    if(customName == "" || customPrice == 0)
    {
        textArea.innerHTML = "<p style=\"color:red;\"><img width=\"16px\" src=\"./svg/delete.svg\" alt=\"wrong\"> Invalid details!</p>";      
    }
    else{
        let tempItem = {};
        tempItem.name = customName;
        tempItem.price = customPrice;
        customItems.push(tempItem);
        textArea.innerHTML = "<p style=\"color:green;\"><img width=\"16px\" src=\"./svg/icons8-tick.svg\" alt=\"tick\"> Added!</p>";      
        
        addToCart(tempItem);
    }
}

// Add click event listener to each item by ID
document.getElementById('item0').addEventListener('click', () => {
    addDollarEffect('item0');
  });
  
  document.getElementById('item1').addEventListener('click', () => {
    addDollarEffect('item1');
  });
  
  document.getElementById('item2').addEventListener('click', () => {
    addDollarEffect('item2');
  });
  
  document.getElementById('item3').addEventListener('click', () => {
    addDollarEffect('item3');
  });
  
  document.getElementById('item4').addEventListener('click', () => {
    addDollarEffect('item4');
  });
  // Function to add the evaporate effect and create a new dollar sign element
  function addDollarEffect(itemId) {
    const item = document.getElementById(itemId);
    const dollar = document.createElement('span');
    dollar.className = 'dollar';
    dollar.textContent = '$'; // Dollar sign content
    item.appendChild(dollar);
  
    // After a short delay, remove the "dollar" element to reset the effect
    setTimeout(() => {
      dollar.remove();
    }, 5000); // Adjust the delay to match the duration of the animation
  }
  