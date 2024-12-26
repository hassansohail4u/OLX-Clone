// console.log("Hello World!");

const div = document.querySelector("#container")
const input = document.querySelector("#user-input")

function render() {
    fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(res => {
    console.log(res);

    res.products.map((items , index) => {

    // console.log(items);
    

        div.innerHTML += `
     <div class="cart">
            <img class="products-image" src="${items.thumbnail}" alt="Product Thumbnail">
            <h5 class="product-title">${items.title}</h5>
            <h5 class="fs-5 my-2">Category : <span class="product-category">${items.category}</span> </h5>
            <p class="product-price">Price :<span class="price"> $${items.price} </span></p>
            <button class="product-btn me-2" onclick="seeMore(${items.id})">See More</button>
            <button class="product-btn" onclick="addToCart(${index})">Add to Cart</button>
        </div>`
    })
});
}

render()


input.addEventListener("input" , () => {
searchItems()
})

function searchItems() {
    console.log(input.value);

        fetch(`https://dummyjson.com/products/search?q=${input.value}`)
.then(res => res.json())
.then(res => {
    console.log(res);
    div.innerHTML = ""
    
    res.products.map((items , index) => {
        div.innerHTML += `
        <div class="cart">
               <img class="products-image" src="${items.thumbnail}" alt="Product Thumbnail">
               <h5 class="product-title">${items.title}</h5>
               <h5 class="fs-5 my-2">Category : <span class="product-category">${items.category}</span> </h5>
               <p class="product-price">Price :<span class="price"> $${items.price} </span></p>
               <button class="product-btn me-2" onclick="seeMore(${index})">See More</button>
               <button class="product-btn" onclick="">Add to Cart</button>
           </div>`
    })
}).catch((err) => {
    div.innerHTML += `<h1> Item Not Found </h1>`
})


}

console.log("Hello".toLowerCase());


function filter(btnName) {
    
    div.innerHTML = ""

    var button = btnName.innerHTML
    // console.log(button.toLowerCase());
    

    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(res => {
        // console.log(res);

    
        var filteredArr = res.products.filter((items) => items.category == button.toLowerCase())

        console.log(filteredArr);
        
        filteredArr.map((items , index) => {
            div.innerHTML += `
            <div class="cart">
                   <img class="products-image" src="${items.thumbnail}" alt="Product Thumbnail">
                   <h5 class="product-title">${items.title}</h5>
                   <h5 class="fs-5 my-2">Category : <span class="product-category">${items.category}</span> </h5>
                   <p class="product-price">Price :<span class="price"> $${items.price} </span></p>
                   <button class="product-btn me-2" onclick="">See More</button>
                   <button class="product-btn" onclick="">Add to Cart</button>
               </div>`
        })
      })
}

function allItems(){
    div.innerHTML = ""

    render()
}


function seeMore(id){
    console.log(id);
    
    localStorage.setItem("id" , id)
    location = "./singleCart.html"
}


// masla

var cartItems = []


function addToCart(index){
    // console.log(index);

    fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(res => {


        if(cartItems.indexOf(res.products[index]) == -1){
            console.log("if");
            console.log(cartItems.indexOf(res.products[index]));
            
            cartItems.push(res.products[index])
            res.products[index].quantity = 1
            console.log(cartItems.indexOf(res.products[index]));
            
            
            
            
        }
        else{
            console.log("else");
            res.products[index].quantity += 1
            
        }
    console.log(cartItems);
    

    })       
}

// sir sa smajna


// const checkLocalStorageData = JSON.parse(localStorage.getItem("cartItems"))
 
//  if (checkLocalStorageData == null) {
//    cartItems = []
//  }else{
//    cartItems = [...checkLocalStorageData]
//  }


// search wali api add to Cart kesa ho sakhti hai
// phone app ma addToCart ki file ma jab delete ka button per click ho to wo object localStorage wali array sa bhi delete hojai


// Topics
 
// Prototype
// Object literal
// Object oriented progamming
// prototypical language
// ES6 classes behind the scene protype syntactic sugar
// Constructor Function
// Classes
// constructor
// static method




















// pending
// Fullfilled
// rejected