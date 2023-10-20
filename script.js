/* const productsList = document.getElementById("productsLists");
const products=[{name:"product1", price:"10rs", image:"a.jpg" },
{name:"product2", price:"20rs", image:"b.jpg" },
{name:"product3", price:"30rs", image:"c.jpg" }];
products.forEach(product=>{
    const productElement =document.createElement('div');
    productElement.className="product";
    const img = document.createElement("img");
    img.src=product.image;
    const h3 = document.createElement("h3");
    h3.textContent= product.name;
}) */

document.addEventListener("DOMContentLoaded", function () {
    const productsList = document.getElementById("productsList");
   
    const products = [
    { name: "Product 1", price: "$10", image: "a.jpg" },
    { name: "Product 2", price: "$20", image: "a.jpg" },
    { name: "Product 3", price: "$30", image: "a.jpg" },
    ];
   
    products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.className = "product";
   
    const imageElement = document.createElement("img");
    imageElement.src = product.image;
    imageElement.alt = product.name;
   
    const nameElement = document.createElement("h3");
    nameElement.textContent = product.name;
   
    const priceElement = document.createElement("p");
    priceElement.textContent = product.price;
   
    productElement.appendChild(imageElement);
    productElement.appendChild(nameElement);
    productElement.appendChild(priceElement);
   
    productsList.appendChild(productElement);
    });
   
    const scrollToProductsLink = document.getElementById("scrollToProducts");
    const featuredProducts = document.getElementById("featuredProducts");
   
    scrollToProductsLink.addEventListener("click", function (event) {
    event.preventDefault();
   
    featuredProducts.scrollIntoView({ behavior: "smooth" });
    });
    });
