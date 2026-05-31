const images = [

"https://picsum.photos/id/10/800/400",
"https://picsum.photos/id/20/800/400",
"https://picsum.photos/id/30/800/400",
"https://picsum.photos/id/40/800/400",
"https://picsum.photos/id/50/800/400",
"https://picsum.photos/id/60/800/400",
"https://picsum.photos/id/70/800/400",
"https://picsum.photos/id/80/800/400",
"https://picsum.photos/id/90/800/400"

];

const mainImage =
document.querySelector("#mainImage");

const thumbs =
document.querySelector("#thumbs");

let current = 0;

images.forEach((img,index)=>{

const image=document.createElement("img");

image.src=img;

image.addEventListener("click",()=>{

current=index;
showImage();

});

thumbs.appendChild(image);

});

function showImage(){

mainImage.src=images[current];

}

showImage();
document.addEventListener("keydown",(e)=>{

if(e.key==="ArrowRight"){

current++;

if(current>=images.length){
current=0;
}

showImage();

}

if(e.key==="ArrowLeft"){

current--;

if(current<0){
current=images.length-1;
}

showImage();

}

if(e.key>="1" && e.key<="9"){

const index=Number(e.key)-1;

if(images[index]){

current=index;
showImage();

}

}

});
const modal =
document.querySelector("#modal");

const modalImage =
document.querySelector("#modalImage");

mainImage.addEventListener("click",()=>{

modalImage.src=images[current];

modal.classList.remove("hidden");

});

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

modal.classList.add("hidden");

}

});
let playing=false;
let timer=null;

function nextImage(){

current++;

if(current>=images.length){

current=0;

}

showImage();

}

document.addEventListener("keydown",(e)=>{

if(e.code==="Space"){

e.preventDefault();

playing=!playing;

if(playing){

timer=setInterval(nextImage,2000);

}else{

clearInterval(timer);

}

}

});
const palette =
document.querySelector("#palette");

const commandInput =
document.querySelector("#commandInput");

const commandBtn =
document.querySelector("#commandBtn");
function openPalette(){

palette.classList.remove("hidden");

commandInput.focus();

}

function closePalette(){

palette.classList.add("hidden");

}
commandBtn.addEventListener(
"click",
openPalette
);

document.addEventListener("keydown",(e)=>{

if(e.ctrlKey && e.key==="k"){

e.preventDefault();

openPalette();

}

if(e.key==="Escape"){

closePalette();

}

});
const commandList =
document.querySelector("#commandList");

commandInput.addEventListener("input",()=>{

const value=
commandInput.value.toLowerCase();

const items=
commandList.querySelectorAll("li");

items.forEach(item=>{

item.style.display=
item.textContent
.toLowerCase()
.includes(value)
? "block"
: "none";

});

});
commandInput.addEventListener("keydown",(e)=>{

if(e.key==="Enter"){

alert("Command executed");

closePalette();

}

});