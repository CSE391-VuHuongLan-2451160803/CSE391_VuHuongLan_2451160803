console.log("Catalog");
const products = [
{
id:1,
name:"iPhone 16",
price:25990000,
category:"phone",
image:"https://placehold.co/200",
rating:4.5,
inStock:true
},
{
id:2,
name:"Samsung S24",
price:22990000,
category:"phone",
image:"https://placehold.co/200",
rating:4.4,
inStock:true
},
{
id:3,
name:"Pixel 9",
price:19990000,
category:"phone",
image:"https://placehold.co/200",
rating:4.6,
inStock:true
},
{
id:4,
name:"Macbook Pro",
price:45990000,
category:"laptop",
image:"https://placehold.co/200",
rating:4.8,
inStock:true
},
{
id:5,
name:"Dell XPS",
price:35990000,
category:"laptop",
image:"https://placehold.co/200",
rating:4.7,
inStock:true
},
{
id:6,
name:"ThinkPad X1",
price:32990000,
category:"laptop",
image:"https://placehold.co/200",
rating:4.5,
inStock:true
},
{
id:7,
name:"iPad Air",
price:16990000,
category:"tablet",
image:"https://placehold.co/200",
rating:4.6,
inStock:true
},
{
id:8,
name:"Xiaomi Pad 6",
price:7990000,
category:"tablet",
image:"https://placehold.co/200",
rating:4.2,
inStock:true
},
{
id:9,
name:"Galaxy Tab",
price:10990000,
category:"tablet",
image:"https://placehold.co/200",
rating:4.3,
inStock:true
},
{
id:10,
name:"AirPods Pro",
price:6990000,
category:"accessory",
image:"https://placehold.co/200",
rating:4.4,
inStock:true
},
{
id:11,
name:"Galaxy Buds",
price:3490000,
category:"accessory",
image:"https://placehold.co/200",
rating:4.1,
inStock:true
},
{
id:12,
name:"Logitech MX",
price:2490000,
category:"accessory",
image:"https://placehold.co/200",
rating:4.5,
inStock:true
}
];
const app = document.getElementById("app");

app.innerHTML = `
<header>
<h1>Product Catalog</h1>

<div>
🛒 <span id="cartBadge" class="badge">0</span>
<button id="darkBtn">Dark</button>
</div>
</header>

<div class="controls">
<input id="search" placeholder="Search">

<select id="sort">
<option value="">Sort</option>
<option value="priceAsc">Price ↑</option>
<option value="priceDesc">Price ↓</option>
<option value="name">Name A-Z</option>
<option value="rating">Rating</option>
</select>

<div id="categories"></div>
</div>

<div id="products" class="products"></div>

<div id="modal" class="modal hidden">
<div class="modal-content">
<h2 id="modalTitle"></h2>
<p id="modalPrice"></p>
<button id="closeModal">Close</button>
</div>
</div>
`;
let filteredProducts=[...products];

function renderProducts(data){

const container=
document.getElementById("products");

container.innerHTML="";

data.forEach(product=>{

const card=document.createElement("div");

card.className="card";

card.dataset.id=product.id;

card.innerHTML=`
<img src="${product.image}">
<h3>${product.name}</h3>
<p>${product.price.toLocaleString()}đ</p>
<p>⭐ ${product.rating}</p>
<button class="addCart">
Thêm giỏ
</button>
`;

container.append(card);

});

}

renderProducts(products);