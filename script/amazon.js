//This console.log below is used to test if the page is working. Do this first any time you create a new js page
//  console.log ('hello');

/*
Main idea of JS (i.e. 3 step proecess)
1. save the data
2. generate the html
3. make it interactive 

what save the data means:
Data means information. In our case  with the amazon product, it means saving the information about 

 */

/*const product = [{
    image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
    name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',

    rating: {
        stars: 4.5,
        count: 87
    },
    priceCents: 1090
}, {
   image: 'images/products/intermediate-composite-basketball.jpg',
   name: 'intermediate composite basketball',

   rating:{
    stars: 4,
    count: 127
   },
   priceCents: 2095
}, {
image: 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
name: 'Adults Plain Cotton T-Shirt - 2 Pack',

rating: {
 stars: 4.5,
 count: 56
},
priceCents: 799

}, {
image: 'images/products/black-2-slot-toaster.jpg',
name: '2 Slot Toaster - Black',

rating: {
    stars: 5,
    count: 2197,    
},
priceCents: 1899

}
];*/

//all the above object in the variable is called a data structure because it organzes the data. Also, note that this data consist of a list of product 

//Also note that in JS, we typically use a combination of objects and arrays to create a data structure in js. 

//Now that we have saved the data, the next step is to use this data to generate the html. To generate the html, we can loop thru the array of data above. This is what we are doing below: 

let productsHTML = '';

products.forEach((products) => {
   productsHTML +=  `
       <div class="product-container">
                <div class="product-image-container">
                    <img class="product-image"
                    src="${products.image}">
                </div>

                <div class="product-name limit-text-to-2-lines">
                    ${products.name}
                </div>

                <div class="product-rating-container">
                    <img class="product-rating-stars"
                    src="images/ratings/rating-${products.rating.stars * 10}.png">
                    <div class="product-rating-count link-primary">
                    ${products.rating.count}
                    </div>
                </div>

                <div class="product-price">
                    $${(products.priceCents / 100).toFixed(2)}
                </div>

                <div class="product-quantity-container">
                    <select>
                    <option selected value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    </select>
                </div>

                <div class="product-spacer"></div>

                <div class="added-to-cart">
                    <img src="images/icons/checkmark.png">
                    Added
                </div>

                <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${products.id}">
                    Add to Cart
                </button>
                </div>

                 
  `;

});

/* How do we know which product to add:
To achieve this, we will use a feature of html called DATA ATTRIBUTE (DA).
DA is just another HTML attribute.
DA allows us to attach any information to an element
SYNTAX RULE FOR DATA ATTRIBUTE:
DA is just an HTML attribute. It has a name and a value. eg: below:

data-product-name="${products.name}
data-product-name= (name). DA must strate with "data-" and then we can give it any name we want, in our case we used "product-name". We must also seperate the words with "-"

"${products.name}(value)

NB: we can also attach product image and product price to the data attribute. 



*/


  //random fact: the .toFixed() method is used to show a number with two decimal places in javascript 
//Next we will combine all the html together into one string, and put it on the webpage. This is what we did with the variable "let productsHTML = '';"

//Finally, we put the product on the page by using the html to do so. We do so below:

document.querySelector('.js-products-grid').innerHTML = productsHTML;


/*
The benefits of generating the html in js includes is
if we want to add another product all we need to go up to the data and add a new product. 

 */

document.querySelectorAll('.js-add-to-cart')
.forEach((button) => {
   button.addEventListener('click', () => {

   const productId = button.dataset.productId;



let matchingItem;

   cart.forEach((item) => {
    if (productId === item.productId) {
        matchingItem = item;
    }
   });

if (matchingItem) {
    matchingItem.quantity += 1;
} else {
    cart.push({
    productId: productId, 
    quantity: 1
   });
}



   console.log(cart);
   });

});

/*
How to add multiple quantities to cart. Step by step:
1. first we will chck if product is already in cart
2. if it is in cart, increate the quantity by 1
3. if it is not in the cart, add it to cart. 

*/


/*
Problem:

What if we have 2 products that have the same name but they are from different sellers, how do we differenciate them: 
To flx thi: 

We will give each product an id
*/